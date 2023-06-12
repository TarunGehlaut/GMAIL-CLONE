import { useContext, useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineArrowLeft,
  AiOutlineClockCircle,
  AiOutlineStar,
} from "react-icons/ai";

import { BiEnvelopeOpen } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { MdOutlineArchive } from "react-icons/md";
import { TbCornerUpLeft, TbCornerUpRight } from "react-icons/tb";

import { format, formatDistanceToNow, isToday, parseISO } from "date-fns";

import { useLocation } from "react-router-dom";
import { Context } from "../context/ContextApi";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import ToolTip from "./ToolTip";

const ViewEmail = () => {
  const { isSideBarOpen } = useContext(Context);
  const [showDetails, setShowDetails] = useState(false);

  const {
    state: { email: email },
  } = useLocation();

  function formatDate(dateString) {
    const date = parseISO(dateString);
    if (isToday(date)) {
      // Format for today
      return (
        format(date, "h:mm a") +
        " (" +
        formatDistanceToNow(date, { addSuffix: true }) +
        ")"
      );
    } else {
      // Format for other dates
      const formattedDate = format(date, "EEE, MMM d, h:mm aa");
      const timeDifference = formatDistanceToNow(date, { addSuffix: true });

      return `${formattedDate} (${timeDifference})`;
    }
  }

  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = async () => {
    try {
      await moveEmailsToBinService.call([email?._id]);
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        isSideBarOpen
          ? "ml-[260px] w-[calc(100%-260px)]"
          : "ml-[80px]  w-[calc(100%-80px)]"
      } z-100 bg-white`}
    >
      {" "}
      {/* First Part */}
      <div className="relative mr-4 flex  w-full items-center justify-between whitespace-nowrap border-none    bg-none pb-3 pl-4  pr-6 pt-6">
        <ul className=" flex" id=":2g" role="toolbar">
          <li
            onClick={() => window.history.back()}
            className="  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none  align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
          >
            <ToolTip
              text="Back"
              className="bottom-[calc(100%-50px)] translate-x-[-25%]"
            >
              <AiOutlineArrowLeft className="text-lg" />
            </ToolTip>
          </li>

          <li
            className="  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip="Archive"
          >
            <ToolTip
              text="Archive"
              className="bottom-[calc(100%-50px)] translate-x-[-25%]"
            >
              <MdOutlineArchive className="text-lg" />
            </ToolTip>
          </li>

          <li
            onClick={() => deleteEmail()}
            className="  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip="Trash"
          >
            <ToolTip
              text="Trash"
              className="bottom-[calc(100%-50px)] translate-x-[-25%]"
            >
              <GoTrashcan className="text-lg" />
            </ToolTip>
          </li>

          <li
            className="  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip="Mark as read"
          >
            <ToolTip
              text="Mark as Read"
              className="bottom-[calc(100%-50px)] translate-x-[-25%]"
            >
              <BiEnvelopeOpen className="text-lg" />
            </ToolTip>
          </li>
          <li
            className="  group  relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip=""
          >
            <ToolTip
              text="Snooze"
              className="bottom-[calc(100%-50px)] translate-x-[-25%]"
            >
              <AiOutlineClockCircle className="text-lg" />
            </ToolTip>
          </li>
        </ul>
      </div>
      {/* Middle Part Email */}
      <div className="  h-[calc(100vh-132px)]   w-full   items-start overflow-y-auto ">
        {/* Subject */}
        <div className="flex items-center pb-2 pl-[72px] pr-0 pt-5 ">
          <h2 className="m-0 inline break-words p-0 pr-[10px] text-[1.375rem] font-normal text-[#1f1f1f] outline-none">
            {email?.subject}
          </h2>
          <span className="   rounded bg-[#ddd] px-1 align-top text-xs text-[#666]">
            Inbox
          </span>
        </div>

        {/* mail box */}
        <div className="py-3 pl-4  pr-6">
          {/* Sender's Details */}
          <div className="flex items-start justify-between ">
            {/* left */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10  ">
                <img
                  src="https://lh3.googleusercontent.com/a/default-user=s40-p"
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="relative flex flex-col justify-between ">
                <h3>
                  <span className="whitespace-nowrap text-sm font-bold leading-5 text-[#1f1f1f]">
                    {email?.name}
                  </span>
                  <span className=" whitespace-nowrap text-xs font-normal leading-5 text-[#5e5e5e]">
                    {`<${email?.from}>`}
                  </span>
                </h3>
                <div className="flex items-center gap-[3px] whitespace-nowrap text-xs font-normal leading-5 text-[#5e5e5e]">
                  To me
                  <span
                    onClick={() => setShowDetails((prev) => !prev)}
                    className=" cursor-pointer  active:rounded-full active:bg-[#ccc] active:p-[2px]"
                  >
                    <AiFillCaretDown />
                  </span>
                </div>
                {showDetails && (
                  <div className="absolute left-6 top-[44px] z-[1000] max-w-max rounded-md border border-gray-300 bg-white p-4  shadow-md">
                    <table>
                      <tbody>
                        <tr className=" ">
                          <td className="text-end align-top">
                            <span className=" whitespace-nowrap text-sm font-normal leading-5 text-[#5e5e5e]">
                              from:
                            </span>
                          </td>
                          <td className="pl-3 align-top">
                            <span className=" whitespace-normal text-sm font-normal leading-5 text-[#333]">
                              <span className="whitespace-nowrap text-sm font-bold leading-5 text-[#1f1f1f]">
                                {email?.name}
                              </span>
                              {`<${email?.from}>`}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end align-top">
                            <span className="whitespace-normal text-sm font-normal leading-5 text-[#5e5e5e]">
                              to:
                            </span>
                          </td>
                          <td className="pl-3 align-top">
                            <span className=" whitespace-normal text-sm font-normal leading-5 text-[#333]">
                              {email?.to}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end align-top">
                            <span className=" whitespace-normal text-sm font-normal leading-5 text-[#5e5e5e]">
                              date:
                            </span>
                          </td>
                          <td className="pl-3 align-top">
                            <span className=" whitespace-normal text-sm font-normal leading-5 text-[#333]">
                              {formatDate(email?.date)}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end align-top">
                            <span className=" whitespace-normal text-sm font-normal leading-5 text-[#5e5e5e]">
                              subject:
                            </span>
                          </td>
                          <td className="pl-3 align-top">
                            <span className=" whitespace-normal text-sm font-normal leading-5 text-[#333]">
                              {email?.subject || "(No Subject)"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Right */}

            <div className="flex items-center gap-5">
              <span className=" whitespace-nowrap text-xs font-normal leading-5 text-[#5e5e5e]">
                {formatDate(email?.date)}
              </span>
              <span className="cursor-pointer">
                <ToolTip
                  text="Not Starred"
                  className="bottom-[calc(100%-64px)] translate-x-[-25%]"
                >
                  <AiOutlineStar className="text-xl " />
                </ToolTip>
              </span>

              <span className="cursor-pointer">
                <ToolTip
                  text="Reply"
                  className="bottom-[calc(100%-50px)] translate-x-[-50%]"
                >
                  <TbCornerUpLeft className="text-xl " />
                </ToolTip>
              </span>
            </div>
          </div>

          {/* Actual Mail */}
          <div className="ml-[50px] mt-3 whitespace-pre-wrap text-sm text-[#222]">
            {email?.body}
          </div>

          <div className="p=0 ml-[50px] mt-10 flex h-auto items-center gap-2 leading-5">
            <span className="mr-2 inline-flex h-8 min-w-[104px] cursor-pointer select-none items-center justify-center gap-1 rounded-[18px]  border border-[#747775] px-4 pl-3 text-sm font-medium text-[#444746]  shadow-none outline-none  hover:bg-[#2021240f]">
              <TbCornerUpLeft className="text-xl " />
              Reply
            </span>
            <span className="mr-2 inline-flex h-8 min-w-[104px] cursor-pointer select-none items-center justify-center gap-1 rounded-[18px]  border border-[#747775] px-4 pl-3 text-sm font-medium text-[#444746]  shadow-none outline-none  hover:bg-[#2021240f]">
              <TbCornerUpRight className="text-xl " />
              Forward
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmail;
