import React, { useState } from "react";
import styles from "../styles/Initiate_page_Styles/Rectangle3463610.module.css";
import Button from "./Button.jsx";
import Comment1 from "./Comment1.jsx";

const SimCardForm4 = ({ onSubmit }) => {
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

export default SimCardForm4;