import {
  AiOutlineFile,
  AiOutlineMail,
  AiOutlineSend,
  AiOutlineStar,
} from "react-icons/ai";
import { BiArchiveIn, BiTrash } from "react-icons/bi";
import { HiInbox } from "react-icons/hi";

const routesData = [
  {
    name: "Inbox",
    icon: <HiInbox />,
  },
  {
    name: "Starred",
    icon: <AiOutlineStar />,
  },

  {
    name: "Sent",
    icon: <AiOutlineSend />,
  },
  {
    name: "Drafts",
    icon: <AiOutlineFile />,
  },
  {
    name: "Archive",
    icon: <BiArchiveIn />,
  },
  {
    name: "Trash",
    icon: <BiTrash />,
  },
  {
    name: "All Mail",
    icon: <AiOutlineMail />,
  },
];

export default routesData;
