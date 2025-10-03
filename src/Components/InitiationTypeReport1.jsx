import React from "react";
import styles from "../styles/Initiate_page_Styles/InitiationType.module.css";

const InitiationTypeReport1 = ({ style }) => {
  // Report1 version always has Individual selected and Bulk disabled
  const report1Styles = {
    individualRadio: {
      borderColor: '#A9A8AA',
    },
    individualDot: {
      background: '#fff',
    },
    individualText: {
      color: '#A9A8AA',
    },
    bulkRadio: {
      borderColor: '#838383',
    },
    bulkDot: {
      background: '#838383',
    },
    bulkText: {
      color: '#222',
      fontWeight: 600
    }
  };

  return (
    <div className={styles.container} style = {style}>
      <div className={styles.label}>Initiation Type</div>
      <div className={styles.optionsRow}>
        <div
          className={styles.option}
          style={{ cursor: 'not-allowed' }}
        >
          <span 
            className={styles.radio}
            style={report1Styles.individualRadio}
          >
            <span 
              className={styles.radioUnchecked}
              style={report1Styles.individualDot}
            />
          </span>
          <span className={styles.optionText} style={report1Styles.individualText}>Individual</span>
        </div>
        <div
          className={`${styles.option} ${styles.selected}`}
          style={{ cursor: 'default' }}
        >
          <span 
            className={styles.radio}
            style={report1Styles.bulkRadio}
          >
            <span 
              className={styles.radioChecked}
              style={report1Styles.bulkDot}
            />
          </span>
          <span 
            className={styles.optionText}
            style={report1Styles.bulkText}
          >Bulk</span>
        </div>
      </div>
    </div>
  );
};

export default InitiationTypeReport1;