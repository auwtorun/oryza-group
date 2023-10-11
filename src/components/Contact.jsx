import React from "react";
import "./Contact.css";
import ContactButton from "./ContactButton";

const Contact = () => {
  const ContactImage = "/images/HubungiKami.jpg";
  const ContactText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta? Esse inventore ex blanditiis quis laboriosam accusamus delectus aliquid laudantium a ipsam iste, animi asperiores";
  const ContactTitle = "Hubungi Kami";
  return (
    <div className="w-full h-full mb-20">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{ContactTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 flex justify-center">
            <img
              src={ContactImage}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] rounded-2xl"
            />
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{ContactText}</p>
            <ContactButton></ContactButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
