import { useCallback, useRef, useState } from "react";
import Notification, { NotificationPropsType } from "../compnents/notification";

const useNotification = (position = "bottom-right") => {
  const [notification, setNotification] = useState<NotificationPropsType>({
    type: "",
    message: "",
    visible: false,
  });

  // Use useRef to store the timer
  const timerRef = useRef<number | null>(null);

  const triggerNotification = useCallback(
    (notificationProps: NotificationPropsType) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setNotification(notificationProps);
      timerRef.current = window.setTimeout(() => {
        setNotification({
          type: "",
          message: "",
          visible: false,
        });
        timerRef.current = null; // Clear the ref after the timeout
      }, notificationProps.duration);
    },
    []
  );

  const NotificationComponent = notification.visible ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
