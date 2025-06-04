import { ToastContainer, toast } from "react-toastify";
import classes from './Temporary.module.scss';

export default function TemporaryNotification() {
  const showNotification = () => {
    toast('Notifications may extend two across lines. We prefer to keep them concise.');
  };
  return (
    <>
      <button onClick={showNotification}>Temporary Notification</button>
      <ToastContainer
        className={classes["custom-toast-container"]}
        toastClassName={classes["custom-toast"]}
        position="bottom-right"
      />
    </>
  );
}
