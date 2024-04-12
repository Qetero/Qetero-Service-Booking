import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero.jpg";
const HeroSection = () => {
  return (
    <section className="relative mx-auto lg:my-8 max-w-7xl lg:rounded-lg overflow-hidden">
      <img
        className="w-full lg:rounded-lg max-h-full lg:h-[540px] "
        src={HeroImg}
        alt=""
      />
      <div className="absolute top-0 left-0 bg-black/30 w-full h-full  flex gap-4 justify-center items-center">
        <div className="max-w-sm lg:max-w-xl text-center">
          <p className="text-2xl lg:text-4xl p-4 text-white font-serif">
            Manage your services and grow your business with us
          </p>
          <Link
            to=""
            className="bg-white text-black rounded-md  p-3 w-40 m-4 inline-block"
          >
            Join Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
