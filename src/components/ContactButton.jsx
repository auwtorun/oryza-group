import React from "react";
import "./ContactButton.css";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/discord";
import "react-social-icons/twitter";
import "react-social-icons/instagram";
import "react-social-icons/whatsapp";

const ContactButton = () => {
  const ContactButtonLink = [
    {
      icon: "discord",
      link: "https://discord.gg/hCzX7pJ7",
    },
    { icon: "x", link: "https://www.twitter.com/group_oryz18591" },
    { icon: "instagram", link: "https://www.instagram.com/oryza.group" },
    { icon: "whatsapp", link: "https://wa.me/6285156612865" },
    { icon: "email", link: "mailto:oryzagroupipb@gmail.com" },
    {
      icon: "facebook",
      link: "https://www.facebook.com/profile.php?id=61551660341963",
    },
    { icon: "telegram", link: "https://t.me/+Is25JkR0FVk1OTg1" },
    { icon: "tiktok", link: "https://www.tiktok.com/@oryzagroup" },
  ];

  const splitContactButtonLink = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const columns = splitContactButtonLink(ContactButtonLink, 4);

  return (
    <div className="flex flex-col justify-center pt-4 w-[100%]">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex justify-center">
          {column.map((item, index) => (
            <div key={index} className="mr-4 my-2">
              <SocialIcon
                className="colorscheme"
                bgColor="#000"
                network={item.icon}
                url={item.link}
                target="_blank"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ContactButton;
