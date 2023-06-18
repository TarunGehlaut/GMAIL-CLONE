import Logo from "../assets/svg-logo.svg";

const SuspenseLoader = () => {
  return (
    <div className="fixed inset-0 z-[200] grid  place-content-center bg-white ">
      <div className="animate-customBounce h-[60px]">
        <img src={Logo} alt="logo" className="h-full w-full " />
      </div>
    </div>
  );
};

export default SuspenseLoader;
