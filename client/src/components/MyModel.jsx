import { useEffect } from "react";
import { createPortal } from "react-dom";

const MyModel = ({ toggleModel, children }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        toggleModel();
      }
    };

    document.body.style.overflowY = "hidden";
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.style.overflowY = "scroll";
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      {createPortal(
        <div>
          <div
            onClick={toggleModel}
            className="overlay fixed inset-0 bg-black/50 "
          ></div>
          <div className="main-content fixed left-1/2 top-1/2 h-screen  w-screen -translate-x-1/2 -translate-y-1/2  rounded-t-lg bg-white px-4 py-2 md:h-[90vh] md:w-[75vw] ">
            {children}
          </div>
        </div>,
        document.querySelector(".myPortalModelDiv")
      )}
    </div>
  );
};

export default MyModel;
