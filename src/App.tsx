import "./App.css";
import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("bottom-right");
  return (
    <>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "File downloaded successfully",
            visible: true,
            duration: 3000,
          })
        }
      >
        Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "Sorry! Try again later",
            visible: true,
            duration: 3000,
          })
        }
      >
        Error
      </button>
      {NotificationComponent}
    </>
  );
}

export default App;
