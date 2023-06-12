import { AiOutlineClockCircle } from "react-icons/ai";
import { BiEnvelopeOpen } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { MdOutlineArchive } from "react-icons/md";

export  const emailHoverData = [
  {
    id: crypto.randomUUID(),
    icon: <MdOutlineArchive />,
  },
  {
    id: crypto.randomUUID(),
    icon: <GoTrashcan />,
  },
  {
    id: crypto.randomUUID(),
    icon: <BiEnvelopeOpen />,
  },
  {
    id: crypto.randomUUID(),
    icon: <AiOutlineClockCircle />,
  },
];
