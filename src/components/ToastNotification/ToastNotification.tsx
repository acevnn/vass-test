
import { ToastContainer, toast } from "react-toastify";
import classes from "./ToastNotification.module.scss";
import PermaContent from "../PermaNotificationContent/PermaContent";
import { CustomCloseButton } from "../CustomCloseButton";

interface ToastNotificationProps {
  heading?: string;
  paragraph?: string;
}

export default function ToastNotification({heading, paragraph}: ToastNotificationProps) {
  const showNotification = () => {
    toast(<PermaContent heading={heading} paragraph={paragraph}/>, {
      closeButton: <CustomCloseButton/>
    });
  };
  return (
    <>
      <button onClick={showNotification}>Perma Notification</button>
      <ToastContainer
        className={classes["custom-toast-container"]}
        toastClassName={classes["custom-toast"]}
        hideProgressBar
        position="bottom-left"
        autoClose={false}
      />
    </>
  );
}
