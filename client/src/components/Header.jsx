import { useContext, useEffect, useState } from "react";

import PFP from "../assets/anime-aesthetic-boy-pfp-1.jpg";
import Logo from "../assets/logo_gmail.png";

import {
  AiOutlineQuestionCircle,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";

import { Context } from "../context/ContextApi";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import ToolTip from "./ToolTip";

const Header = () => {
  const { setIsSideBarOpen } = useContext(Context);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const getSearchEmailsService = useApi(API_URLS.searchEmails);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = async (e) => {
    const query = e.target.value.trim();
    if (query.length >= 0) {
      setSearchQuery(query);
      setIsSearching(true);
      // await getSearchEmailsService.call({ query: searchQuery }, "");
    } else {
      setIsSearching(false);
    }
  };

  // useEffect(() => {
  //   console.log(getSearchEmailsService.response);
  // }, [searchQuery]);

  return (
    <header className="sticky left-0 right-0   top-0  w-full      bg-[#F6F8FC] ">
      <div className="relative flex w-full min-w-min justify-between p-2">
        <div className="flex h-[48px] select-none  items-center whitespace-nowrap   align-middle md:pr-[30px]">
          <div
            onClick={() => setIsSideBarOpen((prev) => !prev)}
            className="  flex-none cursor-pointer select-none  overflow-hidden whitespace-nowrap  rounded-full px-1 align-middle md:mx-1 md:px-3"
          >
            <FaBars className="fill-current text-lg text-[#333] opacity-100 md:text-xl" />
          </div>

          <Link to="/" className=" hidden select-none md:block">
            <img
              src={Logo}
              alt="Flash Mail"
              className=" w-28 overflow-clip  align-middle "
            />
          </Link>
        </div>
        <div className="flex h-[48px]  select-none items-center whitespace-nowrap align-middle">
          <form onSubmit={handleSubmit} className=" relative ">
            <div className="group  flex items-center  ">
              <div className="flex h-8 overflow-hidden rounded-3xl border-none bg-[#EAF1FB] pl-1 group-focus-within:bg-white group-focus-within:shadow-[0_2px_8px_rgba(0,0,0,0.3)]  md:h-10 md:pl-0  ">
                <div className="flex w-5  items-center justify-center md:w-10">
                  <AiOutlineSearch className="text-2xl text-[#333]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search mail"
                  className={`w-52  bg-transparent  pl-2  text-[#333] outline-none placeholder:text-[#333] focus:bg-transparent md:w-64 md:pl-0 lg:w-[600px]`}
                />
                {isSearching ? (
                  <div
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearching(false);
                    }}
                    className="flex w-5 cursor-pointer   items-center justify-center md:w-10"
                  >
                    <CgClose className="text-2xl text-[#5f6368]" />
                  </div>
                ) : (
                  <div className="hidden w-5 cursor-pointer items-center   justify-center md:flex md:w-10">
                    <GoSettings className="rotate-90 text-2xl text-[#333] " />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="flex   h-[48px] select-none items-center whitespace-nowrap align-middle md:mr-5">
          <div className="flex items-center">
            <div className="hidden h-10 w-10 items-center justify-center rounded-full md:flex ">
              <ToolTip
                text="Support"
                className="bottom-[calc(100%-64px)] translate-x-[-25%]"
              >
                <AiOutlineQuestionCircle className="cursor-pointer text-2xl text-[#333]" />
              </ToolTip>
            </div>
            <div className="ml-2 hidden h-10 w-10 items-center justify-center rounded-full md:flex ">
              <ToolTip
                text="Settings"
                className="bottom-[calc(100%-64px)] translate-x-[-25%]"
              >
                <AiOutlineSetting className="cursor-pointer text-2xl text-[#333]" />
              </ToolTip>
            </div>
            <div className="ml-2 hidden h-10 w-10 items-center justify-center rounded-full md:flex ">
              <ToolTip
                text="Google Apps"
                className="bottom-[calc(100%-64px)] translate-x-[-25%]"
              >
                <CgMenuGridO className="cursor-pointer text-2xl text-[#333]" />
              </ToolTip>
            </div>

            <ToolTip
              text="Google Account"
              className="bottom-[calc(100%-64px)] translate-x-[-50%]"
            >
              <div className=" h-6  w-6 cursor-pointer  overflow-hidden rounded-full md:ml-5  md:h-8 md:w-8">
                <img src={PFP} alt="user" />
              </div>
            </ToolTip>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
