import React, { useState } from 'react';
import styles from '../styles/Initiate_page_Styles/EmployeeTransfer3.module.css';

const EmployeeTransfer3 = ({ onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.frame1321314620}>
      <div className={styles.frame1321314559}>
        <div className={styles.frame1272628499}>
          {/* Label */}
          <label className={styles.label}>
            Employee To Transfer <span className={styles.required}>*</span>
          </label>

          {/* Input Frame */}
          <div className={styles.frame1272628489}>
            <div 
              className={`${styles.inputFrame} ${isFocused ? styles.focused : ''}`}
            >
              {/* Left Content */}
              <div className={styles.leftContent}>
                {/* Hidden Avatar Icon */}
                <div className={styles.iconLeft} style={{ display: 'none' }}>
                  <div className={styles.avatarPlaceholder}></div>
                </div>

                {/* Text Input Area */}
                <div className={styles.textAndCursor}>
                  <input
                    type="text"
                    value={value || ''}
                    readOnly
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="M.Gokul"
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Right Content - Removed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTransfer3;