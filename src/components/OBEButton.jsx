import React, { useEffect } from "react";
import "./OBEButton.css";

const OBEButton = () => {
  useEffect(() => {
    const OBEButtonLink = "http://repository.starki.id/id/eprint/649/1/PENERAPAN%20OUTCOME-BASED%20EDUCATION%20DAN%20PERMASALAHANNYA.pdf";
    const OBEButton = document.querySelector(".obebutton");
    const OBEButtonFunction = () => {
      window.open(OBEButtonLink, "_blank");
    };
    OBEButton.addEventListener("click", OBEButtonFunction);

    return () => {
      OBEButton.removeEventListener("click", OBEButtonFunction);
    };
  }, []);

  const OBEButtonHover = "#75706d";
  const OBEButtonText = "Pelajari Lebih Lanjut";
  return (
    <div className="flex justify-center items-center">
      <button
        className={`bg-[#EEEEEE] border-2 w-[196px] p-2 px-4 text-[#083442] border-[#EEEEEE] border-solid rounded-full font-bold obebutton hover:border-[#EEEEEE] hover:bg-[#b6b6b6] transition-all duration-150`}
      >
        {OBEButtonText}   
      </button>
    </div>
  );
};

export default OBEButton;
