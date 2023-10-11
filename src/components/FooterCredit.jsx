import React from "react";
import "./FooterCredit.css";

const FooterCredit = () => {
  const FooterCreditComponent = [
    {
      name: "Kurikulum IPB",
      url: "https://panduan.ipb.ac.id/kurikulum-sarjana/",
    },
    { name: "Kurikulum Kampus Merdeka", url: "https://www.kemdikbud.go.id/" },
    { name: "Outcome Based Education", url: "https://www.kemdikbud.go.id/" },
    { name: "Program MBKM", url: "https://www.kemdikbud.go.id/" },
    { name: "Manfaat MBKM", url: "https://www.kemdikbud.go.id/" },
    { name: "Freepik", url: "https://www.freepik.com/" },
  ];

  return (
    <div className="w-full pb-4">
      <div className="text-xl font-bold pb-2">
        <h2>Credit</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
        {FooterCreditComponent.map((item, index) => (
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

export default FooterCredit;
