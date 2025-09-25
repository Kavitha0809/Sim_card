import React, { useState } from "react";
import styles from "../styles/Initiate_page_Styles/Rectangle3463610.module.css";
import Button from "./Button.jsx";
import RejectButton from "./RejectButton.jsx";
import viewPoliciesIcon from "../assets/svg/viewpolice.svg";
import Comment1 from "./Comment1.jsx";

const SimCardForm2 = ({ onSubmit }) => {
  // Removed employeeName state
  const [justification, setJustification] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    const just = justification.trim();
    if (!just) {
      alert("Please enter Justification.");
      return;
    }
    if (onSubmit) {
      onSubmit({ justification: just });
    }
  }

  return (
    <div className={styles.rectangle}>
      <div className={styles.inner}>
  {/* Removed Employee to Transfer subHeader */}

        {/* Frame 1321314584 */}
  {/* Removed Employee Name field */}
        {/* Panel to place comment and actions inside the grey rectangle */}
        {/* Comment section */}
        <div>
          <Comment1
            value={comment}
            onChange={(value) => setComment(value)}
            maxLength={500}
          />
        </div>

        {/* Action area: buttons aligned to the right */}
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16, gap: 16 }}
        >
          <RejectButton onClick={() => { /* Add reject handler here */ }} />
          <Button label="Approve" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SimCardForm2;