import { TbCameraPlus, TbArrowLeft } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const NewTeamMember = () => {
  const navigate = useNavigate();
  return (
    <section className=" relative md:min-h-screen font-serif flex flex-col justify-start items-center md:pt-8">
      <div className="w-full h-10 md:hidden"></div>
      <IoMdClose
        className="md:hidden fixed top-0 left-0 text-4xl cursor-pointer p-2 font-bold"
        onClick={() => navigate("/pa/team-members")}
      />
      <h1 className="hidden md:block max-w-6xl p-8 text-3xl text-Qeteroblue font-semibold w-full">
        Add team member
      </h1>
      <form
        action=""
        className="w-11/12 mx-auto md:border bg-white shadow-md max-w-4xl p-4 md:p-8 rounded-md space-y-5 pb-8"
      >
        <legend className="p-4  hidden md:block">
          <p className="text-Qeteroblue text-2xl">Profile</p>
          <span className="text-base text-Qeteroblue/80  font-sans">
            Manage your team members personal profile
          </span>
        </legend>
        <div className="border-b pb-4 mb-6  flex justify-center md:justify-normal">
          <label
            htmlFor="image"
            className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-slate-100 border border-Qeteroblue flex items-center justify-center cursor-pointer"
          >
            <TbCameraPlus className="text-4xl font-light text-Qeteroblue" />
            {/* <TbTrash className="absolute bottom-0 border bg-white shadow-md p-1 rounded-full right-1 text-4xl font-light text-Qeteroblue" /> */}
          </label>
          <input id="image" type="file" className="sr-only" />
        </div>

        <div className="md:flex gap-4 space-y-4 md:space-y-0">
          <div className="w-full">
            <label htmlFor="full-name" className="block p-2  text-Qeteroblue">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              className="p-2 outline-none rounded-md border w-full"
            />
          </div>
          <div className="w-full">
            <label
              id="job-title"
              htmlFor="job-title"
              className="block p-2  text-Qeteroblue"
            >
              Job Title
            </label>
            <input
              id="job-title"
              type="text"
              className="p-2 outline-none rounded-md border w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 space-y-4 md:space-y-0">
          <div className="w-full">
            <label htmlFor="full-name" className="block p-2  text-Qeteroblue">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              className="p-2 outline-none rounded-md border w-full"
            />
          </div>
          <div className="w-full">
            <label
              id="job-title"
              htmlFor="job-title"
              className="block p-2  text-Qeteroblue"
            >
              Job Title
            </label>
            <input
              id="job-title"
              type="text"
              className="p-2 outline-none rounded-md border w-full"
            />
          </div>
        </div>
        <div className="text-center md:text-right">
          <input
            type="submit"
            value="Save"
            className="w-11/12 md:w-fit text-center cursor-pointer bg-Qeteroblue text-white p-2  min-w-24 rounded-sm"
          />
        </div>
        <div className="fixed bottom-0 md:top-0  left-0 w-full h-fit p-2 bg-white md:bg-transparent z-40 text-center md:text-right md:pr-8 md:space-x-8">
          <button
            type="button"
            className="hidden md:inline-block border-2 py-2 rounded-sm bg-white px-6"
            onClick={() => navigate("/pa/team-members")}
          >
            Close
          </button>
        </div>
      </form>

      {/* <div className="w-full h-10"></div> */}
    </section>
  );
};

export default NewTeamMember;
