import React, { useMemo, useState, useEffect } from "react";
import SimCardForm from "./SimCardForm1.jsx";
import SimCardDetails from "./SimCardDetails.jsx";
import SimCardRow from "./SimCardRow.jsx";
import InitiationType from "./InitiationType.jsx";
import notesIcon from "../assets/svg/notesicon.svg";

const defaultData = {
   SimCard: {
  SimCardDetails: [
      {
        MobileNo: "9945258760",
        ConnectionType: "Postpaid",
        ValidityDate: "N/A",
        Selected: true,
      },
      {
        MobileNo: "9945278071",
        ConnectionType: "Postpaid",
        ValidityDate: "N/A",
        Selected: true,
      },
      {
        MobileNo: "8105090909",
        ConnectionType: "Postpaid",
        ValidityDate: "N/A",
        Selected: false,
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


const SimCard1 = ({ data = defaultData, onSelectionChange }) => {
  console.log("SimCard1 component rendering");

  const initialRows = useMemo(
    () => data?.SimCard?.SimCardDetails ?? [],
    [data]
  );
  const [rows, setRows] = useState(initialRows);
  const [clickCount, setClickCount] = useState(0);

  // No longer needed: selectedDepartmentName

  // Debug effect to monitor state changes
  useEffect(() => {
    console.log("Rows state changed:", rows);
  }, [rows]);

  // Debug effect to track component re-renders
  useEffect(() => {
    console.log("SimCard1 component mounted");
    return () => {
      console.log("SimCard1 component unmounted");
    };
  }, []);

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

  function handleSubmit(formData) {
    // Basic noop handler if older button onClick passes event
    if (!formData || typeof formData !== "object") {
      alert("Please fill the form before submitting.");
      return;
    }
    const { employeeName, justification } = formData;
    if (!employeeName?.trim() || !justification?.trim()) {
      alert("Employee Name and Justification are required.");
      return;
    }
    console.log("Submitted Spot Award Request", {
      department: selectedDepartmentName,
      employeeName: employeeName.trim(),
      justification: justification.trim(),
    });
    alert(
      `Spot Award Request submitted successfully!\n\nDepartment: ${selectedDepartmentName}\nEmployee: ${employeeName}\nJustification: ${justification}`
    );
  }

  return (
	<div style={ui.container}>
	  <div style={ui.greySection}>
		{/* Removed SIM Card Transfer heading */}
		<InitiationType />

  <div style={{ fontWeight: 700, fontSize: 16, color: '#101928', margin: '24px 0 8px 0' }}>SIM Card Details</div>
  <div style={ui.tableWrapper}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ width: 56, textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>
                  <input
                    type="checkbox"
                    checked={rows.length > 0 && rows.every(r => r.Selected)}
                    indeterminate={rows.some(r => r.Selected) && !rows.every(r => r.Selected)}
                    onChange={e => {
                      const checked = e.target.checked;
                      setRows(prev => prev.map(r => ({ ...r, Selected: checked })));
                    }}
                    style={{ width: 18, height: 18 }}
                  />
                </th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Mobile No</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Connection Type</th>
                <th style={{ textAlign: "center", padding: "16px 12px", background: "rgb(239, 246, 255)", color: "#222", fontWeight: 600, fontSize: 14 }}>Validity Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <SimCardRow
                  key={row.MobileNo}
                  row={row}
                  onSelect={handleSelect}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 24 }}>
          <SimCardForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SimCard1;