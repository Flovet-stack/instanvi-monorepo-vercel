import { Theme, toast } from 'react-toastify';

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  // DEFAULT = "default",
}

export interface ShowNotificationProps {
  message: string;
  type: NotificationType;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  theme?: Theme;
}

const showNotification = (props: ShowNotificationProps) => {
  const {
    message,
    type,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    theme,
  } = props;
  return toast[type](message, {
    position: 'top-right',
    autoClose: autoClose,
    hideProgressBar: hideProgressBar ?? false,
    closeOnClick: closeOnClick ?? true,
    pauseOnHover: pauseOnHover ?? true,
    draggable: draggable ?? true,
    theme: theme ?? 'colored',
  });
};

export default showNotification;
