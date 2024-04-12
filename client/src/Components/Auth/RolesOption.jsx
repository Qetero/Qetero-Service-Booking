import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
const RolesOption = ({ menu, setRole }) => {
  return (
    <div className="w-full md:max-w-sm mx-auto self-center">
      <Link to="/" className="inline-block">
        <MdArrowBack className="text-2xl mb-2 text-Qeteroblue -ml-4 cursor-pointer" />
      </Link>
      <h2 className="text-center md:text-start font-bold text-2xl text-Qeteroblue">
        Welcome aboard!
      </h2>
      <p className="text-center md:text-start my-4 text-Qeteroblue">
        How would you like to join us
      </p>
      <hr className="border-gray-400 mt-4 mb-8" />

      {menu.map((role, index) => (
        <div
          key={index}
          onClick={() => setRole(role.name)}
          className="relative p-4 my-6 border hover:shadow-lg border-Qeteroblue shadow-Qeteroblue rounded-md cursor-pointer"
        >
          <p className="text-lg font-serif text-Qeteroblue">As {role.name}</p>
          <p className="text-xs md:text-sm text-gray-500">{role.purpose}</p>
          <MdArrowForward className="absolute right-2 top-1/3 text-2xl text-Qeteroblue" />
        </div>
      ))}

      <div className="mt-20 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>
      <div className="mt-3 text-sm flex justify-between items-center text-Qeteroblue">
        <p>Already have an account?</p>
        <Link
          to="/login"
          className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default RolesOption;
