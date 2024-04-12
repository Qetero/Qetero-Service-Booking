const ServiceListing = ({ services }) => {
  return (
    <div className="">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b my-4 p-4 rounded-md hover:border-Qeteroblue  border "
        >
          <div>
            <p className="text-lg">{service.name}</p>
            <p className="text-gray-500 text-sm">{service.duration}</p>
            <p className="text-sm">ETB {service.price}</p>
          </div>
          <button className="text-sm px-3 py-1 border border-Qeteroblue rounded-full text-Qeteroblue tracking-wider">
            Book
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceListing;
