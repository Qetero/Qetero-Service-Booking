import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import UseMultiStepForm from "../../utils/UseMultiStepForm";
import BusinessDetailsForm from "../../Components/BusinessOwner/Welcome/BusinessDetailsForm";
import BusinessSectorOptions from "../../Components/BusinessOwner/Welcome/BusinessSectorOptions";
import ServiceTypeOptions from "../../Components/BusinessOwner/Welcome/ServiceTypeOptions";
import LocationForm from "../../Components/BusinessOwner/Welcome/LocationForm";
import WorkingHours from "../../Components/BusinessOwner/Welcome/WorkingHours";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineCheck } from "react-icons/md";
import Completed from "../../Components/BusinessOwner/Welcome/Completed";
const Welcome = () => {
  const [uploading, setUploading] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const steps = [
    "Business Sector",
    "Service Type",
    "Business Description",
    "Business Location",
    "Working Hours",
  ];
  const businessSchema = Joi.object({
    businessSector: Joi.string().required(),
    serviceType: Joi.string().required(),
    name: Joi.string().min(5).max(100).required(),
    about: Joi.string().min(15).max(1024).required(),
    images: Joi.array().items(Joi.string()),
    workingHours: Joi.array().items(
      Joi.object({
        day: Joi.string().valid(
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ),
        startTime: Joi.string().required(),
        endTime: Joi.string().required(),
      })
    ),
    location: Joi.object({
      state: Joi.string().required(),
      city: Joi.string().required(),
      address: Joi.string().required(),
      coordinates: Joi.object({
        latitude: Joi.string(),
        longitude: Joi.string(),
      }),
    }),
  });
  const {
    register,
    unregister,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    // resolver: joiResolver(businessSchema),
  });
  const {
    currentForm,
    currentStepNo,
    completedStepsNo,
    isFirstStep,
    isLastStep,
    prev,
    next,
    goTo,
  } = UseMultiStepForm([
    <BusinessSectorOptions {...{ register, getValues, errors }} />,
    <ServiceTypeOptions {...{ register, getValues, errors }} />,
    <BusinessDetailsForm
      {...{ register, unregister, getValues, errors, setValue }}
    />,
    <LocationForm {...{ register, getValues, errors }} />,
    <WorkingHours {...{ register, getValues, errors }} />,
  ]);

  const registerBussiness = async (business) => {
    if (!isLastStep) next();
    else {
      setFormCompleted(true);
      setUploading(true);

      new Promise((resolve) => {
        setTimeout(() => {
          setUploading(false);
        }, 5000);
      });
    }
  };
  if (formCompleted) return <Completed {...{ uploading }} />;
  return (
    <>
      <h1 className="text-center p-4 md:py-8 text-xl md:text-3xl font-serif text-Qeteroblue">
        <p className="border rounded-xl max-w-xl mx-auto p-2 md:p-8 border-Qeteroblue">
          Welcome Aboard! <br />
          Complete your setup to get started
        </p>
      </h1>
      <section className="mx-auto w-full md:w-11/12 xl:max-w-6xl  md:flex md:border bg-white rounded-lg">
        <div className=" min-w-fit p-4  md:py-8 md:space-y-4 bg-Qeteroblue text-white flex items-center justify-center md:block">
          {steps.map((step, index) => (
            <p
              onClick={() => {
                if (completedStepsNo >= index) goTo(index);
                else toast.error("Please, complete the current step first.");
              }}
              key={index}
              className={`p-2 flex items-center gap-3 cursor-pointer hover:scale-125 md:hover:scale-100 md:hover:bg-white md:hover:text-Qeteroblue rounded-md ${
                currentStepNo == index &&
                "md:bg-white md:text-Qeteroblue scale-125 md:scale-100"
              }`}
            >
              <span className="bg-white text-Qeteroblue w-8 flex items-center justify-center aspect-square rounded-full">
                {index < currentStepNo ? <MdOutlineCheck /> : index + 1}
              </span>
              <span className="hidden md:block">{step}</span>
            </p>
          ))}
        </div>
        <form
          onSubmit={handleSubmit(registerBussiness)}
          className="relative flex flex-wrap gap-6 p-8 w-full"
        >
          {currentForm}
          <div className="md:h-20"></div>
          <div className="w-full text-center md:text-right md:absolute bottom-4 right-2">
            {!isFirstStep && (
              <input
                type="button"
                value="Prev"
                onClick={prev}
                className="text-center cursor-pointer bg-Qeteroblue text-white p-2 mx-4 min-w-24 rounded-sm"
              />
            )}
            {uploading ? (
              <button
                type="button"
                disabled
                className="text-center cursor-not-allowed bg-Qeteroblue text-white p-2 mx-4 min-w-24 rounded-sm"
              >
                <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
              </button>
            ) : (
              <input
                type="submit"
                value={isLastStep ? "Save" : "Next"}
                className="text-center cursor-pointer bg-Qeteroblue text-white p-2 mx-4 min-w-24 rounded-sm"
              />
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Welcome;
