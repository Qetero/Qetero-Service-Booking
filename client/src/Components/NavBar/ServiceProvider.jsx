import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 border-2 p-2 flex gap-4 justify-center">
      <Link to="" className="grid text-center text-gray-800 p-2">
        <span className="text-2xl">🧩</span>
        <span>Dashboard</span>
      </Link>
      <Link to="Servises" className="grid text-center text-gray-800 p-2">
        <span className="text-2xl">🎲</span>
        <span>Servises</span>
      </Link>
      <Link to="Staffs" className="grid text-center text-gray-800 p-2">
        <span className="text-2xl">👷‍♀️</span>
        <span>Staffs</span>
      </Link>
      <Link to="Bookings" className="grid text-center text-gray-800 p-2">
        <span className="text-2xl">📜</span>
        <span>Bookings</span>
      </Link>
      <Link to="Reviews" className="grid text-center text-gray-800 p-2">
        <span className="text-2xl">✨</span>
        <span>Reviews</span>
      </Link>
    </nav>
  );
};

export default NavBar;
