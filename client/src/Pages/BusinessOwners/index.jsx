import Dashboard from "./Dashboard";
import Welcome from "./Welcome";
const BusinessOwner = () => {
  const firstTime = true;
  return <>{firstTime ? <Welcome /> : <Dashboard />}</>;
};

export default BusinessOwner;
