import { Alert, AlertTitle, AlertProps } from '@mui/material';
import {
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon
} from '@mui/icons-material';

interface AlertBoxProps extends Omit<AlertProps, 'severity'> {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
}

/**
 * Box d'alerte avec icône et couleur selon le type
 */
export default function AlertBox({ type = 'info', title, message, onClose, ...props }: AlertBoxProps) {
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
