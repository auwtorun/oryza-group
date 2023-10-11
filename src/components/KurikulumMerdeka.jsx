import React from "react";
import "./KurikulumMerdeka.css";
import KurikulumMerdekaButton from "./KurikulumMerdekaButton";
import Photo from '/images/7610633.jpg'; 

const KurikulumMerdeka = () => {
  const KurikulumMerdekaText =
    "Kurikulum Merdeka adalah kurikulum dengan pembelajaran intrakurikuler yang beragam di mana konten akan lebih optimal agar peserta didik memiliki cukup waktu untuk mendalami konsep dan menguatkan kompetensi. Guru memiliki keleluasaan untuk memilih berbagai perangkat ajar sehingga pembelajaran dapat disesuaikan dengan kebutuhan belajar dan minat peserta didik.";
  const KurikulumMerdekaTitle = "Apa Itu Kurikulum Merdeka?";
  return (
    <div className="w-full h-full mb-10">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{KurikulumMerdekaTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 flex justify-center">
            <img
              src={Photo}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{KurikulumMerdekaText}</p>
            <KurikulumMerdekaButton></KurikulumMerdekaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KurikulumMerdeka;
