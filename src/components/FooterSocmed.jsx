import React from "react";
import "./FooterSocmed.css";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/github";
import "react-social-icons/x";
import "react-social-icons/instagram";
import "react-social-icons/whatsapp";
import "react-social-icons/facebook";

const FooterSocmed = () => {
  const FooterSocmedLink = [
    { icon: "tiktok", link: "https://www.tiktok.com/@oryzagroup" },
    { icon: "x", link: "https://www.twitter.com/@oryza_group" },
    { icon: "instagram", link: "https://www.instagram.com/oryza.group" },
    {
      icon: "facebook",
      link: "https://www.facebook.com/profile.php?id=61551660341963",
    },
  ];
  return (
    <div className="flex flex-col pb-4">
      <div className="text-xl font-bold pb-2">
        <h2>Follow Us</h2>
      </div>
      <div className="flex justify-center md:justify-start">
        {FooterSocmedLink.map((item, index) => (
          <div key={index} className="mr-4 my-2">
            <SocialIcon
              bgColor="#000"
              network={item.icon}
              url={item.link}
              target="_blank"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default FooterSocmed;
