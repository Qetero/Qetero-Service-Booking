import SideNav from "../../../Components/NavBar/SideNav";
import { MdStar, MdOutlineNoteAlt, MdKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonVcardFill, BsPersonBadge, BsStack } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import LastSeen from "../../../utils/getLastSeen";
import { Link } from "react-router-dom";
import { useState } from "react";
const Teams = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      _id: 1,
      fullName: "Yordanos Tesfaye",
      profilePicture:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/ProfilePictures%2Fdefault-profile-picture.png?alt=media&token=69884f18-fa1a-43ef-b805-897dad309816",
      email: "yordanostesfaye011@gmail.com",
      phoneNo: "+251919727471",
      registeredOn: new Date(),
      lastSignInTime: new Date("2024-04-04T09:30:00"),
      accountStatus: "Active",
      rating: 4.3,
    },
    {
      _id: 2,
      fullName: "Yordanos Tesfaye",
      profilePicture:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/ProfilePictures%2Fdefault-profile-picture.png?alt=media&token=69884f18-fa1a-43ef-b805-897dad309816",
      email: "yordanostesfaye011@gmail.com",
      phoneNo: "+251919727471",
      registeredOn: new Date(),
      lastSignInTime: new Date("2024-04-04T10:30:00"),
      accountStatus: "Deactivated",
      rating: 4.3,
    },
    {
      _id: 3,
      fullName: "Yordanos Tesfaye",
      profilePicture:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/ProfilePictures%2Fdefault-profile-picture.png?alt=media&token=69884f18-fa1a-43ef-b805-897dad309816",
      email: "yordanostesfaye011@gmail.com",
      phoneNo: "+251919727471",
      registeredOn: new Date(),
      lastSignInTime: new Date("2024-03-04T10:30:00 GMT+0300"),
      accountStatus: "Active",
      rating: 4.3,
    },
    {
      _id: 4,
      fullName: "Yordanos Tesfaye",
      profilePicture:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/ProfilePictures%2Fdefault-profile-picture.png?alt=media&token=69884f18-fa1a-43ef-b805-897dad309816",
      email: "yordanostesfaye011@gmail.com",
      phoneNo: "+251919727471",
      registeredOn: new Date(),
      lastSignInTime: new Date("2024-04-06T10:30:00"),
      accountStatus: "Active",
      rating: 4.3,
    },
  ]);

  const handleAccountStatusToggle = (id) => {
    console.log(id);
    setTeamMembers((prev) =>
      prev.map((member) =>
        member._id === id
          ? {
              ...member,
              accountStatus:
                member.accountStatus === "Active" ? "Deactivated" : "Active",
            }
          : member
      )
    );
  };
  return (
    <div className="flex">
      <SideNav />
      <section className="mx-auto w-full lg:max-w-6xl md:pt-12 md:p-4 p-2 overflow-auto">
        <h1 className="text-2xl fonst-semibold font-serif py-4">
          Personal Area | Team Members <span>(7)</span>
        </h1>
        <p className="text-right">
          <Link
            to="./new"
            className="bg-Qeteroblue text-white p-2 rounded-md px-4"
          >
            Add New
          </Link>
        </p>
        <div className="p-4 rounded-md flex gap-4 items-center justify-between flex-wrap my-4">
          <div className="flex items-center flex-grow max-w-lg">
            <input
              type="text"
              placeholder="Search"
              className="bg-white border w-full border-gray-300 rounded-md py-2 px-4  mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-Qeteroblue text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>
          <div className="flex gap-3  flex-wrap">
            <div className="flex items-center flex-grow">
              <label htmlFor="sort" className="mr-2">
                Filter
              </label>
              <select
                id="sort"
                className="flex-grow bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="price">Price</option>
              </select>
            </div>
            <div className="flex items-center gap-2 flex-grow">
              <label htmlFor="sort" className="mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                className="flex-grow bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-auto flex flex-wrap gap-4 font-serif justify-center md:justify-normal">
          {teamMembers.map((memeber, index) => (
            <div
              key={index}
              className="relative border p-2 rounded-md flex-grow max-w-sm bg-white pb-0 -z-10"
            >
              {/* account status toggle */}
              <div>
                <label
                  htmlFor={`account-status-${memeber._id}`}
                  className="flex items-center absolute right-2 top-2 cursor-pointer"
                >
                  <span
                    className={`block ${
                      memeber.accountStatus === "Active"
                        ? "bg-Qeteroblue"
                        : "bg-gray-300"
                    } w-8 h-5 rounded-full`}
                  ></span>
                  <span
                    className={`block ${
                      memeber.accountStatus === "Active"
                        ? "translate-x-3"
                        : "translate-x-0"
                    } bg-white w-3 h-3 rounded-full absolute top-1 left-1 transition`}
                  ></span>
                </label>
                <input
                  id={`account-status-${memeber._id}`}
                  type="checkbox"
                  className="sr-only"
                  onChange={() => handleAccountStatusToggle(memeber._id)}
                />
              </div>
              {/* profile */}
              <div className="p-2 whitespace-nowrap flex gap-4   items-center border-b">
                <span>
                  <img
                    src={memeber.profilePicture}
                    alt=""
                    className="w-8 aspect-square object-cover rounded-full"
                  />
                </span>
                <p className="grid ">
                  <span>{memeber.fullName} </span>
                  <span className="text-sm text-gray-400">(Senior Barber)</span>
                </p>
              </div>
              {/* details */}
              <div className="p-2 px-4 whitespace-nowrap flex gap-2 justify-between flex-col sm:flex-row border-b">
                <span>Email</span>
                <span className="text-sm">{memeber.email}</span>
              </div>
              <div className="p-2 px-4 whitespace-nowrap flex gap-2 justify-between flex-col sm:flex-row border-b">
                <span>LastSeen</span>
                <span>{LastSeen(memeber.lastSignInTime)}</span>
              </div>
              <div className="p-2 px-4 whitespace-nowrap flex gap-2 justify-between flex-col sm:flex-row border-b">
                <span>Status</span>
                <span>{memeber.accountStatus}</span>
              </div>
              <div className="p-2 px-4 whitespace-nowrap flex gap-2 justify-between flex-col sm:flex-row border-b">
                <span>Ratting</span>
                <span className="flex items-center gap-2">
                  {memeber.rating} <MdStar />
                </span>
              </div>
              <Link
                to={`./view/${memeber._id}`}
                className="text-Qeteroblue p-2 px-4 pb-4 flex justify-between items-center"
              >
                View More
                <MdKeyboardArrowRight className="text-2xl" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Teams;
