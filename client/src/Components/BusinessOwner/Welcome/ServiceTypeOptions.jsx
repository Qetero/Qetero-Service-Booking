import { useState } from "react";
import icon from "../../../assets/facial-massage.png";
import { MdCheckBox } from "react-icons/md";
const ServiceTypeOptions = ({ register, getValues }) => {
  const [cheked, setChecked] = useState(() => getValues("serviceType"));
  const serviceTypes = [
    {
      name: "Beauty and Welness",
      icon: "iconpath",
    },
    {
      name: "Sport and Fitness",
      icon: "iconpath",
    },
    {
      name: "Educational",
      icon: "iconpath",
    },
    {
      name: "Counseling & Personal Meetings",
      icon: "iconpath",
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-serif text-Qeteroblue border-b border-Qeteroblue w-full py-2 mb-5">
        Which type of service are you providing
      </h1>
      <div className="flex gap-6 flex-wrap font-serif justify-center">
        {serviceTypes.map((service, index) => (
          <div key={index} className="w-full sm:w-fit">
            <label
              htmlFor={service.name}
              className={`relative flex gap-3 p-4 e-full sm:w-80 hover:bg-Qeteroblue/10 items-center border border-Qeteroblue cursor-pointer rounded-md ${
                cheked == service.name ? "bg-Qeteroblue/10 border-2" : ""
              }`}
            >
              {cheked == service.name && (
                <MdCheckBox className="text-Qeteroblue text-2xl absolute top-0 right-0" />
              )}
              <img src={icon} alt="" className="w-12 h-auto" />
              <p className="block text-xl text-Qeteroblue ">{service.name}</p>
            </label>
            <input
              type="radio"
              id={service.name}
              value={service.name}
              {...register("serviceType")}
              onChange={() => setChecked(service.name)}
              className="sr-only"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTypeOptions;
