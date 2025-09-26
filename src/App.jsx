import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Employee_Initiate1 from "./Pages/Employee_Initiate1.jsx";
//import Second from "./Pages/Second.jsx";
import Report1 from "./Pages/Report1.jsx";
import Report2 from "./Pages/Report2.jsx";
import Employee_Initiate2 from "./Pages/Employee_Initiate2.jsx";
import TransferApproval from "./Pages/TransferApproval.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Employee_Initiate1" element={<Employee_Initiate1 />} />
        <Route path="/TransferApproval" element={<TransferApproval />} />
        <Route path="/Report1" element={<Report1 />} />
        <Route path="/Report2" element={<Report2 />} />
        <Route path="/Employee_Initiate2" element={<Employee_Initiate2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
