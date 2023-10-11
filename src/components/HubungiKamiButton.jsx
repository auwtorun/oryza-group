import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HubungiKamiButton.css";

const HubungiKamiButton = () => {
  const HubungiKamiButtonLink = "/ContactPage";

  return (
    <div className="flex justify-center items-center">
      <Link
        to={HubungiKamiButtonLink}
        className="bg-[#EEEEEE] flex justify-center items-center w-[196px] border-2 p-2 px-4 text-[#083442] border-[#EEEEEE] border-solid rounded-full font-bold my-button hover:border-[#EEEEEE] hover:bg-[#b6b6b6] transition-all duration-150"
      >
        <button
          className={``}
        >
          Hubungi Kami
        </button>
      </Link>
    </div>
  );
};

export default HubungiKamiButton;
