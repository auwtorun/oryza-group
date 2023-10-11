import React, { useEffect } from "react";
import Images from "/images/obe.jpg";

function ModalImages({ isOpen, onClose, Photo }) {
  const OpenNewTab = () => {
    window.open("/images/obe.jpg", "_blank");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="modal-container z-50 p-4 mx-auto bg-white rounded-lg shadow-lg">
        <div className="relative">
          <button
            className="absolute top-0 right-0 mr-4 text-black hover:text-gray-800 text-2xl"
            onClick={onClose}
          >
            ✖
          </button>
          <img
            src={Images}
            alt="Modal Image"
            className="w-[90vw] md:w-auto md:h-[90vh] cursor-pointer"
            onClick={OpenNewTab}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalImages;
