import { useEffect, useState } from "react";
import { MdOutlineCloudUpload, MdRemoveCircle } from "react-icons/md";
const Step2 = ({ getvalues, register, fields, append, remove }) => {
  const [icons, setIcons] = useState([]);
  const removeIcon = (index) => {
    setIcons((current) => current.filter((_, i) => i != index));
  };
  const addIcon = (icon, index) => {
    if (typeof icons[index] == "undefined") {
      setIcons((current) => [...current, icon]);
    } else {
      setIcons((current) => [
        ...current.slice(0, index),
        icon,
        ...current.slice(index),
      ]);
    }
  };

  useEffect(() => {
    const categories = getvalues("categories");
    setIcons(() => []);
    categories.map((category, index) => {
      if (category.icon != null) addIcon(category.icon[0], index);
    });
  }, []);
  return (
    <>
      <div className="hidden md:block">
        <p className=" w-fit md:w-80 border p-2 pb-8 rounded-md m-2">
          <img
            src={URL.createObjectURL(getvalues("image")[0])}
            className="w-full h-48 object-cover rounded-md"
          />

          <span className="block text-center text-xl pb-4 mt-4">
            {getvalues("name")}
          </span>
          <span className="text-gray-700 px-4 line-clamp-4">
            {getvalues("description")}
          </span>
        </p>
      </div>

      <div className="flex-grow relative">
        <p className="md:text-2xl font-serif font-semibold flex justify-between items-center">
          Sub Categories
          <button
            type="button"
            className="px-4 py-2 rounded-md border border-gray-400"
            onClick={() => append({ name: "", icon: null })}
          >
            +
          </button>
        </p>
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="flex items-center gap-4">
              <div className="flex-grow">
                <label
                  className="block my-3 font-semibold"
                  htmlFor={`category-name-${index}`}
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border border-gray-400"
                  id={`category-name-${index}`}
                  type="text"
                  {...register(`categories.${index}.name`)}
                  required
                />
              </div>
              <div className="">
                <p className="my-3 font-semibold">Icon</p>
                <label
                  htmlFor={`category-icon-${index}`}
                  className="flex cursor-pointer w-20 h-11 text-center justify-center items-center p-2 rounded-md border border-gray-400"
                >
                  {typeof icons[index] == "undefined" ? (
                    <MdOutlineCloudUpload size={26} color="#6366f1" />
                  ) : (
                    <img
                      src={URL.createObjectURL(icons[index])}
                      className=" max-h-10 object-cover"
                    />
                  )}
                </label>
                <input
                  id={`category-icon-${index}`}
                  className="-mt-12 block w-20 opacity-0 pointer-events-none px-4 py-2 rounded-md border border-gray-400"
                  type="file"
                  {...register(`categories.${index}.icon`)}
                  onChange={(e) => {
                    addIcon(e.target.files[0], index);
                  }}
                  required={typeof icons[index] == "undefined"}
                />
              </div>
              <div className="text-right w-fit mt-12">
                <button
                  type="button"
                  className="py-4"
                  onClick={() => {
                    remove(index);
                    removeIcon(index);
                  }}
                >
                  <MdRemoveCircle size={24} color="#ef4444" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Step2;
