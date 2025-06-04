import "./App.css";
import TemporaryNotification from "./components/TemporaryNotification/TemporaryNotification";
import ToastNotification from "./components/ToastNotification/ToastNotification";

function App() {
  return (
    <>
      <section>
        <ToastNotification
          heading="Very important title of the notification"
          paragraph="Notifications may extend two across lines. We prefer to keep them concise."
        />
        <TemporaryNotification />
      </section>
    </>
  );
}

export default App;
