import React from "react";
import icon from "../../assets/img/notification-icon.svg";
import "./styles.css"

// import { Container } from './styles';

const NotificationButton: React.FC = () => {
  return (
    <div>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </div>
  );
};

export default NotificationButton;
