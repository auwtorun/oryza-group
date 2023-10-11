import React from "react";
import "./ProgramMBKM.css";

const ProgramMBKM = () => {
  const ProgramMBKMImage = "/images/pembelajaran.jpg";
  const ProgramMBKMText = (
    <div>
      <p>
        Kebijakan Merdeka BelajarKampus Merdeka yang selanjutnya disingkat MBKM
        dilandasi oleh Permendikbud Nomor 3 Tahun 2020 tentang Standar Nasional
        Pendidikan Tinggi pada Standar Proses Pembelajaran, khususnya pada pasal
        15 s/d 18. MBKM bertujuan untuk mendorong mahasiswa memperoleh
        pengalaman belajar dengan berbagai kompetensi tambahan di luar program
        studi dan/atau di luar kampus-nya.
      </p>
      <br />
      <p>
        Program MBKM memungkinkan mahasiswa untuk melakukan kegiatan
        pembelajaran di luar program studi, baik di dalam perguruan tinggi yang
        sama, maupun di luar perguruan tinggi asal mahasiswa.
      </p>
      <br />
      <p>beberapa program MBKM yang dapat dilakukan oleh mahasiswa yakni</p>
      <br />
      <p>
        1. Kampus mengajar bantu peningkatan kualitas pendidikan dasar dengan
        terlibat langsung pada proses pengajaran disekolah sekolah yang
        berkolaborasi diseluruh daerah di Indonesia
      </p>
      <br />
      <p>
        2. Magang dan studi independen bersertifikar Dapatkan pengalaman dunia
        kerja secara langsung sebagai persiapan karit dan jalankan proyek
        penelitian dengan studi kasus nyata dari para pelaku industri ternama
      </p>
      <br />
      <p>
        3. Pertukaran mahasiswa merdeka Program pertukaran mahasiswa dalam negri
        yang memberikan pengalaman langsung untuk lebih memaknai keberagaman
        budaya nusantara
      </p>
      <br />
      <p>
        4. Wirausaha merdeka program ugulan dari berbagai perguruan tinggi yang
        bertujuan untuk meningkatkan kemampuan wirausaha
      </p>
      <br />
      <p>
        5. Indonesian Internasional Student Mobility Awards (IISMA) Program
        pertukaran dengan universitas lain dari seluruh dunia untuk bertukar
        budaya
      </p>
      <br />
      <p>
        6. Praktisi mengajar Ruang kolaborasi antara praktisi sebagai
        representasi industri dengan dosen perguruann tinggi dalam bentuk
        pengajaran matakuliah agar mahasiswa lebih siap untuk masuk ke dunia
        kerja
      </p>
      <br />
      <p>
        Beberapa program tersebut menunjang pengefektifan kegiatan belajar
        mengajar dalam kelas dengan kegiatan pembelajaran yang sesuai dengan
        kurikulum MBKM
      </p>
    </div>
  );
  const ProgramMBKMTitle = "Program MBKM";
  return (
    <div className="w-full h-full mb-10">
      <div className="flex items-center justify-center mt-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{ProgramMBKMTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 md:px-4 items-center">
          <div className="mt-4 flex justify-center ">
            <img
              src={ProgramMBKMImage}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] object-scale-down rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{ProgramMBKMText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgramMBKM;
