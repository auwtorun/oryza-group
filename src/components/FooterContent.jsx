import React from "react";
import "./FooterContent.css";

const FooterContent = () => {
  const FooterContentComponent = [
    { name: "Kurikulum IPB", url: "" },
    { name: "Kurikulum Kampus Merdeka", url: "" },
    { name: "Outcome Based Education", url: "" },
    { name: "Program MBKM", url: "" },
    { name: "Manfaat MBKM", url: "" },
    { name: "Hubungi Kami", url: "" },
  ];

  return (
    <div className="w-full pb-4">
      <div className="text-xl font-bold pb-2">
        <h2>Content</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
        {FooterContentComponent.map((item, index) => (
          <div key={index} className="">
            <a className="text-sm">{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
