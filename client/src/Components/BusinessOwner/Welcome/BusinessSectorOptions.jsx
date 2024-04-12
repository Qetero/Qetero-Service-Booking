import { useState } from "react";
import icon from "../../../assets/facial-massage.png";
import { MdCheckBox } from "react-icons/md";
const BusinessSectorOptions = ({ register, getValues }) => {
  const [cheked, setChecked] = useState(() => getValues("businessSector"));
  const businessTypes = [
    {
      name: "Beauty and Welness",
      description:
        "services and treatments aimed at enhancing physical appearance, promoting well-being, and improving overall health",
      icon: "iconpath",
    },
    {
      name: "Sport and Fitness",
      description:
        "services and treatments aimed at enhancing physical appearance, promoting well-being, and improving overall health",
      icon: "iconpath",
    },
    {
      name: "Counseling & Personal Meetings",
      description:
        "services and treatments aimed at enhancing physical appearance, promoting well-being, and improving overall health",
      icon: "iconpath",
    },
    {
      name: "Educational",
      description:
        "services and treatments aimed at enhancing physical appearance, promoting well-being, and improving overall health",
      icon: "iconpath",
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-serif text-Qeteroblue border-b border-Qeteroblue w-full py-2 mb-5">
        Which business sector describes you more
      </h1>
      <div className="flex gap-4 flex-wrap font-serif justify-center ">
        {businessTypes.map((biz, index) => (
          <div key={index}>
            <label
              htmlFor={biz.name}
              className={`relative w-full flex gap-3 p-4 md:max-w-sm hover:bg-Qeteroblue/10 items-center border border-Qeteroblue cursor-pointer rounded-md ${
                cheked == biz.name ? "bg-Qeteroblue/10 border-2" : ""
              }`}
            >
              {cheked == biz.name && (
                <MdCheckBox className="text-Qeteroblue text-2xl absolute top-0 right-0" />
              )}
              <img src={icon} alt="" className="w-12 h-auto" />
              <p>
                <span className="block text-xl text-Qeteroblue ">
                  {biz.name}
                </span>
                <span className=" text-sm line-clamp-2 text-gray-600">
                  {biz.description}
                </span>
              </p>
            </label>
            <input
              type="radio"
              id={biz.name}
              value={biz.name}
              {...register("businessSector")}
              onChange={() => setChecked(biz.name)}
              className="sr-only"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BusinessSectorOptions;
