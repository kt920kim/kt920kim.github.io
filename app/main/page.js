import Image from "next/image";

import DesignSight01 from "../../public/images/tokyo_21_21_design_sight_01.jpg";
import styles from "./main.css";

import Invitation from "./components/Invitation";
import Gallery from "./components/Gallery";
import Location from "./components/Location";

export default function Home() {

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between scrollbar-hide">
      <section className="main">
        <div className="mainsection-text w-full py-[40px] bg-white">
          {/* <div className="mainsection-text-1 flex flex-col text-center mb-[10px] leading-[26px] text-[16px] font-normal font-S-Core_Dream">초대합니다</div> */}
          <div className="mainsection-text-2 flex justify-center items-center mb-[28px] leading-[32px] text-[29px] tracking-[-0.32px] font-semibold font-S-Core_Dream">
            김기태 <span className="text2-inner mr-[5px] font-S-Core_Dream"> & </span> 박기영
          </div>
          <div className="mainsection-text-3 text-center text-[18px] leading-[25px] tracking-[-0.18px] font-[550] font-S-Core_Dream">2024. 10. 19 토요일 오전 11시 30분<br/>플로렌스 오목교점 튜울립홀</div>
        </div>
        <Image className="object-scale-down" src={DesignSight01} alt="Main Picture" priority />
      </section>
      {/* bg-[#F5EEE1] */}
      <Invitation />
      {/*  */}
      <Gallery />
      {/*  */}
      <Location />
      {/* <section className="congratulatory w-full flex flex-col justify-center items-center gap-6 bg-[#F5EEE1] mb-[60px] pt-[60px] pb-[80px]">
        <div className="congratulatory-section-text text-center not-italic font-extrabold text-[18px] leading-[21px] uppercase font-S-Core_Dream">마을 전하실 곳</div>
        <div className="congratulatory-section-groom-btn flex text-center items-center justify-center gap-[10px] rounded-lg px-3 py-[10px] not-italic font-normal text-[15px] leading-[21px] uppercase font-S-Core_Dream">신랑층 계좌번호</div>
        <div className="congratulatory-section-bride-btn flex text-center items-center justify-center gap-[10px] rounded-lg px-3 py-[10px] not-italic font-normal text-[15px] leading-[21px] uppercase font-S-Core_Dream">신부측 계좌번호</div>
      </section> */}
    </main>
    </>
  );
}
