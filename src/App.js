import Navbar from "./Pages/Shared/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./Pages/Billing/Billing";
function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Billing></Billing>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
