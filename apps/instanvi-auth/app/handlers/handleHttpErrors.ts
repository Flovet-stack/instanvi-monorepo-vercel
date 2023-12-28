import { AxiosError } from 'axios';
import showNotification, { NotificationType } from './notifications.handler';

const possibleErrors: { response: string; message: string }[] = [
  {
    response: 'invalid record: column [username]: is not unique',
    message: 'This user already exists, try logging in',
  },
];

const handleHttpErrors = (error: AxiosError) => {
  // Handle specific errors
  if (error) {
    // The request was made and the server responded with a status code
    if (error.status === 400) {
      let message = 'Invalid data submitted.';

      possibleErrors.forEach((possibleError) => {
        if (error.message === possibleError.response) {
          message = possibleError.message;
        }
      });
      showNotification({
        message: message,
        type: NotificationType.ERROR,
      });
    } else if (error.status === 401) {
      showNotification({
        message:
          'Authentication failed. Please check your credentials and try again',
        type: NotificationType.ERROR,
      });
    } else if (error.status === 403) {
      showNotification({
        message:
          'Access denied. You cannot execute this action. Contact admin ',
        type: NotificationType.ERROR,
      });
    } else if (error.status === 404) {
      showNotification({
        message: 'Resource not found.',
        type: NotificationType.ERROR,
      });
    } else {
      showNotification({
        message: 'Failed. Please check your internet connection',
        type: NotificationType.ERROR,
      });
    }
  } else {
    // Something happened in setting up the request that triggered an error
    showNotification({
      message:
        'Failed. This is an error from our side we will fix this in a bit',
      type: NotificationType.ERROR,
    });
  }
};

export default handleHttpErrors;
