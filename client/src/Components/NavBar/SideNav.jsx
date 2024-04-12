import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdEditCalendar,
  MdKeyboardDoubleArrowRight,
  MdOutlineCurrencyExchange,
  MdMedicalServices,
  MdGroups2,
} from "react-icons/md";
import { BsFillPersonVcardFill, BsPersonBadge, BsStack } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const sideNavRef = useRef(null);
  const sideNavPlaceholderRef = useRef(null);

  const iconClass = `cursor-pointer duration-500 text-2xl`;
  const menuItems = [
    {
      title: <h1 className="text-white text-xl">Qetero</h1>,
      icon: (
        <MdEditCalendar
          className={`${iconClass} text-white text-3xl ${
            isOpen && "-ml-2 rotate-[360deg]"
          }`}
        />
      ),
    },
    {
      title: "Dashboard",
      icon: <MdDashboard className={iconClass} />,
      gap: true,
    },
    {
      title: "Team Members",
      icon: <MdGroups2 className={iconClass} />,
    },
    {
      title: "Services",
      icon: <MdMedicalServices className={iconClass} />,
    },
    {
      title: "Clients",
      icon: <BsPersonBadge className={iconClass} />,
    },
    {
      title: "Transactions",
      icon: <MdOutlineCurrencyExchange className={iconClass} />,
    },
    {
      title: "Payouts",
      icon: <GiReceiveMoney className={iconClass} />,
    },
  ];

  useEffect(() => {
    const sideNavWidth = sideNavRef.current.offsetWidth;
    sideNavPlaceholderRef.current.style.width = `${sideNavWidth + 10}px`;
  }, [isOpen]);

  return (
    <>
      <div
        ref={sideNavRef}
        className={`fixed bg-Qeteroblue text-white w-fit h-screen  duration-300 `}
      >
        <MdKeyboardDoubleArrowRight
          className={`absolute cursor-pointer -right-4 top-12 text-4xl bg-white text-Qeteroblue rounded-full border border-black  duration-300 ${
            !isOpen && "rotate-180"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className={`p-2 w-fit`}>
          {menuItems.map((menu, index) => (
            <Link
              to={`/pa/${menu.title
                ?.toString()
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              key={index}
              className={`relative group flex rounded-md p-2 cursor-pointer hover:bg-white hover:text-Qeteroblue text-sm items-center gap-x-3 
              ${menu.gap ? "mt-9" : "mt-2"} `}
            >
              {menu.icon}
              {isOpen ? (
                <span className={`whitespace-nowrap origin-left duration-200`}>
                  {menu.title}
                </span>
              ) : (
                <span
                  className={`absolute left-full top-1 invisible group-hover:visible ml-1 bg-Qeteroblue border  text-white whitespace-nowrap py-1 px-4`}
                >
                  {menu.title}
                </span>
              )}
            </Link>
          ))}
        </ul>
      </div>
      {/* place holder */}
      <div
        ref={sideNavPlaceholderRef}
        className="placeholder h-screen mr-4 md:mr-8"
      ></div>
    </>
  );
};

export default SideNav;
