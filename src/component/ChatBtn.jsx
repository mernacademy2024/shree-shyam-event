import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
const ChatBtn = () => {
  const handleClick = () => {
    // WhatsApp URL scheme
    const phoneNumber = "+918770800807"; // Replace with the recipient's phone number
    const message = "Hello! Can i get some details about your service ?"; // Replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp link in a new tab
    window.open(url, "_blank");
  };

  return (
    <div
      className="p-4 h-20 w-20 rounded-full fixed bottom-8 lg:bottom-10 lg:right-10 cursor-pointer  right-5 flex items-center justify-center   "
      onClick={handleClick}
    >
      <RiWhatsappFill size={60} className="text-green-500 " color="" />
    </div>
  );
};

export default ChatBtn;
