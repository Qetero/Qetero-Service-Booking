import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 border-2 p-2 flex gap-4 justify-center">
      <Link to="" className="grid text-center text-gray-800 p-2">
        <span className="md:text-2xl">🧩</span>
        <span>Dashboard</span>
      </Link>
      <Link to="Businesses" className="grid text-center text-gray-800 p-2">
        <span className="md:text-2xl">🎲</span>
        <span>Businesses</span>
      </Link>
      <Link to="Reviews" className="grid text-center text-gray-800 p-2">
        <span className="md:text-2xl">✨</span>
        <span>Account</span>
      </Link>
    </nav>
  );
};

export default NavBar;
