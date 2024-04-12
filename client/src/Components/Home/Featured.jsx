import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const name = "Abi Makeup & Hair";
  const featuredServices = [];
  for (let i = 0; i < 4; i++) {
    featuredServices.push(
      <div
        key={i}
        className="relative aspect-[3/2] w-11/12 min-w-64 max-w-full mx-auto sm:w-[48%] md:w-[32%] lg:w-[23%] sm:mx-0  lg:mx-auto overflow-hidden rounded-lg"
      >
        <Link to={`Service/${name.replaceAll(" ", "-")}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/images%2Fbenyamin-bohlouli-_C-S7LqxHPw-unsplash.jpg?alt=media&token=d04caf58-f3cc-4e2d-b32d-0665a3f64e16"
            className=""
          />
          <span className="absolute top-2 left-2 bg-white/70 leading-3 p-2 text-Qeteroblue  font-serif text-sm tracking-wider">
            Featured
          </span>
          <p className="absolute bottom-0 bg-black/30 w-full  text-white flex flex-col justify-end p-8 py-2">
            <span className="text-lg font-semibold ">Abi Makeup & Hair </span>

            <span className="text-sm">Addis Ababa, Lafto (4.5/5)</span>
          </p>
        </Link>
      </div>
    );
  }
  return (
    <section className="mx-auto lg:max-w-7xl w-fit max-w-full  p-4 ">
      <p className="w-full flex justify-between items-center my-4">
        <span className="text-2xl font-semibold">Featured</span>
        <Link to={`Services/featured`} className="pr-4">
          View All
        </Link>
      </p>
      <div className="flex gap-4 overflow-auto flex-wrap sm:flex-nowrap">
        {featuredServices}
      </div>
    </section>
  );
};

export default FeaturedServices;
