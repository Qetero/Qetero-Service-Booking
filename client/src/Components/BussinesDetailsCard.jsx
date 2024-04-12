import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdOutlineStar } from "react-icons/md";
const BussinesDetailsCard = () => {
  const business = {
    name: "Abi Makeup & Hair Style",
    serviceType: "Beauty Salon",
    image:
      "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/images%2Fbenyamin-bohlouli-_C-S7LqxHPw-unsplash.jpg?alt=media&token=d04caf58-f3cc-4e2d-b32d-0665a3f64e16",
    rating: 4.9,
    reviesCount: 1200,
    address: "Jemo Addis Ababa, Around Zefnesh Grand Mall",
    services: [
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
    ],
  };
  return (
    <Link
      to={"/service/" + business.name.replaceAll(" ", "-")}
      className="group border border-gray-300 rounded-md overflow-hidden bg-white w-full mx-auto sm:w-[48%]  lg:w-[32%] sm:mx-0 lg:mx-auto cursor-pointer"
    >
      <div className="relative overflow-hidden max-w-full">
        <img
          src={business.image}
          className="aspect-video w-full object-cover group-hover:scale-110 duration-300 ease-in"
        />
      </div>
      <div className="p-3 ">
        <p className=" font-bold max-w-full line-clamp-1 text-lg">
          {business.name}
        </p>
        <p>
          <span>{business.rating}</span>
          <span className="p-1">
            {[...Array(Math.round(business.rating))].map((star, index) => {
              return <MdOutlineStar key={index} className=" inline-block" />;
            })}
          </span>
          <span>({business.reviesCount.toLocaleString()})</span>
        </p>
        <p className="line-clamp-1 font-serif text-sm text-gray-600">
          {business.address}
        </p>
        <div className="flex gap-4 mt-2">
          <span className=" bg-Qeteroblue text-white p-1 font-serif tracking-wider rounded-sm text-xs">
            {business.serviceType}
          </span>
        </div>
        <hr className="mt-2" />
        {business.services.map((service, index) => {
          return (
            <div key={index} className="flex justify-between items-center p-2">
              <p className="grid">
                <span>{service.name}</span>
                <span className="text-sm  font-serif text-gray-600">
                  {service.duration}
                </span>
              </p>
              <p>ETB {service.price.toLocaleString()}</p>
            </div>
          );
        })}
        <p className="text-Qeteroblue p-2 pb-0  font-serif flex justify-between items-center">
          See all services
          <MdKeyboardArrowRight className="text-2xl" />
        </p>
      </div>
    </Link>
  );
};

export default BussinesDetailsCard;
