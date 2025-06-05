import {toast} from "react-toastify";
import PermaContent from "../PermaNotificationContent/PermaContent";
import {CustomCloseButton} from "../CustomCloseButton";

interface ToastNotificationProps {
    heading?: string;
    paragraph?: string;
}

export default function ToastNotification({heading, paragraph}: ToastNotificationProps) {
    const showNotification = () => {
        toast(<PermaContent heading={heading} paragraph={paragraph}/>, {
            closeButton: <CustomCloseButton/>,
            autoClose: false,
            position: "bottom-right",
        });
    };
    return <button onClick={showNotification}>Perma Notification</button>;
}
