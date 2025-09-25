import React, { useEffect } from "react";
import styles from "../styles/Initator_Confirmation/Frame1000007501.module.css";

const SimCardRow = ({ row, onSelect, noCheckbox }) => {
  // row: { MobileNo, ConnectionType, ValidityDate, Selected }
  return (
    <tr>
      {!noCheckbox && (
        <td style={{ textAlign: "center" }}>
          <input
            type="checkbox"
            checked={!!row.Selected}
            onChange={() => onSelect(row.MobileNo)}
            style={{ width: 18, height: 18 }}
          />
        </td>
      )}
      {noCheckbox && null}
  <td style={{ textAlign: "center", padding: noCheckbox ? "12px 40px 12px 0" : "16px 40px 16px 0" }}>{row.MobileNo}</td>
  <td style={{ textAlign: "center", padding: noCheckbox ? "12px 40px 12px 40px" : "16px 40px 16px 40px" }}>{row.ConnectionType}</td>
  <td style={{ textAlign: "center", padding: noCheckbox ? "12px 0 12px 40px" : "16px 0 16px 40px" }}>{row.ValidityDate}</td>
    </tr>
  );
};

export default SimCardRow;
