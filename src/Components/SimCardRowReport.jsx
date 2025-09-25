import React from "react";

const SimCardRowReport = ({ row }) => {
  return (
    <tr>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.MobileNo}</td>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.ConnectionType}</td>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.ValidityDate}</td>
    </tr>
  );
};

export default SimCardRowReport;