import FitnessImage from "../../Assets/fitness.jpg";
import { MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";
const BussinessOverviewCard = () => {
  return (
    <div className="relative flex gap-4 flex-col md:flex-row -z-10 bg-white p-4 rounded-md shadow-md">
      <figure className="">
        <img
          src={FitnessImage}
          alt=""
          className="aspect-video md:aspect-[4/5] lg:aspect-[4/3] w-full rounded-md object-cover"
        />
      </figure>
      <div className="p-4 space-y-4">
        <Link to={`./edit/12`} className="absolute top-5 right-5">
          <MdEditSquare className="text-xl text-black860  " />
        </Link>
        <h1 className="text-2xl font-bold font-serif">Sports & Fitness</h1>
        <p className="">
          Unlock your peak performance with our online sports and fitness
          booking platform! Conveniently schedule your workouts, classes, and
          personal training sessions with ease. From yoga to HIIT, find your
          perfect fit and book effortlessly from anywhere, anytime. Take the
          first step towards your fitness goals today!
        </p>
        <div className="flex flex-wrap gap-4 w-full flex-grow-0">
          <span className="bg-gray-200 px-4 py-2">Personal Trainers</span>
          <span className="bg-gray-200 px-4 py-2">Gyms</span>
          <span className="bg-gray-200 px-4 py-2">Yoga Classes</span>
        </div>
      </div>
    </div>
  );
};

export default BussinessOverviewCard;
