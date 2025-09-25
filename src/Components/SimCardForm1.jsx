import React, { useState } from "react";
import styles from "../styles/Initiate_page_Styles/Rectangle3463610.module.css";
import Button from "./Button.jsx";
import viewPoliciesIcon from "../assets/svg/viewpolice.svg";
import closeIcon from "../assets/svg/close.svg";
import close1Icon from "../assets/svg/close1.svg";
import searchIcon from "../assets/svg/search.svg";
import Comment1 from "./Comment1.jsx";

const SimCardForm1 = ({ onSubmit }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [justification, setJustification] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    const name = employeeName.trim();
    const just = justification.trim();
    if (!name || !just) {
      alert("Please enter Employee Name and Justification.");
      return;
    }
    if (onSubmit) {
      onSubmit({ employeeName: name, justification: just });
    }
  }

  return (
    <div className={styles.rectangle}>
      <div className={styles.inner}>
        <div
          className={styles.subHeader}
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            marginLeft: -32,
            marginRight: -32,
          }}
        >
          Employee to Transfer
        </div>

        {/* Frame 1321314584 */}
        <div className={styles.fieldGroup}>
          {/* Label */}
          <div
            className={styles.label}
            style={{
              fontWeight: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? 700 : undefined,
              fontSize: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? '14px' : undefined,
              color: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? '#101928' : undefined,
              fontFamily: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? 'Samsung InterFace, Inter, sans-serif' : undefined,
            }}
          >
            Employee Name
            {window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") && (
              <span style={{ color: '#FF0000', marginLeft: 4 }}>*</span>
            )}
          </div>
          {/* Input Frame */}
          <div
            className={styles.inputFrame}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              // CHANGED: Move box further left for /Employee_Initiate1
              justifyContent: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? 'flex-start' : 'center',
              marginLeft: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? -22 : undefined,
              width: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? '450px' : undefined
            }}
          >
            <input
              className={styles.input}
              type="text"
              placeholder="M.Gokul"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              aria-label="Employee Name"
              style={{
                paddingRight: employeeName ? 60 : 34,
                width: window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") ? '100%' : '100%',
                minWidth: 0,
                maxWidth: '100%'
              }}
            />
            <span style={{ position: 'absolute', right: employeeName ? 34 : 10, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
              {window.location.pathname.toLowerCase().replace(/[^a-z0-9]/g, "").includes("employeeinitiate1") && (
                <img src={close1Icon} alt="close1" style={{ width: 14, height: 14, opacity: 0.7, marginRight: 8 }} />
              )}
              <img src={searchIcon} alt="search" style={{ width: 18, height: 18, opacity: 0.7 }} />
            </span>
            {employeeName && (
              <button
                type="button"
                onClick={() => setEmployeeName("")}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                tabIndex={-1}
                aria-label="Clear"
              >
                <img src={closeIcon} alt="clear" style={{ width: 16, height: 16, opacity: 0.7 }} />
              </button>
            )}
          </div>
        </div>
        {/* Comment section */}
        <div style={{ marginTop: 16 }}>
          <Comment1
            value={comment}
            onChange={(value) => setComment(value)}
            maxLength={500}
          />
        </div>

       
        {/* Action area: Submit right, View Policies below left */}
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}
        >
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SimCardForm1;