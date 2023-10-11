import React from "react";
import "./BackHome.css";

const BackHome = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-700 text-center z-50">
      <a
        href="https://www.contoh.com"
        target="_blank"
        className="text-white text-sm underline hover:no-underline"
      >
        Tautan Anda
      </a>
    </div>
  );
};

export default BackHome;
