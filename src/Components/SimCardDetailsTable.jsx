import React, { useState } from "react";

const SimCardDetailsTable = ({ data = [] }) => {
  // data: array of objects with GenID, Name, MobileNo, ConnectionType, ValidityDate, Selected
  const [rows, setRows] = useState(data);

  // Select all logic
  const allSelected = rows.length > 0 && rows.every((row) => row.Selected);
  const someSelected = rows.some((row) => row.Selected) && !allSelected;

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
              <input
                type="checkbox"
                checked={allSelected}
                ref={el => { if (el) el.indeterminate = someSelected; }}
                onChange={handleSelectAll}
                style={{ width: 18, height: 18 }}
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
                <input
                  type="checkbox"
                  checked={!!row.Selected}
                  onChange={() => handleSelectRow(row.GenID)}
                  style={{ width: 18, height: 18 }}
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
