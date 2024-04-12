import SideNav from "../../../Components/NavBar/SideNav";
import { MdEdit } from "react-icons/md";
const Services = () => {
  const services = [
    {
      name: "Haircut",
      duration: "30min",
      price: 60,
    },
    {
      name: "Haircut + Beard",
      duration: "30min",
      price: 80,
    },
    {
      name: "Child Haircut",
      duration: "30min",
      price: 40,
    },
  ];
  return (
    <div className="flex">
      <SideNav />
      <section className="mx-auto w-full lg:max-w-6xl md:pt-12 md:p-4 p-2 ">
        <h1 className="text-2xl fonst-semibold font-serif py-4">
          Personal Area | Services
        </h1>
        <div className="p-4 border-b mb-8 rounded-md flex gap-4 items-center justify-between flex-wrap my-4">
          <div className="flex items-center flex-grow max-w-lg">
            <input
              type="text"
              placeholder="Search"
              className="bg-white border w-full border-gray-300 rounded-md py-2 px-4  mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-Qeteroblue text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>
          <div className="flex gap-3  flex-wrap">
            <div className="flex items-center flex-grow">
              <label htmlFor="sort" className="mr-2">
                Filter
              </label>
              <select
                id="sort"
                className="flex-grow bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="price">Price</option>
              </select>
            </div>
            <div className="flex items-center gap-2 flex-grow">
              <label htmlFor="sort" className="mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                className="flex-grow bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4 ">
          <form
            action=""
            className="w-full md:max-w-xs p-4 bg-white border-2 rounded-md"
          >
            <legend className="text-Qeteroblue text-2xl font-bold font-serif border-b mb-4 p-2">
              New Service
            </legend>
            <div className="w-full">
              <label
                htmlFor="service-name"
                className="block p-2  text-Qeteroblue"
              >
                Service Name
              </label>
              <input
                id="service-name"
                type="text"
                className="p-2 outline-none rounded-md border w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="duration" className="block p-2  text-Qeteroblue">
                Duration
              </label>
              <div className="flex gap-2 items-center ">
                <input
                  id="duration-hr"
                  type="number"
                  defaultValue="0"
                  className="p-2 outline-none rounded-md border w-full "
                />
                hr
                <input
                  id="duration-min"
                  type="number"
                  className="p-2 outline-none rounded-md border w-full "
                />
                min
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="price" className="block p-2  text-Qeteroblue">
                Price
              </label>
              <div className="flex gap-2 items-center">
                <input
                  id="price"
                  type="number"
                  className="p-2 outline-none rounded-md border w-full"
                />
                ETB
              </div>
            </div>
            <div className="mt-4 text-center">
              <input
                type="submit"
                value="Add"
                className="w-11/12  cursor-pointer bg-Qeteroblue text-white p-2 rounded-sm"
              />
            </div>
          </form>
          <div className="flex flex-wrap gap-4 flex-grow">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 min mx-auto md:mx-0 min-w-60 bg-white border-2 "
                >
                  <div className="grid">
                    <p>
                      {service.name}
                      <span className="text-sm pl-2 font-serif text-gray-600">
                        ({service.duration})
                      </span>
                    </p>
                    <span>ETB {service.price.toLocaleString()}</span>
                  </div>
                  <MdEdit />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
