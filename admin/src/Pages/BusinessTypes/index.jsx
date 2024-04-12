import { Link } from "react-router-dom";
import BussinessOverviewCard from "../../Components/Bussineses/OverviewCard";
import { MdSearch } from "react-icons/md";
import SideNav from "../../Components/SideNav";
const BusinessTypes = () => {
  return (
    <>
      <div className="flex">
        <SideNav />
        <section className="mx-auto lg:max-w-6xl md:pt-12 p-2 max-h-screen overflow-auto">
          <div className="flex justify-between flex-wrap-reverse items-center text-black/90">
            <h1 className="text-2xl italic p-4">Bussiness Types</h1>
            <div className="flex justify-end md:gap-2 flex-grow">
              <p className="relative flex-grow md:flex-grow-0">
                <input
                  type="text"
                  placeholder="search here"
                  className="p-2 bg-transparent border-b-2 border-black mx-5 outline-none w-11/12"
                />
                <MdSearch className="absolute top-4 right-2 text-xl" />
              </p>
              <Link to="./New" className="p-2 group relative  text-3xl ">
                <span>+</span>
                <span className="invisible group-hover:visible text-sm absolute right-5 -top-6 rounded-br-none rounded-tl-md whitespace-nowrap bg-white shadow-md p-3 rounded-2xl">
                  Add New Bussiness Type
                </span>
              </Link>
            </div>
          </div>

          <div className="space-y-5 lg:p-4">
            <BussinessOverviewCard />
            <BussinessOverviewCard />
            <BussinessOverviewCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessTypes;
