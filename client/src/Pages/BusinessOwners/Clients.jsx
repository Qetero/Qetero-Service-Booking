import SideNav from "../../Components/NavBar/SideNav";

const Clients = () => {
  return (
    <div className="flex">
      <SideNav />
      <section className="mx-auto w-full lg:max-w-6xl md:pt-12 md:p-4 p-2 ">
        <h1 className="text-2xl fonst-semibold font-serif py-4">
          Personal Area | Clients
        </h1>
        <div className="">Clients list</div>
      </section>
    </div>
  );
};

export default Clients;
