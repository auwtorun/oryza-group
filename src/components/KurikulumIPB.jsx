import React from "react";
import "./KurikulumIPB.css";
import KurikulumIPBButton from "./KurikulumIPBButton";

const KurikulumIPB = () => {
  const KurikulumIPBImage = "/images/KurikulumIPB.jpg";
  const KurikulumIPBText =
    "Kurikulum adalah seperangkat rencana dan pengaturan mengenai tujuan, isi, dan bahan pelajaran serta cara yang digunakan sebagai pedoman penyelenggaraan kegiatan pembelajaran untuk mencapai tujuan Pendidikan Tinggi (Permendikbud No. 3 tahun 2020 tentang Standar Nasional Pendidikan Tinggi";
  const KurikulumIPBTitle = "Apa Itu Kurikulum?";
  return (
    <div className="w-full h-full mb-10">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{KurikulumIPBTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 flex justify-center">
            <img
              src={KurikulumIPBImage}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{KurikulumIPBText}</p>
            <KurikulumIPBButton></KurikulumIPBButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KurikulumIPB;
