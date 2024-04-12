import { Link, useParams } from "react-router-dom";
import BussinesDetailsCard from "../Components/BussinesDetailsCard";
import TopNavBar from "../Components/NavBar/TopNavBar";

const Businesses = () => {
  const { filter } = useParams();
  const servicesNearYou = [];
  for (let i = 0; i < 15; i++) {
    servicesNearYou.push(<BussinesDetailsCard key={i} />);
  }
  return (
    <>
      <TopNavBar />
      <section className="mx-auto lg:max-w-7xl p-6">
        <div className="w-full  font-serif mb-4">
          {/* links to prev pages */}
          <div className="flex gap-2 items-center">
            <Link to="/" className="text-gray-500 hover:text-black ">
              Home
            </Link>
            <span className="text-xl py-2">&gt;</span>
            <Link to="/" className="text-gray-500 hover:text-black">
              Featured
            </Link>
            <span className="text-xl py-2">&gt;</span>
            <Link to="/" className="">
              Beauty and Salon
            </Link>
          </div>
          <h2 className="text-xl md:text-3xl capitalize text-Qeteroblue font-semibold py-2">
            {filter} services
          </h2>
          <p className="text-gray-600">
            Choosen from 724 services registered on our platfrom
          </p>
        </div>
        <div className="py-4 space-x-4 whitespace-nowrap overflow-scroll font-serif text-sm tracking-wide text-center">
          <span className="rounded-full px-3 py-1 bg-Qeteroblue text-white inline-block min-w-20">
            All
          </span>
          {[...Array(10)].map((e, i) => {
            return (
              <span
                key={i}
                className="bg-white border border-gray-400 rounded-full px-3 py-1 hover:border-Qeteroblue hover:text-Qeteroblue cursor-pointer"
              >
                Beauty and Salon
              </span>
            );
          })}
        </div>
        <div className="flex gap-4 gap-y-8 flex-wrap mt-8">
          {servicesNearYou}
        </div>
        <p className="text-center w-full">
          <button className="my-10 bg-Qeteroblue text-white py-2 px-10 rounded-full">
            Load More
          </button>
        </p>
      </section>
    </>
  );
};

export default Businesses;
