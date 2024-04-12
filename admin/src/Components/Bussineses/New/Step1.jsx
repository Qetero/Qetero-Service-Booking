import { useEffect, useRef, useState } from "react";
import FileInputBackground from "../../../Assets/file-input-background.png";
import { MdOutlineCloudUpload, MdRemoveCircle } from "react-icons/md";
const Step1 = ({ getvalues, register, errors }) => {
  const [img, setImg] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (getvalues("image") != null) setImg(getvalues("image")[0]);
    if (getvalues("icon") != null) setIcon(getvalues("icon")[0]);
  }, []);
  return (
    <>
      <div className="relative flex-grow md:flex-grow-0">
        <p className="relative w-full md:w-80 border p-2 pb-8 rounded-md m-2">
          <img
            src={img == null ? FileInputBackground : URL.createObjectURL(img)}
            className="w-full h-48 object-contain"
          />
          <label
            htmlFor="bussiness-pic"
            className="absolute top-[60%] left-[43%] cursor-pointer hover:bg-gray-300 text-3xl text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-serif"
          >
            +
          </label>
          <span className="text-center block font-serif italic text-gray-800 mt-4">
            {img == null ? "Add an image" : img.name}
          </span>
        </p>

        <input
          id="bussiness-pic"
          className="absolute top-2/3 opacity-0 pointer-events-none w-full px-4 py-2 rounded-md border border-gray-400"
          type="file"
          required={!getvalues("image")}
          {...register("image")}
          onChange={(e) => setImg(e.target.files[0])}
        />
        <p className="text-sm text-red-600 text-center">
          {errors.image?.message}
        </p>
      </div>

      <div className="flex-grow">
        <div className="flex gap-4">
          <div className="flex-grow">
            <label
              className="block my-3 font-semibold"
              htmlFor="bussiness-name"
            >
              Bussines Name
            </label>
            <input
              id="bussiness-name"
              className="w-full px-4 py-2 rounded-md border border-gray-400"
              type="text"
              {...register("name")}
              required
              defaultValue={getvalues("name")}
            />
            <p className="text-sm text-red-600">{errors.name?.message}</p>
          </div>
          <div className="">
            <p className="my-3 font-semibold">Icon</p>
            <label
              htmlFor="bussiness-icon"
              className="flex cursor-pointer w-20 h-11 text-center justify-center items-center p-2 rounded-md border border-gray-400"
            >
              {icon == null ? (
                <MdOutlineCloudUpload size={26} color="#6366f1" />
              ) : (
                <img
                  src={URL.createObjectURL(icon)}
                  className=" max-h-10 object-cover"
                />
              )}
            </label>
            <input
              id="bussiness-icon"
              className="-mt-1 block w-20 opacity-0 pointer-events-none px-4 py-2 rounded-md border border-gray-400"
              type="file"
              {...register("icon")}
              onChange={(e) => setIcon(e.target.files[0])}
              required={icon == null}
            />
          </div>
        </div>

        <div>
          <label
            className="block mb-3 font-semibold"
            htmlFor="bussiness-description"
          >
            Bussines Description
          </label>
          <textarea
            id="bussiness-description"
            type="text"
            {...register("description")}
            defaultValue={getvalues("description")}
            rows={7}
            required
            className="w-full md:h-64 px-4 py-2 rounded-md border border-gray-400"
          />
          <p className="text-sm text-red-600">{errors.description?.message}</p>
        </div>
      </div>
    </>
  );
};

export default Step1;
