import React, { useEffect } from "react";
import "./MBKMPage.css";
import MBKMHeader from "../components/MBKMHeader";

const MBKMPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MBKMHeader></MBKMHeader>
      <div className="">
        <div className={`homepage p-5 w-full`}>
        </div>
      </div>
    </div>
  );
};

export default MBKMPage;
