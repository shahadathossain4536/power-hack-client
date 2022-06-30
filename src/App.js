import Navbar from "./Pages/Shared/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./Pages/Billing/Billing";
import UpdateBillingData from "./Pages/Billing/UpdateBillingData";
function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Billing></Billing>}></Route>
          <Route path="/billing" element={<Billing></Billing>}></Route>
          <Route
            path="/update-billing-data/:id"
            element={<UpdateBillingData></UpdateBillingData>}
          ></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
