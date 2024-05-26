import "./App.css";
import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("bottom-right");
  return (
    <>
      <div className="btnContainer">
        <h3>Toast Component</h3>
        <div className="buttonInnerContainer">
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
            Show Success
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
            Show Info
          </button>
        </div>
        <div className="buttonInnerContainer">
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
            Show Warning
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
            Show Error
          </button>
        </div>
      </div>
      {NotificationComponent}
    </>
  );
}

export default App;
