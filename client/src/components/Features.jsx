import { AiOutlineClockCircle } from "react-icons/ai";
import { BiEnvelopeOpen } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { MdOutlineArchive } from "react-icons/md";
import ToolTip from "./ToolTip";

const Features = ({ deleteSelectedEmails, archiveSelectedEmails }) => {
  return (
    <ul className=" flex" id=":2g" role="toolbar">
      <li
        onClick={() => archiveSelectedEmails()}
        className="  group relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
        data-tooltip="Archive"
      >
        <ToolTip
          text="Archive"
          className="bottom-[calc(100%-50px)] translate-x-[-25%]"
        >
          <MdOutlineArchive className="text-xl opacity-30 group-hover:opacity-100" />
        </ToolTip>
      </li>
      <li
        onClick={deleteSelectedEmails}
        className="  group relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
        data-tooltip="Trash"
      >
        <ToolTip
          text="Trash"
          className="bottom-[calc(100%-50px)] translate-x-[-25%]"
        >
          <GoTrashcan className="text-xl opacity-30 group-hover:opacity-100" />
        </ToolTip>
      </li>
      <li
        className="  group relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
        data-tooltip="Mark as read"
      >
        <ToolTip
          text="Mark as Read"
          className="bottom-[calc(100%-50px)] translate-x-[-25%]"
        >
          <BiEnvelopeOpen className="text-xl opacity-30 group-hover:opacity-100" />
        </ToolTip>
      </li>
      <li
        className="  group  relative flex items-center justify-center  whitespace-nowrap        border-none  pl-4 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]"
        data-tooltip=""
      >
        <ToolTip
          text="Snooze"
          className="bottom-[calc(100%-50px)] translate-x-[-25%]"
        >
          <AiOutlineClockCircle className="text-xl opacity-30 group-hover:opacity-100" />
        </ToolTip>
      </li>
    </ul>
  );
};

export default Features;
