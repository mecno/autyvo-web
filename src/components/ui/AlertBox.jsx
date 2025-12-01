import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@mui/material';
import {
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon
} from '@mui/icons-material';

/**
 * Box d'alerte avec icône et couleur selon le type
 * @param {string} type - Type d'alerte (success, error, warning, info)
 * @param {string} title - Titre de l'alerte (optionnel)
 * @param {string} message - Message de l'alerte
 * @param {function} onClose - Fonction de fermeture (optionnel, rend l'alerte dismissible)
 */
export default function AlertBox({ type = 'info', title, message, onClose, ...props }) {
  // Déterminer la sévérité et l'icône selon le type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <SuccessIcon fontSize="inherit" />;
      case 'error':
        return <ErrorIcon fontSize="inherit" />;
      case 'warning':
        return <WarningIcon fontSize="inherit" />;
      case 'info':
      default:
        return <InfoIcon fontSize="inherit" />;
    }
  };

  return (
    <Alert
      severity={type}
      icon={getIcon()}
      onClose={onClose}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
}

AlertBox.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func
};
