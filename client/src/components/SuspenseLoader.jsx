import ClipLoader from "react-spinners/ClipLoader";

const SuspenseLoader = () => {
  return (
    <div className="sweet-loading ">
      <ClipLoader
        color="#c2e7ff"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        speedMultiplier="2"
        data-testid="loader"
      />
    </div>
  );
};

export default SuspenseLoader;
