import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Completed = ({ uploading }) => {
  if (uploading)
    return (
      <div className="flex flex-col gap-4 bg-white items-center justify-center w-11/12  max-w-2xl aspect-[3/2] md:mt-32 border rounded-md mx-auto mt-8 font-serif  p-12">
        <span className="inline-block animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-Qeteroblue"></span>
        <p>We're saving your data</p>
      </div>
    );
  return (
    <div className="flex flex-col gap-4  bg-white items-center justify-center w-11/12 max-w-2xl aspect-[3/2] md:mt-32 border rounded-md mx-auto mt-8 font-serif p-12 text-center">
      <IoMdCheckmarkCircleOutline className="text-green-500 text-7xl mx-auto" />
      <p className="p-3 text-2xl">Congrats!</p>
      <p className="">
        You've sucessfully created a business account. you can now add your team
        mebers and services to start.
      </p>
      <Link
        to="./team-members"
        className="bg-green-500 text-white p-2 min-w-24 mt-8 rounded-sm "
      >
        OK
      </Link>
    </div>
  );
};

export default Completed;
