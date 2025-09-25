import React, { useMemo, useState, useEffect } from "react";
import SimCardForm from "./SimCardForm3.jsx";
import SimCardRowReport from "./SimCardRowReport.jsx";
import InitiationTypeReport1 from "./InitiationTypeReport1.jsx";
import EmployeeTransfer3 from './EmployeeTransfer3';

const defaultData = {
  SimCard: {
    SimCardDetails: [
      {
        MobileNo: "9945258760",
        ValidityDate: "N/A",
        ConnectionType: "Postpaid",
        Selected: true,
      },
    ],
  },
};

const ui = {
  container: { padding: 0 },
  title: { marginBottom: 12 },
  sectionLabel: {
    fontWeight: 600,
    marginBottom: 8,
    fontSize: 12,
    color: "#6B7280",
  },
  tableWrapper: {
    border: "1px solid #E5E7EB",
    borderRadius: 8,
    overflow: "hidden",
    background: "#fff",
  },
  theadRow: { background: "transparent", borderBottom: "1px solid #E5E7EB" },
  th: {
    textAlign: "center",
    padding: "18px 24px",
    fontSize: 12,
    color: "#101928",
    fontWeight: 700,
  },
  tr: { borderBottom: "1px solid #EAEAEA" },
  td: { padding: "18px 24px", verticalAlign: "middle", fontSize: 14 },
  tdCenter: {
    padding: "18px 24px",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 14,
  },
  greySection: {
    background: "#f9fafb",
    padding: "24px",
    borderRadius: "8px",
    marginTop: "10px",
  },
};

const SimCard3 = ({ data = defaultData, onSelectionChange }) => {
  const [employee, setEmployee] = useState('');
  const initialRows = useMemo(
    () => data?.SimCard?.SimCardDetails ?? [],
    [data]
  );
  const [rows, setRows] = useState(initialRows);

  function handleSelect(mobileNo) {
    setRows((prev) =>
      prev.map((r) =>
        r.MobileNo === mobileNo ? { ...r, Selected: !r.Selected } : r
      )
    );
    if (onSelectionChange) {
      onSelectionChange(mobileNo);
    }
  }

  return (
    <div style={ui.container}>
      <div style={ui.greySection}>
        <InitiationTypeReport1 />
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <EmployeeTransfer3
            value={employee}
            onChange={(value) => setEmployee(value)}
          />
        </div>

        {/* SIM Card Details Table */}
        <div style={{ fontWeight: 700, fontSize: 16, color: '#101928', margin: '24px 0 8px 0' }}>SIM Card Details</div>
        <div style={ui.tableWrapper}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgb(239, 246, 255)" }}>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 700, fontSize: 14 }}>Mobile No</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 700, fontSize: 14 }}>Connection Type</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 700, fontSize: 14 }}>Validity Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <SimCardRowReport
                  key={row.MobileNo}
                  row={row}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 24 }}>
          <SimCardForm onSubmit={(formData) => console.log('Form submitted:', formData)} />
        </div>
      </div>
    </div>
  );
};

export default SimCard3;
