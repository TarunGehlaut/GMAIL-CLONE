import { useNavigate } from "react-router-dom";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { AiOutlineClockCircle } from "react-icons/ai";
import { BiEnvelope, BiEnvelopeOpen } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { MdOutlineArchive } from "react-icons/md";

import { routes } from "../routes/route";

import { Context } from "../context/ContextApi";

import dayjs from "dayjs";
import "dayjs/locale";
import { useContext } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const Email = ({
  email,
  selectedEmails,
  setSelectedEmails,
  deleteSelectedEmails,
  archiveSelectedEmails,
}) => {
  const navigate = useNavigate();
  const { setRefreshScreen } = useContext(Context);

  function timeDelays() {
    const now = dayjs();
    // check if it's today
    const isToday = now.isSame(email?.date, "day");

    let formattedTime;

    if (isToday) {
      formattedTime = dayjs(email?.date).format("h:mm A");
    } else {
      formattedTime = dayjs(email?.date).format("D MMM");
    }

    return formattedTime;
  }

  const toggleStarredService = useApi(API_URLS.toggleStarredEmail);
  const markAsReadService = useApi(API_URLS.markAsRead);

  const toggleStarredMail = () => {
    try {
      toggleStarredService.call({
        id: email?._id,
        value: !email?.starred,
      });

      setRefreshScreen((prevState) => !prevState);
    } catch (error) {
      console.log(error);
      // Handle the error if necessary
    }
  };

  const markReadSelectedMail = () => {
    try {
      markAsReadService.call({ id: email?._id, value: !email?.read });
      setRefreshScreen((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  const onSelectedValueChange = () => {
    if (selectedEmails.includes(email?._id)) {
      setSelectedEmails((prevSelectedEmails) =>
        prevSelectedEmails.filter((id) => id !== email?._id)
      );
    } else {
      setSelectedEmails((prevSelectedEmails) => [
        ...prevSelectedEmails,
        email?._id,
      ]);
    }
  };

  const handleArchive = () => {
    archiveSelectedEmails(email?._id);
  };

  const handleDelete = () => {
    deleteSelectedEmails(email?._id);
  };

  const handleViewEmail = () => {
    markAsReadService.call({ id: email?._id, value: true });
    navigate(routes.view.path, { state: { email: email } });
  };

  return (
    <tr
      className={`drag-none group  flex  cursor-pointer select-none items-center overflow-hidden border-none py-1 pl-[2px] text-[#202124] shadow-[inset_0px_-1px_0_0_rgba(100,121,143,0.122)] hover:z-20 hover:shadow-shadow-1 md:py-2 ${
        !email?.read ? "bg-[#f2f6fc]" : ""
      }`}
    >
      <td className=" flex items-center bg-[none]  before:absolute before:z-[-10]  before:h-8 before:w-8 before:justify-start  before:rounded-full   before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)] md:before:h-10 md:before:w-10">
        <div className="block h-4 w-4 opacity-0 group-hover:opacity-30 ">
          <img
            src="https://www.gstatic.com/images/icons/material/system_gm/1x/drag_indicator_black_20dp.png"
            alt=""
            className="h-full w-full object-cover "
          />
        </div>
        <input
          type="checkbox"
          id="myCheckbox"
          checked={selectedEmails.includes(email?._id)}
          onChange={() => onSelectedValueChange()}
          className=" h-4 w-4 cursor-pointer text-blue-500 opacity-30 checked:opacity-100 group-hover:opacity-100"
        />
      </td>

      <td
        onClick={() => toggleStarredMail()}
        className="  group relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
      >
        {email?.starred ? (
          <AiFillStar className="fill-[#F3C84B] text-xl" />
        ) : (
          <AiOutlineStar className="text-xl opacity-30 group-hover:opacity-100" />
        )}
      </td>

      <td
        onClick={handleViewEmail}
        className=" group relative ml-3    mr-8  h-5 max-w-[100px]  flex-[0_0_auto]    overflow-hidden border-none outline-none     md:max-w-[168px]"
      >
        <div
          className={`overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-5 ${
            !email?.read ? "font-bold" : ""
          }`}
        >
          {email?.type === "drafts" && (
            <span className="mr-1 font-normal text-[#dd4b39]">Draft</span>
          )}
          {email?.name}
        </div>
      </td>
      <td
        onClick={handleViewEmail}
        className="mr-[10px]  flex h-auto     min-w-0 flex-auto flex-wrap overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-5 tracking-normal"
      >
        <div className="flex-auto whitespace-nowrap">
          <div className="flex items-center  overflow-hidden whitespace-nowrap">
            <div className="inline-flex flex-shrink items-baseline overflow-hidden whitespace-nowrap leading-5">
              <span
                className={`overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-5 ${
                  !email?.read ? "font-bold" : ""
                }`}
              >
                <span className="">{email?.subject || "(No Subject)"}</span>
              </span>
              {email?.body && (
                <div className="flex-1  overflow-hidden text-ellipsis  whitespace-nowrap text-left text-[#5f6368]">
                  <span className="float-left text-[#5f6368] ">
                    &nbsp;-&nbsp;
                  </span>
                  <span className="overflow-hidden text-ellipsis  whitespace-nowrap">
                    {email?.body}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </td>

      <td
        onClick={handleViewEmail}
        className="hidden border-none pr-4 align-middle leading-5 md:flex-[0_0_auto]"
        role="gridcell"
        tabIndex="-1"
      ></td>

      <td
        onClick={handleViewEmail}
        className="max-w-5  ml-4  mr-2   flex flex-[0_0_auto] items-center  justify-center        whitespace-nowrap  border-none align-middle  "
      >
        &nbsp;
      </td>

      <td
        onClick={handleViewEmail}
        className="ml-0 mr-8 flex flex-[0_0_auto]  items-center  justify-end border-none text-right text-sm leading-5 tracking-normal text-[#5f6368]  "
        role="gridcell"
        tabIndex="-1"
      >
        <span
          className={`text-[#5f6368]  ${
            !email?.read ? "font-bold text-[#202124]" : ""
          }`}
        >
          <span>{timeDelays()}</span>
        </span>
      </td>

      <td className="mr-10 hidden   flex-[0_0_auto] items-center whitespace-nowrap p-0 align-middle text-sm leading-5 outline-none group-hover:flex">
        <ul className=" flex" id=":2g" role="toolbar">
          <li
            onClick={handleArchive}
            className="  group relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip="Archive"
          >
            <MdOutlineArchive className="text-xl opacity-30 group-hover:opacity-100" />
          </li>
          <li
            onClick={handleDelete}
            className="  group relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip="Trash"
          >
            <GoTrashcan className="text-xl opacity-30 group-hover:opacity-100" />
          </li>
          <li
            onClick={markReadSelectedMail}
            className="  group relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip="Mark as read"
          >
            {email?.read ? (
              <BiEnvelope className="text-xl opacity-30 group-hover:opacity-100" />
            ) : (
              <BiEnvelopeOpen className="text-xl opacity-30 group-hover:opacity-100" />
            )}
          </li>
          <li
            className="  group  relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
            data-tooltip=""
          >
            <AiOutlineClockCircle className="text-xl opacity-30 group-hover:opacity-100" />
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default Email;
