// import { NotificationType } from 'models/INotificationType';
import { AxiosError } from 'axios';
// import showNotification from "./notifications.handler";
// import { translate } from "utils/translation";

const handleHttpErrors = (error: AxiosError) => {
  // Handle specific errors
  if (error.response) {
    // The request was made and the server responded with a status code
    if (error.response.status === 400) {
      // showNotification({
      //   message: translate("ErrorMessage400"),
      //   type: NotificationType.ERROR,
      // });
    } else if (error.response.status === 401) {
      // showNotification({
      //   message: translate("ErrorMessage401"),
      //   type: NotificationType.ERROR,
      // });
    } else if (error.response.status === 403) {
      // showNotification({
      //   message: translate("ErrorMessage403"),
      //   type: NotificationType.ERROR,
      // });
    } else if (error.response.status === 404) {
      // showNotification({
      //   message: translate("ErrorMessage404"),
      //   type: NotificationType.ERROR,
      // });
    } else {
      // showNotification({
      //   message: translate("ErrorMessage500"),
      //   type: NotificationType.ERROR,
      // });
    }
  } else if (error.request) {
    // The request was made but no response was received
    // showNotification({
    //   message: translate("ErrorResponseReceivedMessage"),
    //   type: NotificationType.ERROR,
    // });
  } else {
    // Something happened in setting up the request that triggered an error
    // showNotification({
    //   message: translate("ErrorSendingRequestMessage"),
    //   type: NotificationType.ERROR,
    // });
  }
};

export default handleHttpErrors;
