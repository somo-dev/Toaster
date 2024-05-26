import React, { FC } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./notification.css";

export interface NotificationPropsType {
  type: string;
  message: string;
  visible: boolean;
  animation: keyof typeof animations;
  duration?: number;
  onClose?: () => void;
}
const iconStyles = { marginRight: "10px" };

const animations = {
  fade: "fadeIn",
  pop: "popUp",
  slide: "slideIn",
};

const icons = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const Notification: FC<NotificationPropsType> = ({
  type = "info",
  animation = "slide",
  message,
  onClose,
}) => {
  return (
    <div className={`notification ${type} ${animations[animation]}`}>
      {icons[type as keyof typeof icons]}
      {message}
      <AiOutlineClose color="white" className="closeBtn" onClick={onClose} />
    </div>
  );
};

export default Notification;
