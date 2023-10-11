import React, { useEffect } from "react";
import "./KurikulumPage.css";
import KurikulumHeader from "../components/KurikulumHeader";

const KurikulumPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <KurikulumHeader></KurikulumHeader>
      <div className="">
        <div className={`homepage p-5 w-full`}></div>
      </div>
    </div>
  );
};

export default KurikulumPage;
