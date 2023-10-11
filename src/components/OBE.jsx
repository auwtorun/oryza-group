import React, { useState } from "react";
import "./OBE.css";
import ModalImages from "./ModalImages";
import OBEButton from "./OBEButton";
import Images from "/images/obe.jpg";
import { AiFillEye } from "react-icons/ai";

const OBE = () => {
  const OBEText =
    `Beragam model pendekatan atau paradigma OBE yang digunakan dalam pengembangan dan pelaksanaan kurikulum, di antaranya yang paling sederhana
    terdiri dari tiga tahapan yang saling berinteraksi, dapat dijelaskan secara singkat
    sebagai berikut.Outcome Based Curriculum (OBC), pengembangan kurikulum yang didasarkan pada profil dan Capaian Pembelajaran Lulusan (CPL).Outcome Based Learning and Teaching (OBLT), pelaksanaan kegiatan
    pembelajaran yang didefinisikan sebagai interaksi dalam kegiatan belajar
    antara dosen, mahasiswa, dan sumber belajarOutcome Based Assessment and Evaluation (OBAE), pendekatan penilaian
    dan evaluasi yang dilakukan pada pencapaian CPL dalam rangka untuk
    peningkatan kualitas pembelajaran yang berkelanjutan.`;
  const OBETitle = "Outcome Based Education";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleImageClick = () => {
    setSelectedImageUrl(Images);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedImageUrl("");
    setIsModalOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <div className="w-full h-full mb-10">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{OBETitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 relative flex justify-center items-end">
            <img
              src={Images}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] object-cover rounded-2xl cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="flex items-center justify-end absolute mb-2 bg-black px-2 rounded-lg">
              <AiFillEye className="text-white mr-2 text-xl" />
              <p className="text-white font-bold">
                Klik Untuk Memperbesar Gambar
              </p>
            </div>
            <ModalImages
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              imageUrl={selectedImageUrl}
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{OBEText}</p>
            <OBEButton></OBEButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OBE;
