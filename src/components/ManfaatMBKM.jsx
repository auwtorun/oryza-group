import React from "react";

const ManfaatMBKM = () => {
  const ManfaatMBKMImage = "/images/ManfaatMBKM.jpg";
  const ManfaatMBKMText = (
  <div>
    <p>Program terkait Kurikulum Merdeka Belajar Kampus Merdeka memberikan banyak manfaat, khususnya bagi mahasiswa. Berikut alasan mengapa mahasiswa harus mengikuti program-program dari Kampus Merdeka:</p>
    <p>1. Kegiatan praktik di lapangan akan dikonversi menjadi SKS.</p>
    <p>2. Eksplorasi pengetahuan dan kemampuan di lapangan selama lebih dari satu semester.</p>
    <p>3. Belajar dan memperluas jaringan di luar program studi atau kampus asal.</p>
    <p>4. Menimba ilmu secara langsung dari mitra berkualitas dan terkemuka.</p>
  </div>
);

  const ManfaatMBKMTitle = "Manfaat MBKM";
  return (
    <div className="w-full h-full mb-10">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{ManfaatMBKMTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 flex justify-center">
            <img
              src={ManfaatMBKMImage}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{ManfaatMBKMText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManfaatMBKM;
