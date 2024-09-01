import Image from "next/image";

import DesignSight01 from "../../public/images/tokyo_21_21_design_sight_01.jpg";
import styles from "./main.css";

import Invitation from "./components/Invitation";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Accounts from "./components/Accounts";
import ShareMessage from "./components/ShareMessage";

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
        {/* 초대장 */}
        <Invitation />
        {/* 갤러리 */}
        <Gallery />
        {/* 오시는 길 */}
        <Location />
        {/* 계좌번호 공유하기  */}
        <Accounts />
        {/* 메시지 공유하기 */}
        <ShareMessage />
      </main>
    </>
  );
}
