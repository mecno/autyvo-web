# ─── Build stage ──────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Arguments pour les variables d'environnement au build-time (Keycloak)
ARG VITE_KEYCLOAK_URL
ARG VITE_KEYCLOAK_REALM
ARG VITE_KEYCLOAK_CLIENT_ID
ARG VITE_KEYCLOAK_REDIRECT_URI
ARG VITE_API_BASE_URL

# Les passer comme variables d'environnement pour Vite
ENV VITE_KEYCLOAK_URL=${VITE_KEYCLOAK_URL}
ENV VITE_KEYCLOAK_REALM=${VITE_KEYCLOAK_REALM}
ENV VITE_KEYCLOAK_CLIENT_ID=${VITE_KEYCLOAK_CLIENT_ID}
ENV VITE_KEYCLOAK_REDIRECT_URI=${VITE_KEYCLOAK_REDIRECT_URI}
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer toutes les dépendances (dev incluses pour le build)
RUN npm ci

# Copier le code source
COPY . .

# Build de production avec Vite
RUN npm run build

# ─── Runtime stage avec Nginx ──────────────────────────────────
FROM nginx:1.27-alpine

# Créer un utilisateur non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copier les fichiers buildés depuis l'étape précédente
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier la configuration nginx principale (sans directive 'user' pour éviter le warning)
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Changer les permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

USER appuser

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
