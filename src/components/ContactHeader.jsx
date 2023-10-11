import React from "react";
import "./ContactHeader.css";

const ContactHeader = () => {
  const ContactHeaderImage = "/images/ContactHeader.jpg";
  const ContactHeaderTitle = "Butuh Bantuan?"
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${ContactHeaderImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-8 text-white text-2xl md:text-4xl font-bold">
        <h1>{ContactHeaderTitle}</h1>
      </div>
    </div>
  );
};

export default ContactHeader;
