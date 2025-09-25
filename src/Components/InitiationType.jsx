import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/Initiate_page_Styles/InitiationType.module.css";

const InitiationType = ({ onChange, value = "Individual" }) => {
  const location = useLocation();
  // Normalize by removing non-alphanumerics to handle '/Employee_Initiate2' and similar variants
  const pathname = (location?.pathname || "").toLowerCase();
  const normalized = pathname.replace(/[^a-z0-9]/g, "");
  const isEmployeeInitiate2 = normalized.includes("employeeinitiate2");

  const [selected, setSelected] = useState(isEmployeeInitiate2 ? "Bulk" : value);

  useEffect(() => {
    // Ensure Bulk is selected when on /employeeinitiate2
    if (isEmployeeInitiate2 && selected !== "Bulk") {
      setSelected("Bulk");
      if (onChange) onChange("Bulk");
    }
  }, [isEmployeeInitiate2]);

  const handleSelect = (type) => {
  setSelected(type);
  if (onChange) onChange(type);
  };

  // Disabled styles and greys
  const greySelected = "#838383"; // selected grey
  const greyDisabled = "#A9A8AA"; // disabled grey

  return (
    <div className={styles.container}>
      <div className={styles.label}>Initiation Type</div>
      <div className={styles.optionsRow}>
        <div
          className={`${styles.option} ${selected === "Individual" ? styles.selected : ""}`}
          onClick={() => handleSelect("Individual")}
        >
          <span
            className={styles.radio}
          >
            <span
              className={selected === "Individual" ? styles.radioChecked : styles.radioUnchecked}
            />
          </span>
          <span
            className={styles.optionText}
          >
            Individual
          </span>
        </div>
        <div
          className={`${styles.option} ${selected === "Bulk" ? styles.selected : ""}`}
          onClick={() => handleSelect("Bulk")}
          style={
            isEmployeeInitiate2
              ? { cursor: "default" }
              : undefined
          }
        >
          <span
            className={styles.radio}
              style={
                selected === "Bulk"
                  ? { borderColor: isEmployeeInitiate2 ? "#38aee0" : undefined }
                  : undefined
              }
          >
            <span
              className={selected === "Bulk" ? styles.radioChecked : styles.radioUnchecked}
              style={
                selected === "Bulk"
                  ? { background: isEmployeeInitiate2 ? "#38aee0" : undefined }
                  : undefined
              }
            />
          </span>
          <span
            className={styles.optionText}
            style={isEmployeeInitiate2 ? undefined : undefined}
          >
            Bulk
          </span>
        </div>
      </div>
    </div>
  );
};

export default InitiationType;
