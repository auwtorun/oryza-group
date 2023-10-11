import React from "react";
import "./Footer.css";
import FooterSocmed from "./FooterSocmed";
import FooterContent from "./FooterContent";
import FooterForm from "./FooterForm";
import FooterCredit from "./FooterCredit";
import FooterIPB from "./FooterIPB";

const Footer = () => {
  const FooterTitle = "Oryza Group";
  const FooterCopyright = `\u00A9Copyright 2023 Oryza Group. All Rights Reserved.`;
  return (
    <div className={`footer px-6 md:px-8 pt-8 pb-4`}>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold pb-4">{FooterTitle}</h1>
      </div>
      <div className="grid md:grid-cols-4 pb-4">
        <FooterContent></FooterContent>
        <FooterCredit></FooterCredit>
        <FooterIPB></FooterIPB>
        <FooterSocmed></FooterSocmed>
        {/* <FooterForm></FooterForm> */}
      </div>
      <div className="flex border-t justify-center">
        <h1 className="pt-4 text-sm">{FooterCopyright}</h1>
      </div>
    </div>
  );
};
export default Footer;
