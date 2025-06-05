import {toast} from "react-toastify";

export default function TemporaryNotification() {
    const showNotification = () => {
        toast("Notifications may extend two across lines. We prefer to keep them concise", {
            autoClose: 5000,
            position: "bottom-right",
        });
    };

    return <button onClick={showNotification}>Temporary Notification</button>;
}