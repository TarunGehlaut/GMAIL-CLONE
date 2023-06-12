import { useContext, useState } from "react";
import { BiPencil } from "react-icons/bi";

import { NavLink } from "react-router-dom";

import routesData from "../config/SidebarConfig";
import { Context } from "../context/ContextApi";

import { AnimatePresence, motion } from "framer-motion";
import ComposeMail from "./ComposeMail";
import MyModel from "./MyModel";

import { routes } from "../routes/route";

const SideBar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(Context);
  const [showMailModel, setShowMailModel] = useState(false);

  const toggleModel = () => setShowMailModel(false);

  const textAnimation = {
    hidden: {
      width: 0,

      opacity: 0,
      transition: {
        duration: "0.2",
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: "0.2",
      },
    },
  };

  return (
    <div className={`${isSideBarOpen ? "block" : "hidden"}  z-[5000] md:block`}>
      <motion.div
        animate={{ width: isSideBarOpen ? 250 : 72 }}
        onMouseEnter={() => setIsSideBarOpen(true)}
        className="fixed left-0  h-[calc(100vh-64px)] overflow-hidden   bg-[#F6F8FC] pt-5 text-[#001d35] "
      >
        <div
          onClick={() => setShowMailModel(true)}
          className={`compose mx-2 my-[5px] flex  h-14  max-w-[132px]  cursor-pointer  items-center rounded-xl  bg-[#c2e7ff]  text-[#001d35]  
          hover:shadow-[0_2px_6px_rgba(0,0,0,0.3)]
            
          `}
        >
          <div className="search-icon w-14 px-4">
            <BiPencil
              className={`text-2xl  transition duration-200 
                
              `}
            />
          </div>
          <AnimatePresence>
            {isSideBarOpen && (
              <motion.div
                variants={textAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="ml-[-8px] whitespace-nowrap font-medium "
              >
                Compose
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <section className="routes mt-3  ">
          {routesData.map((route) => {
            return (
              <NavLink
                key={route.name}
                to={`${routes.emails.path}/${route.name.toLowerCase()}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? " "
                    : isActive
                    ? "relative flex h-8 w-[95%] items-center whitespace-nowrap rounded-r-3xl  bg-[#D3E3FD] pl-5 pr-7 font-semibold   text-[#001d35] "
                    : "  relative   flex h-8 w-[95%] items-center  whitespace-nowrap rounded-r-3xl pl-5  pr-7 hover:bg-[#eceff0] "
                }
              >
                <div className="icon relative mr-[18px] flex flex-shrink-0 items-center justify-start text-xl">
                  {route.icon}
                  {!isSideBarOpen && (
                    <span className="absolute right-[-6px] top-[-3px] h-2 w-2 rounded-full bg-[#C5221F] "></span>
                  )}
                </div>

                <AnimatePresence>
                  {isSideBarOpen && (
                    <motion.div
                      variants={textAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex w-full  flex-1 items-center justify-between  overflow-hidden text-ellipsis whitespace-nowrap leading-5 text-[#202124] "
                    >
                      <span className="mr-auto  inline-block overflow-hidden text-ellipsis whitespace-nowrap align-middle    text-sm">
                        {route.name}
                      </span>
                      <div className="ml-auto block select-none pl-4 text-xs tracking-normal text-[#5f6368] ">
                        7,970
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      {showMailModel && (
        <MyModel toggleModel={toggleModel}>
          <ComposeMail setShowMailModel={setShowMailModel} />
        </MyModel>
      )}
      {/* <main className="p-5">{children}</main> */}
    </div>
  );
};

export default SideBar;
