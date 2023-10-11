import React, { useEffect } from "react";
import "./KurikulumIPBButton.css";

const KurikulumIPBButton = () => {
  useEffect(() => {
    const KurikulumIPBButtonLink = "https://usd.ac.id/lembaga/lpmai/wp-content/uploads/2021/04/Permendikbud-Nomor-3-Tahun-2020.pdf";
    const KurikulumIPBButton = document.querySelector(".kurikulum");
    const KurikulumIPBButtonFunction = () => {
      window.open(KurikulumIPBButtonLink, "_blank");
    };
    KurikulumIPBButton.addEventListener("click", KurikulumIPBButtonFunction);

    return () => {
      KurikulumIPBButton.removeEventListener("click", KurikulumIPBButtonFunction);
    };
  }, []);

  const KurikulumIPBButtonHover = "#75706d";
  const KurikulumIPBButtonText = "Pelajari Lebih Lanjut";
  return (
    <div className="flex justify-center items-center">
      <button
        className={`bg-[#EEEEEE] border-2 w-[196px] p-2 px-4 text-[#083442] border-[#EEEEEE] border-solid rounded-full font-bold kurikulum hover:border-[#EEEEEE] hover:bg-[#b6b6b6] transition-all duration-150`}
      >
        {KurikulumIPBButtonText}   
      </button>
    </div>
  );
};

export default KurikulumIPBButton;
