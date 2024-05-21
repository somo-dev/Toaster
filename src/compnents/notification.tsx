import React, { FC } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./notification.css";

interface NotificationPropsType {
  type: string;
  message: string;
  onClose: () => void;
}

const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

const Notification: FC<NotificationPropsType> = ({
  type = "info",
  message,
  onClose,
}) => {
  return (
    <div>
      {icons[type as keyof typeof icons]}
      {message}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default Notification;
