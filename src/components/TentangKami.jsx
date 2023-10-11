import React from "react";
import "./TentangKami.css";

const TentangKami = () => {
  const TentangKamiImage = "/images/TentangKami.jpg";
  const TentangKamiText =
    "Oryza merupakan kelompok kecil yang mengemban Gerakan Indonesia melayani yakni gerakan untuk meningkatkan perilaku pelayanan publik berintegritas dengan memberikan pemaparan seputar pendidikan berkualitas sejalan dengan kurikulum merdeka belajar kampus merdeka";
  const TentangKamiTitle = "Siapa Kami?";
  return (
    <div className="w-full h-full mb-10">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{TentangKamiTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 flex justify-center">
            <img
              src={TentangKamiImage}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{TentangKamiText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TentangKami;
