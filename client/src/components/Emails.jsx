import { useContext, useEffect, useRef, useState } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { useParams } from "react-router-dom";

import { Context } from "../context/ContextApi";

import { EMPTY_TABS } from "../constants/Constant";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import Email from "./Email";
import Features from "./Features";
import NoMails from "./NoMails";

const Emails = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(Context);
  const [selectedEmails, setSelectedEmails] = useState([]);

  const [refreshScreen, setRefreshScreen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState("");

  const options = ["All", "None", "Read", "Unread", "Starred", "Unstarred"];

  const dropdownRef = useRef(null);

  const { type } = useParams();

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailsServices = useApi(API_URLS.deleteEmail);
  const moveEmailsToArchiveService = useApi(API_URLS.moveEmailsToArchive);

  const reloadEmails = () => {
    getEmailsService.call({}, type);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked && selectedEmails.length === 0) {
      const emails = getEmailsService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else if (!isChecked) {
      setSelectedEmails([]);
    }
  };

  const archiveSelectedEmails = async (singleMailId) => {
    if (type === "archive") {
      //
    } else {
      await moveEmailsToArchiveService.call(
        selectedEmails.length > 0 ? selectedEmails : [singleMailId]
      );
    }
    setSelectedEmails([]);
    setRefreshScreen((prevState) => !prevState);
  };

  const deleteSelectedEmails = async (singleMailId) => {
    if (type === "trash") {
      await deleteEmailsServices.call(
        selectedEmails.length > 0 ? selectedEmails : [singleMailId]
      );
    } else {
      await moveEmailsToBinService.call(
        selectedEmails.length > 0 ? selectedEmails : [singleMailId]
      );
    }

    setSelectedEmails([]);
    setRefreshScreen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    reloadEmails();
  }, [type, refreshScreen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isSideBarOpen
            ? "ml-[260px] w-[calc(100%-260px)] "
            : "md:ml-[80px]  md:w-[calc(100%-80px)]"
        } z-100    bg-white  `}
      >
        <div className="relative mr-4   flex w-full items-center justify-between whitespace-nowrap  border-none bg-none px-3 py-6">
          <div className="flex h-5 w-full items-center justify-between">
            <div className="float-left  flex items-center   whitespace-nowrap">
              <div className="input  relative flex items-center space-x-1 rounded-lg p-2 hover:bg-[rgba(32,33,36,0.1)]">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <div className="">
                  <div
                    onClick={toggleDropdown}
                    className=" cursor-pointer text-gray-500"
                  >
                    <MdArrowDropDown className="text-2xl" />
                  </div>
                  {isDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 top-12 z-[1000] max-w-max rounded-md border border-gray-300 bg-white  shadow-md"
                    >
                      {options.map((option) => (
                        <div
                          key={option}
                          className="cursor-pointer px-16 py-2 text-sm hover:bg-gray-100"
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {selectedEmails.length > 0 ? (
                <Features
                  deleteSelectedEmails={deleteSelectedEmails}
                  archiveSelectedEmails={archiveSelectedEmails}
                />
              ) : (
                <>
                  <div
                    onClick={() => reloadEmails()}
                    className="ml-3 flex h-8  w-8 cursor-pointer items-center justify-center rounded-full hover:bg-[rgba(32,33,36,0.1)]"
                  >
                    <IoMdRefresh className="text-xl text-gray-500" />
                  </div>
                </>
              )}
            </div>
            <div className="float-right ml-auto flex h-5 whitespace-nowrap  text-right "></div>
          </div>
        </div>
        {getEmailsService?.response?.length === 0 ? (
          <NoMails message={EMPTY_TABS[type]} />
        ) : (
          <>
            <table
              aria-readonly="true"
              className="block h-[calc(100vh-156px)]  w-full table-fixed border-collapse border-spacing-0 overflow-y-auto  p-0"
            >
              <tbody className="block">
                {getEmailsService?.response?.map((email) => {
                  return (
                    <Email
                      key={email._id}
                      email={email}
                      selectedEmails={selectedEmails}
                      setRefreshScreen={setRefreshScreen}
                      setSelectedEmails={setSelectedEmails}
                      deleteSelectedEmails={deleteSelectedEmails}
                      archiveSelectedEmails={archiveSelectedEmails}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="w-full bg-[#F6F8FC] py-3"></div>
          </>
        )}
      </div>

      <div
        onClick={() => setIsSideBarOpen(false)}
        className={`overlay fixed  bottom-0 left-0 top-0 ml-[260px] w-[calc(100%-260px)]  overflow-hidden bg-black md:hidden     ${
          isSideBarOpen
            ? "visible cursor-pointer opacity-50"
            : "invisible opacity-100"
        }`}
      ></div>
    </>
  );
};

export default Emails;
