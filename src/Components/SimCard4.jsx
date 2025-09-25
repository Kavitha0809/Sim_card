import React, { useMemo, useState, useEffect } from "react";
import SimCardForm from "./SimCardForm4.jsx";
import InitiationType from "./InitiationType.jsx";
import ChooseFile from "./Choose_file.jsx";

const defaultData = {
  SpotAwardRequest: {
    SimCardDetails: [
      {
        GenID: "257854665",
        Name: "Suresh Kumar",
        MobileNo: "9945258760",
        ConnectionType: "Postpaid",
        ValidityDate: "N/A",
        Selected: true,
      },
      {
        GenID: "257854675",
        Name: "Lingam",
        MobileNo: "9945278071",
        ConnectionType: "Postpaid",
        ValidityDate: "N/A",
        Selected: true,
      },
      {
        GenID: "257854695",
        Name: "Nakanishi",
        MobileNo: "8105090909",
        ConnectionType: "Postpaid",
        ValidityDate: "N/A",
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
  thLeft: {
    textAlign: "left",
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
  tdRadio: { width: 56, textAlign: "center" },
  issuedCell: { textAlign: "center", color: "#1976d2", fontWeight: 600 },
  greySection: {
    background: "#f9fafb",
    padding: "24px",
    borderRadius: "8px",
    marginTop: "10px",
  },
};

function SpotAwardRow({ row, onSelect }) {
  return (
    <tr style={{ borderBottom: "1px solid #EAEAEA" }}>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>
        <input
          type="checkbox"
          checked={!!row.Selected}
          onChange={() => onSelect(row.MobileNo)}
          style={{ width: 16, height: 16 }}
        />
      </td>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.GenID}</td>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.Name}</td>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.MobileNo}</td>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.ConnectionType}</td>
      <td style={{ textAlign: "center", padding: "16px 12px" }}>{row.ValidityDate}</td>
    </tr>
  );
}

const SimCard4 = ({ data = defaultData, onSelectionChange }) => {
  console.log("SimCard4 component rendering");

  const initialRows = useMemo(
    () => data?.SpotAwardRequest?.SimCardDetails ?? [],
    [data]
  );
  const [rows, setRows] = useState(initialRows);
  // State for clickCount was unused and removed





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

  // Handles form submission from SimCardForm
  function handleSubmit(formData) {
    // Basic noop handler if older button onClick passes event
    if (!formData || typeof formData !== "object") {
      alert("Please fill the form before submitting.");
      return;
    }
    const { justification } = formData;
    if (!justification?.trim()) {
      alert("Justification is required.");
      return;
    }
    console.log("Submitted Spot Award Request", {
      justification: justification.trim(),
    });
    alert(
      `Spot Award Request submitted successfully!\n\nJustification: ${justification}`
    );
  }

  const allSelected = rows.length > 0 && rows.every((r) => !!r.Selected);

  function handleSelectAll() {
    setRows((prev) => prev.map((r) => ({ ...r, Selected: !allSelected })));
    if (onSelectionChange) {
      onSelectionChange("ALL");
    }
  }

  return (
    <div style={ui.container}>
      <div style={ui.greySection}>
        {/* InitiationType component renders the initiation type selection UI */}
        <InitiationType />
        {/* ChooseFile component renders the file upload UI */}
        <ChooseFile />

        {/* SIM Card Details Table */}
        <div style={{ fontWeight: 700, fontSize: 16, color: '#101928', margin: '24px 0 8px 0' }}>SIM Card Details</div>
        <div style={ui.tableWrapper}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgb(239, 246, 255)" }}>
                <th style={{ width: 56, textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>
                  <input
                    type="checkbox"
                    aria-label="Select all"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    style={{ width: 16, height: 16 }}
                  />
                </th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Gen ID</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Name</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Mobile No</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Connection Type</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Validity Date</th>
              </tr>
            </thead>
            <tbody>
              {/* SpotAwardRow renders each SIM card row in the table */}
              {rows.map((row) => (
                <SpotAwardRow
                  key={row.GenID}
                  row={row}
                  onSelect={handleSelect}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* SimCardForm renders the form for justification and comment */}
        <div style={{ marginTop: 24 }}>
          <SimCardForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SimCard4;