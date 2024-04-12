import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Business from "./Pages/SingleBusiness";
import Businesses from "./Pages/Businesses";
import Error from "./Pages/Error";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { useUserAuth } from "./Contexts/UserAuthContext";
import { Toaster } from "react-hot-toast";
import BusinessOwner from "./Pages/BusinessOwners";
import Clients from "./Pages/BusinessOwners/Clients";
import Teams from "./Pages/BusinessOwners/Team";
import Services from "./Pages/BusinessOwners/Services";
import EditTeamMember from "./Pages/BusinessOwners/Team/edit";
import NewTeamMember from "./Pages/BusinessOwners/Team/new";
import ViewTeamMember from "./Pages/BusinessOwners/Team/view";
import Dashboard from "./Pages/BusinessOwners/Dashboard";
import ServiceProvider from "./Pages/ServiceProviders";
import Customer from "./Pages/Customers";
const App = () => {
  const { user } = useUserAuth();
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            textAlign: "center",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="pa">
          {!user && <Route index element={<Navigate to="/login" />} />}
          {user?.role == "Business Owner" && (
            <>
              <Route index element={<BusinessOwner />} />
              {user.accountCompleted && (
                <>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="clients" element={<Clients />} />
                  <Route path="team-members" element={<Teams />} />
                  <Route path="team-members/new" element={<NewTeamMember />} />
                  <Route
                    path="team-members/edit"
                    element={<EditTeamMember />}
                  />
                  <Route
                    path="team-members/view/:id"
                    element={<ViewTeamMember />}
                  />
                  <Route path="services" element={<Services />} />
                </>
              )}
            </>
          )}
          {user?.role == "Service Provider" && (
            <Route index element={<ServiceProvider />} />
          )}
          {user?.role == "Customer" && <Route index element={<Customer />} />}
        </Route>
        <Route path="biz/:name" element={<Business />}></Route>
        <Route path="explore/:filter" element={<Businesses />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
