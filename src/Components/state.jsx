import React from "react";
import "../styles/Initiate_page_Styles/Avatar.css";

const state = ({
  initials,
  size = 64,
  isOnline = true,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`avatar-frame ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <div className="avatar-image">
        <div className="avatar-placeholder">
          <span>{initials}</span>
        </div>
      </div>
      {isOnline && <div className="avatar-online-indicator"></div>}
    </div>
  );
};

export default state;
