import React, { useEffect } from "react";
import "./ContactPage.css";
import Contact from "../components/Contact";
import ContactHeader from "../components/ContactHeader";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactHeader></ContactHeader>
      <div className="">
        <div className={`homepage p-5 w-full`}>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
