import React from "react";
import "./KataAkhir.css";

const KataAkhir = () => {
  const KataAkhirImage = "/images/KataAkhir.jpg";
  const KataAkhirText =
    (
        <div>
            <p>Mengingat pendidikan juga termasuk dalam cita-cita internasional di seluruh dunia yang disusun dalam poin-poin Sustainable Development Goals (SDGs).</p>
            <br />
            <p>Dalam pendidikan yang diatur sebagai poin yang dituangkan pada capaian SDGs, pendidikan yang merata dan keadilan dalam pendidikan terhadap semua individu pada berbagai lapisan masyarakat harus dicapai sebagai indikator terciptanya pendidikan yang adil sebagai upaya pencerdasan masyarakat. Oleh karena itu, pentingnya peran pendidikan dalam kemajuan bangsa dan persaingan internasional Hal ini kemudian memunculkan berbagai persiapan yang harus dipikirkan pemerintah dan tenaga pendidik melalui rencana dan strategi program yang dirancang untuk mencapai kualitas pendidikan yang maksimal yang diatur dalam kurikulum.</p>
        </div>
    );
  const KataAkhirTitle = "Akhir Kata";
  return (
    <div className="w-full h-full mb-10">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{KataAkhirTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 flex justify-center">
            <img
              src={KataAkhirImage}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{KataAkhirText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KataAkhir;
