import React from "react";
import "./FooterIPB.css";

const FooterIPB = () => {
  const FooterIPBComponent = [
    { name: "Website IPB", url: "https://ipb.ac.id/" },
    { name: "About IPB", url: "https://ipb.ac.id/page/glance/" },
    {
      name: "Study Program IPB",
      url: "https://ipb.ac.id/page/parents/study-program/",
    },
    { name: "Facilities IPB", url: "https://ipb.ac.id/page/facilities/" },
    { name: "Achievements IPB", url: "https://ipb.ac.id/page/achievement/" },
    { name: "Contact IPB", url: "https://ipb.ac.id/page/contact-us/" },
  ];

  return (
    <div className="w-full pb-4">
      <div className="text-xl font-bold pb-2">
        <h2>IPB</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
        {FooterIPBComponent.map((item, index) => (
          <div key={index} className="">
            <a href={item.url} target="_blank" className="text-sm">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterIPB;
