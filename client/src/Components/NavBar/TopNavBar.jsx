import { Link } from "react-router-dom";
import { useUserAuth } from "../../Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
const TopNavBar = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-gray-200 border-2 font-serif">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-1">
        <Link to="/">
          <span className="text-2xl font-semibold whitespace-nowrap cursor-pointer text-Qeteroblue">
            Qetero
          </span>
        </Link>
        {user ? (
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white md:border-0 items-center">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="Appointments">
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link to="Favorites">
                <span>Favorites</span>
              </Link>
            </li>
            <li className="relative">
              <img
                src={user.profilePicture}
                alt=""
                className="rounded-full w-10 h-10"
              />

              <p className="absolute top-[110%] right-4 bg-white border w-fit p-2 z-20 grid gap-2 text-right">
                <Link
                  to="/pa"
                  className=" whitespace-nowrap flex items-center justify-between gap-4 p-1"
                >
                  My profile
                  <BiChevronRight className="text-2x" />
                </Link>
                <button
                  className=" whitespace-nowrap flex items-center justify-between gap-4 p-1"
                  onClick={() => {
                    logOut();
                    navigate("/");
                  }}
                >
                  Logout
                  <BiChevronRight className="text-2x" />
                </button>
              </p>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white md:border-0">
            <li>
              <Link
                to="/register"
                className="md:text-Qeteroblue md:border md:border-Qeteroblue md:px-4 md:py-1 md:rounded-full md:text-sm"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="md:bg-Qeteroblue md:border md:border-Qeteroblue md:text-white  md:px-5 md:py-1 md:rounded-full md:text-sm"
              >
                Log in
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
