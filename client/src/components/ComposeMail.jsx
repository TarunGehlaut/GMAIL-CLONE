import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useApi from "../hooks/useAPI";
import { API_URLS } from "../services/api.urls";
import ToolTip from "./ToolTip";


const ComposeMail = ({ setShowMailModel }) => {
  const [data, setData] = useState({});

  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const sentDraftService = useApi(API_URLS.saveDraftEmails);


  const config = {
    Host: "smtp.elasticemail.com",
    Username: import.meta.env.VITE_USER_NAME,
    Password: import.meta.env.VITE_PASSWORD,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();

    const payload = {
      to: data.to,
      from: "tarungerhlaut330@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      attachment: "",
      name: "Tarun Gehlaut",
      starred: false,
      type: "drafts",
    };

    sentDraftService.call(payload);

    if (!sentDraftService.error) {
      setShowMailModel(false);
      setData({});
    } else {
      console.log(sentEmailService.error);
    }
  };

  const sendMailHandler = (e) => {
    e.preventDefault();

    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "tarungerhlaut330@gmail.com",
        Subject: data.subject,
        Body: data.body,
      })
        .then(() => {
          toast.success("Mail sent successfully!");
        })
        .catch((error) => {
          toast.error(`Failed to send mail: ${error}`);
        });
    }

    const payload = {
      to: data.to,
      from: "tarungerhlaut330@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      attachment: "",
      name: "Tarun Gehlaut",
      starred: false,
      type: "sent",
    };

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
      setShowMailModel(false);
      setData({});
    } else {
      console.log(sentEmailService.error);
    }
  };

  const deleteMailHandler = () => {
    setShowMailModel(false);
  };

  const ValueChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value, // here key is variable
    });
  };

  return (
    <>
      <div className="header flex w-full items-center justify-between bg-[#f2f6f6]">
        <p className="whitespace-nowrap text-sm font-bold  leading-5 tracking-normal text-[#041e49]">
          New Message
        </p>
        <ToolTip
          text="Save & Close"
          className="bottom-[calc(100%-50px)] translate-x-[-64%] whitespace-nowrap"
        >
          <span
            onClick={closeComposeMail}
            className="cursor-pointer whitespace-nowrap text-lg font-bold  leading-5 tracking-normal text-[#041e49]"
          >
            <AiOutlineClose />
          </span>
        </ToolTip>
      </div>

      <div className="to-subject mt-5 flex w-full flex-col gap-5">
        <div>
          <span className="mr-5 text-sm">To</span>
          <input
            type="text"
            placeholder="recipient"
            className="border-none text-sm outline-none"
            name="to"
            onChange={ValueChangeHandler}
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="border-none text-sm outline-none"
          name="subject"
          onChange={ValueChangeHandler}
        />
      </div>
      <textarea
        onChange={ValueChangeHandler}
        name="body"
        className="mt-5 h-[calc(100%-200px)] w-full resize-none border-none text-sm outline-none"
      ></textarea>
      <div className="footer mt-5 flex w-full items-center justify-between bg-[#f2f6f6]">
        <button
          onClick={sendMailHandler}
          className="rounded-3xl bg-[#0057d8] px-5 py-1 font-semibold text-white"
        >
          Send
        </button>
        <ToolTip
          text="Discard Craft"
          className="bottom-[calc(100%-50px)] translate-x-[-64%] whitespace-nowrap"
        >
          <span
            onClick={deleteMailHandler}
            className="cursor-pointer whitespace-nowrap text-lg font-bold  leading-5 tracking-normal text-[#041e49]"
          >
            <BiTrash />
          </span>
        </ToolTip>
      </div>
    </>
  );
};

export default ComposeMail;
