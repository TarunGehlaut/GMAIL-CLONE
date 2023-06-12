import { useState } from "react";

const ToolTip = ({ text, children, className }) => {
  const [IsVisible, setIsVisible] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {IsVisible && (
        <div
          className={`absolute   z-[100] rounded-md   bg-[#5f6368] px-2 py-1 text-xs  font-bold text-white ${className}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
