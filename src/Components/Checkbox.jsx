import React from "react";
import styles from "../styles/Checkbox.module.css";

const Checkbox = ({ checked, onChange, id }) => (
  <label className={styles.checkboxWrapper} htmlFor={id}>
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={styles.checkboxInput}
    />
    <span className={styles.customCheckbox}>
      {checked && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="14" height="14" rx="2" fill="#36A8DE" />
          <path
            d="M4 7L6 9L10 5"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  </label>
);

export default Checkbox;
