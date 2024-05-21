import "./App.css";
import Notification from "./compnents/notification";

function App() {
  return (
    <>
      <Notification
        type="success"
        message="New Notification"
        onClose={() => {}}
      />
    </>
  );
}

export default App;
