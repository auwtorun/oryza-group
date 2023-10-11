import React, { useEffect } from "react";
import "./HomePage.css";
import TentangKami from "../components/TentangKami";
import KurikulumIPB from "../components/KurikulumIPB";
import KurikulumMerdeka from '../components/KurikulumMerdeka'
import Kontak from "../components/HubungiKami";
import HomeHeader from "../components/HomeHeader";
import ProgramMBKM from "../components/ProgramMBKM";
import ManfaatMBKM from '../components/ManfaatMBKM'
import OBE from '../components/OBE';
import KataAkhir from "../components/KataAkhir";

const HomePage = () => {
  const contextValue = {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HomeHeader></HomeHeader>
      <div className="">
        <div className={`homepage p-5 w-full`}>
          <TentangKami></TentangKami>
          <KurikulumIPB></KurikulumIPB>
          <KurikulumMerdeka></KurikulumMerdeka>
          <OBE></OBE>
          <ProgramMBKM></ProgramMBKM>
          <ManfaatMBKM></ManfaatMBKM>
          <KataAkhir></KataAkhir>
          <Kontak></Kontak>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
