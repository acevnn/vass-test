import './App.css';
import TemporaryNotification from './components/TemporaryNotification/TemporaryNotification';
import ToastNotification from './components/ToastNotification/ToastNotification';
import {ToastContainer} from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <section>
                <ToastNotification
                    heading="Very important title of the notification"
                    paragraph="Notifications may extend two across lines. We prefer to keep them concise."/>
                <TemporaryNotification/>
            </section>
            <ToastContainer
                position="bottom-right"
                toastClassName="custom-toast"
                closeButton={false}
            />
        </>
    );
}

export default App;