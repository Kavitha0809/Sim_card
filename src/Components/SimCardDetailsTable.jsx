import React, { useState } from "react";
import Checkbox from "./Checkbox";

const SimCardDetailsTable = ({ data = [] }) => {
  // data: array of objects with GenID, Name, MobileNo, ConnectionType, ValidityDate, Selected
  const [rows, setRows] = useState(data);

  // Only consider rows with actual data (not empty rows)
  const dataRows = rows.filter(row => row.GenID && row.Name && row.MobileNo && row.ConnectionType && row.ValidityDate);
  const allSelected = dataRows.length > 0 && dataRows.every((row) => row.Selected);
  const someSelected = dataRows.some((row) => row.Selected) && !allSelected;

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setRows((prev) => prev.map((row) => ({ ...row, Selected: checked })));
  };

  const handleSelectRow = (genId) => {
    setRows((prev) =>
      prev.map((row) =>
        row.GenID === genId ? { ...row, Selected: !row.Selected } : row
      )
    );
  };

  return (
    <div style={{ margin: "24px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: 8, overflow: "hidden", background: "#fff" }}>
        <thead>
          <tr style={{ background: "#EFF6FF" }}>
            <th style={{ width: 56, textAlign: "center", padding: "12px 8px" }}>
              <Checkbox
                id="table-header-checkbox"
                checked={allSelected ? true : false}
                onChange={handleSelectAll}
              />
            </th>
            <th style={{ textAlign: "center", padding: "12px 8px" }}>Gen ID</th>
            <th style={{ textAlign: "center", padding: "12px 8px" }}>Name</th>
            <th style={{ textAlign: "center", padding: "12px 8px" }}>Mobile No</th>
            <th style={{ textAlign: "center", padding: "12px 8px" }}>Connection Type</th>
            <th style={{ textAlign: "center", padding: "12px 8px" }}>Validity Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.GenID} style={{ borderBottom: "1px solid #EAEAEA" }}>
              <td style={{ textAlign: "center" }}>
                <Checkbox
                  id={`row-checkbox-${row.GenID}`}
                  checked={!!row.Selected}
                  onChange={() => handleSelectRow(row.GenID)}
                />
              </td>
              <td style={{ textAlign: "center", padding: "12px 8px" }}>{row.GenID}</td>
              <td style={{ textAlign: "center", padding: "12px 8px" }}>{row.Name}</td>
              <td style={{ textAlign: "center", padding: "12px 8px" }}>{row.MobileNo}</td>
              <td style={{ textAlign: "center", padding: "12px 8px" }}>{row.ConnectionType}</td>
              <td style={{ textAlign: "center", padding: "12px 8px" }}>{row.ValidityDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimCardDetailsTable;
