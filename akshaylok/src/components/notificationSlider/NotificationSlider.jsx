import React from "react";
import "./notificationSlider.css";

function NotificationSlider({data}) {
  return (
    <div id="notification">
      <div 
        id="notif"
        className={data ? "visible" : "" }
        >Connected to Metamask</div>
    </div>
  );
}

export default NotificationSlider;
