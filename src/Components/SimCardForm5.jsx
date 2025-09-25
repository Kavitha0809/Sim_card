import React, { useState } from "react";
import styles from "../styles/Initiate_page_Styles/Rectangle3463610.module.css";


const SimCardForm5 = ({ onSubmit }) => {
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
       
        {/* View Policies section below */}
      </div>
    </div>
  );
};

export default SimCardForm5;