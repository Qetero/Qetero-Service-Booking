import { Link } from "react-router-dom";
import { MdLocationPin, MdOutlineStar } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
const BusinessesListing = (prop) => {
  const business = {
    name: "Abi Makeup & HairBeauty SalonBeauty SalonBeauty Salon",
    serviceType: "Beauty Salon",
    image:
      "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/images%2Fbenyamin-bohlouli-_C-S7LqxHPw-unsplash.jpg?alt=media&token=d04caf58-f3cc-4e2d-b32d-0665a3f64e16",
    rating: 4.9,
    reviesCount: 1200,
    address: "Jemo, Addis Ababa",
  };
  const name = "Abi Makeup & Hair";
  const servicesNearYou = [];
  for (let i = 0; i < 4; i++) {
    servicesNearYou.push(
      <Link
        key={i}
        to={business.name.replaceAll(" ", "-")}
        className="group border rounded-md border-gray-400 overflow-hidden bg-white w-11/12 min-w-64 max-w-full mx-auto sm:w-[48%] md:w-[32%] lg:w-[23%] sm:mx-0 lg:mx-auto cursor-pointer"
      >
        <div className="relative overflow-hidden max-w-full">
          <img
            src={business.image}
            className="aspect-video w-full object-cover group-hover:scale-110 duration-300 ease-in"
          />
          <span className="absolute bottom-2 right-2 tracking-wider bg-Qeteroblue text-white p-1 font-serif shadow-md rounded-sm text-xs">
            {business.serviceType}
          </span>
        </div>
        <div className="p-3 ">
          <p className=" font-bold max-w-full line-clamp-1">{business.name}</p>
          <p className="flex items-center text-sm">
            {business.rating} <MdOutlineStar className="mr-2" /> (
            {business.reviesCount.toLocaleString()})
          </p>
          <div className="flex justify-between">
            <p className=" flex-grow flex items-center">
              <MdLocationPin className="inline" />
              <span className="line-clamp-1 text-sm ">{business.address}</span>
            </p>
            <BsArrowRight className="text-2xl cursor-pointer font-bold" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <section className="mx-auto lg:max-w-7xl w-full p-4">
      <p className="w-full flex justify-between items-center my-4">
        <span className="text-2xl font-semibold">{prop.filter}</span>

        <Link to={`Services/${prop.filter}`} className="pr-4">
          View All{" "}
        </Link>
      </p>
      <div className="flex overflow-auto gap-4">{servicesNearYou}</div>
    </section>
  );
};

export default BusinessesListing;
