import React from "react";
import "./HubungiKami.css";
import HubungiKamiButton from "./HubungiKamiButton";

const HubungiKami = () => {
  const HubungiKamiImage = "/images/HubungiKami.jpg";
  const HubungiKamiText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta? Esse inventore ex blanditiis quis laboriosam accusamus delectus aliquid laudantium a ipsam iste, animi asperiores";
  const HubungiKamiTitle = "Hubungi Kami";
  return (
    <div className="w-full h-full mb-20">
      <div className="flex items-center justify-center mt-2 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">{HubungiKamiTitle}</h1>
      </div>
      <div className="md:flex w-full h-full">
        {/* Bagian gambar */}
        <div className="md:w-1/2 md:px-4">
          <div className="mt-4 flex justify-center">
            <img
              src={HubungiKamiImage}
              alt="Gambar"
              className="w-full md:w-auto md:h-[80vh] rounded-2xl"
            />
          </div>
        </div>
        {/* Bagian teks */}
        <div className="md:w-1/2 md:px-4">
          <div className="mx-1">
            <p className="my-4">{HubungiKamiText}</p>
            <HubungiKamiButton></HubungiKamiButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HubungiKami;
