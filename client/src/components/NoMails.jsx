const NoMails = ({ message }) => {
  return (
    <div className="mx-auto max-w-[600px] text-center">
      <h2 className="font-semibold text-[#1f1f1f]">{message.heading}</h2>
      <p className="mt-1 text-sm text-[#5e5e5e]">{message.subHeading}</p>
    </div>
  );
};

export default NoMails;
