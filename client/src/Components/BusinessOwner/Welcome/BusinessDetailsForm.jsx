import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
const BusinessDetailsForm = ({ register, setValue, getValues, errors }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    const images = getValues("images");
    if (images) {
      const previews = [];
      for (let i = 0; i < images.length; i++) {
        previews.push(URL.createObjectURL(images[i]));
      }
      setImagePreviews(previews);
    }
  }, []);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const previews = [];
    for (let i = 0; i < files.length; i++) {
      previews.push(URL.createObjectURL(files[i]));
    }
    setImagePreviews(previews);
    setValue("images", files);
  };

  const handleRemovePreview = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
    //unregister from react-hook-form
    const updatedImages = [...getValues("images")];
    updatedImages.splice(index, 1);
    setValue("images", updatedImages);
  };
  return (
    <>
      <h1 className="text-2xl font-serif text-Qeteroblue border-b border-Qeteroblue w-full py-2 mb-5">
        How would you describe yor business
      </h1>
      <div className="lg:flex items-start gap-4 w-full">
        <div className="w-fit text-center mx-auto">
          <label
            htmlFor="images"
            className="text-Qeteroblue cursor-pointer w-fit bg-red-200"
          >
            <BiImageAdd className="text-7xl mx-auto" />
            <span className="text-center block font-serif italic  mt-4">
              Add an image
            </span>
          </label>

          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-3 gap-4 p-2 mt-5  border border-Qeteroblue rounded-md py-6">
              {imagePreviews.map((preview, index) => (
                <div
                  key={index}
                  className="relative w-20 p-2 border rounded-md"
                >
                  <img
                    src={preview}
                    alt={`Preview ${index}`}
                    className="w-full aspect-square object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemovePreview(index)}
                    className=" absolute -top-2 -right-3 text-red-600 p-1"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          )}
          <p className="text-sm text-red-600 text-center">
            {errors.images?.message}
          </p>
        </div>
        <div className="flex-grow space-y-6 ">
          <div className="">
            <label htmlFor="name" className="block my-3 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name")}
              className="w-full px-4 py-2 rounded-md border border-gray-400"
            />
            <p className="text-sm text-red-600 text-center">
              {errors.name?.message}
            </p>
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              {...register("about")}
              rows={7}
              className="w-full px-4 py-2 rounded-md border border-gray-400"
            />

            <p className="text-sm text-red-600 text-center">
              {errors.about?.message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessDetailsForm;
