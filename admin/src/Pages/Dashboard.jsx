import SideNav from "../Components/SideNav";
import { MdOutlineCurrencyExchange, MdOutlineNoteAlt } from "react-icons/md";
import { BsFillPersonVcardFill, BsPersonBadge, BsStack } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
const Dashboard = () => {
  return (
    <div className="flex">
      <SideNav />
      <section className="mx-auto w-full lg:max-w-6xl md:pt-12 md:p-4 p-2">
        <h1 className="text-2xl fonst-semibold font-serif py-4">
          Dashboard | Analytics
        </h1>
        <div className="flex flex-wrap  gap-4">
          <div className="bg-white max-w-11/12 w-60 p-4 shadow-lg rounded-md space-y-2 flex-grow">
            <BsStack className="text-3xl" />
            <p>12 Service Providers</p>
          </div>
          <div className="bg-white max-w-11/12 w-60 p-4 shadow-lg rounded-md space-y-2 flex-grow">
            <BsFillPersonVcardFill className="text-3xl" />
            <p>20 Service Providers</p>
          </div>
          <div className="bg-white max-w-11/12 w-60 p-4 shadow-lg rounded-md space-y-2 flex-grow">
            <BsPersonBadge className="text-3xl" />
            <p>20 Customers</p>
          </div>
          <div className="bg-white max-w-11/12 w-60 p-4 shadow-lg rounded-md space-y-2 flex-grow">
            <MdOutlineNoteAlt className="text-3xl" />
            <p>20 Bookings</p>
          </div>
          <div className="bg-white max-w-11/12 w-60 p-4 shadow-lg rounded-md space-y-2 flex-grow">
            <MdOutlineCurrencyExchange className="text-3xl" />
            <p>20,000 ETB Transactions</p>
          </div>
          <div className="bg-white max-w-11/12 w-60 p-4 shadow-lg rounded-md space-y-2 flex-grow">
            <GiReceiveMoney className="text-3xl" />
            <p>2,000 ETB Commisions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
