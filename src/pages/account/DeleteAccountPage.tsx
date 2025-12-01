import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material';
import {
  Warning as WarningIcon
} from '@mui/icons-material';
import {
  PageContainer,
  PagePaper,
  PageTitle,
  SectionTitle,
  BodyText,
  SecondaryText,
  BulletList,
  BulletItem,
  ConfirmDialog,
  AlertBox,
  ContentBox
} from '@/components/ui';
import { userService } from '@/services/userService';

export default function DeleteAccountPage() {
  const { t } = useTranslation(['delete-account', 'common']);
  const { user, getAccessTokenSilently } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Validation de l'email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
    setError(null);
  };

  // Ouvrir le dialog de confirmation
  const handleOpenDialog = () => {
    // Keycloak utilise 'email' dans le profile, Auth0 également
    const userEmail = user?.email || user?.preferred_username;
    if (email.toLowerCase() !== userEmail?.toLowerCase()) {
      setEmailError(true);
      setError(t('confirmation.error'));
      return;
    }
    setDialogOpen(true);
  };

  // Fermer le dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Supprimer le compte
  const handleDeleteAccount = async () => {
    setDialogOpen(false);
    setLoading(true);
    setError('');

    try {
      const token = await getAccessTokenSilently();

      await userService.deleteAccount(token);
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      // Utiliser toujours le message d'erreur générique traduit
      // au lieu d'exposer les erreurs techniques à l'utilisateur
      console.error('Erreur lors de la suppression du compte:', err);
      setError(t('error.generic'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('pageTitle.deleteAccount', { ns: 'common' })}</title>
      </Helmet>

      <PageContainer maxWidth="md">
        <PagePaper>
          {/* En-tête */}
          <PageTitle>{t('title')}</PageTitle>
          <SecondaryText>
            {t('subtitle')}
          </SecondaryText>

          {/* Afficher le succès */}
          {success && (
            <ContentBox variant="section">
              <AlertBox
                type="success"
                title={t('success.title')}
                message={t('success.message')}
              />
            </ContentBox>
          )}

          {/* Afficher l'erreur */}
          {error && !success && (
            <ContentBox variant="section">
              <AlertBox
                type="error"
                title={t('error.title')}
                message={error}
                onClose={() => setError(null)}
              />
            </ContentBox>
          )}

          {/* Contenu principal (masqué si succès) */}
          {!success && (
            <>
              {/* Avertissement */}
              <ContentBox variant="section">
                <Card
                  sx={{
                    border: '2px solid',
                    borderColor: 'warning.main',
                    backgroundColor: 'warning.lighter'
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <WarningIcon sx={{ color: 'warning.main' }} />
                      <SectionTitle sx={{ mb: 0 }}>
                        {t('warning.title')}
                      </SectionTitle>
                    </Box>
                    <ContentBox variant="compact">
                      <BodyText>
                        {t('warning.content')}
                      </BodyText>
                      <BulletList>
                        {t('warning.consequences', { returnObjects: true }).map((consequence, index) => (
                          <BulletItem key={index}>{consequence}</BulletItem>
                        ))}
                      </BulletList>
                    </ContentBox>
                  </CardContent>
                </Card>
              </ContentBox>

              {/* Formulaire de confirmation */}
              <ContentBox variant="section">
                <SectionTitle>
                  {t('confirmation.title')}
                </SectionTitle>
                <ContentBox variant="compact">
                  <BodyText>
                    {t('confirmation.message')}
                  </BodyText>
                  <TextField
                    fullWidth
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder={t('confirmation.placeholder')}
                    error={emailError}
                    helperText={emailError ? t('confirmation.error') : ''}
                    disabled={loading}
                  />
                </ContentBox>
              </ContentBox>

              {/* Boutons d'action */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/')}
                  disabled={loading}
                >
                  {t('button.cancel')}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleOpenDialog}
                  disabled={loading || !email}
                  startIcon={loading && <CircularProgress size={20} />}
                >
                  {loading ? 'Suppression...' : t('button.delete')}
                </Button>
              </Box>
            </>
          )}
        </PagePaper>
      </PageContainer>

      {/* Dialog de confirmation finale */}
      <ConfirmDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleDeleteAccount}
        title={t('dialog.title')}
        message={t('dialog.message')}
        confirmText={t('dialog.confirmText')}
        cancelText={t('button.cancel')}
        variant="danger"
      />
    </>
  );
}
