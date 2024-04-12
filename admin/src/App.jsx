import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Dashboard from "./Pages/Dashboard";
import Businesses from "./Pages/Bussinesses/";
import NewBusinessType from "./Pages/Bussinesses/New";
import Transactions from "./Pages/Transactions";
import Payouts from "./Pages/Payouts";
import Customers from "./Pages/Customers";
import BusinessesOwners from "./Pages/BussinessOwners";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Bussiness Types">
          <Route index element={<Businesses />} />
          <Route path="New" element={<NewBusinessType />} />
        </Route>
        <Route path="Transactions" element={<Transactions />} />
        <Route path="Payouts" element={<Payouts />} />
        <Route path="Customers" element={<Customers />} />
        <Route path="Bussiness Owners" element={<BusinessesOwners />} />
        <Route path="Businesses" element={<Businesses />} />
      </Routes>
    </>
  );
}

export default App;
