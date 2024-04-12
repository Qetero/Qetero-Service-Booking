import { useFieldArray, useForm } from "react-hook-form";
import Step1 from "../../Components/Bussineses/New/Step1";
import Step2 from "../../Components/Bussineses/New/Step2";
import UseMultiStepForm from "../../utils/UseMultiStepForm";
import { imageDb } from "../../data/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import Modal from "../../Components/Modal";
import SideNav from "../../Components/SideNav";
const NewBusinessType = () => {
  const [uploading, setUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "Congrats!",
    message: "your operation was finished succesfully",
  });
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { categories: [{ name: "", icon: null }] },
  });
  const { fields, append, remove } = useFieldArray({
    name: "categories",
    control,
  });

  const { currentForm, isFirstStep, isLastStep, prev, next } = UseMultiStepForm(
    [
      <Step1 getvalues={getValues} register={register} errors={errors} />,
      <Step2
        getvalues={getValues}
        fields={fields}
        append={append}
        remove={remove}
        register={register}
        errors={errors}
      />,
    ]
  );

  const uploadImage = async (folderName, imageFile) => {
    if (imageFile !== null) {
      const imgRef = ref(
        imageDb,
        `Bussiness-Types/${folderName}/${imageFile.name}-${Date.now()}`
      );
      const snapshot = await uploadBytes(imgRef, imageFile);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    }
  };

  const registerBussinessType = async (bussinesType) => {
    if (!isLastStep) next();
    else {
      setUploading(true);
      //upload images to firebase store
      // const folderName = bussinesType.name.replaceAll(" ", "-");
      // bussinesType.image = await uploadImage(folderName, bussinesType.image[0]);
      // bussinesType.icon = await uploadImage(folderName, bussinesType.icon[0]);
      // bussinesType.categories.map(async (category) => {
      //   category.icon = await uploadImage(folderName, category.icon[0]);
      // });
      //console.log(bussinesType);
      setUploading(false);
      setModalData({
        ...modalData,
        message: `${bussinesType.name} service type is registered successfully `,
      });
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex">
      <SideNav />
      <section className="mx-auto lg:max-w-6xl md:mt-12 p-2">
        <h1 className="text-2xl font-bold font-serif py-3 text-center md:text-start">
          New Bussiness Type
        </h1>
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          data={modalData}
        />
        <form
          onSubmit={handleSubmit(registerBussinessType)}
          className="flex flex-wrap gap-6 p-4 md:p-12 md:w-full shadow-md md:m-4 bg-white rounded-lg"
        >
          {currentForm}
          <div className="w-full text-center md:text-right">
            {!isFirstStep && (
              <input
                type="button"
                value="Prev"
                onClick={prev}
                className="text-center cursor-pointer bg-red-500 text-white p-2 mx-4 min-w-24 rounded-sm"
              />
            )}
            {uploading ? (
              <button
                type="button"
                disabled
                className="text-center cursor-pointer bg-red-500 text-white p-2 mx-4 min-w-24 rounded-sm"
              >
                <span class="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
              </button>
            ) : (
              <input
                type="submit"
                value={isLastStep ? "Save" : "Next"}
                className="text-center cursor-pointer bg-red-500 text-white p-2 mx-4 min-w-24 rounded-sm"
              />
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewBusinessType;
