import React, { useEffect } from "react";
import "./KurikulumMerdekaButton.css";

const KurikulumMerdekaButton = () => {
  useEffect(() => {
    const KurikulumMerdekaButton = document.querySelector(".kurikulummerdeka");
    const KurikulumMerdekaButtonFunction = () => {
      window.open("https://ditpsd.kemdikbud.go.id/hal/kurikulum-merdeka");
    };
    KurikulumMerdekaButton.addEventListener(
      "click",
      KurikulumMerdekaButtonFunction
    );

    return () => {
      KurikulumMerdekaButton.removeEventListener(
        "click",
        KurikulumMerdekaButtonFunction
      );
    };
  }, []);

  const KurikulumMerdekaButtonHover = "#75706d";
  const KurikulumMerdekaButtonText = "Pelajari Lebih Lanjut";
  return (
    <div className="flex justify-center items-center">
      <button
        className={`bg-[#EEEEEE] border-2 w-[196px] p-2 px-4 text-[#083442] border-[#EEEEEE] border-solid rounded-full font-bold kurikulummerdeka hover:border-[#EEEEEE] hover:bg-[#b6b6b6] transition-all duration-150`}
      >
        {KurikulumMerdekaButtonText}
      </button>
    </div>
  );
};

export default KurikulumMerdekaButton;
