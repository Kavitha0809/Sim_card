import React from "react";
import styles from "../styles/Initiate_page_Styles/InitiationType.module.css";

const InitiationType5 = () => {
  return (
    <div className={styles.initiationTypeContainer}>
      <div className={styles.label}>Initiation Type</div>
      <div className={styles.optionsRow}>
        <label className={styles.option}>
          <input type="radio" name="initiationType" />
          <span className={styles.radioCustom}></span>
          <span className={styles.optionText}>Individual</span>
        </label>
        <label 
          className={`${styles.option} ${styles.selected}`}
          style={{ background: '#ffffff' }}
        >
          <input type="radio" name="initiationType" checked readOnly />
          <span className={styles.radioCustom}></span>
          <span className={styles.optionText}>Bulk</span>
        </label>
      </div>
    </div>
  );
};

export default InitiationType5;
