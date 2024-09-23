import Image from "next/image";
import { Suspense } from "react";

import DesignSight01 from "../../public/images/tokyo_21_21_design_sight_01.jpg";
import styles from "./main.css";

import Invitation from "../components/Invitation";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Accounts from "../components/Accounts";
// import ShareMessage from "./components/ShareMessage";

export default function Home() {

  return (
    <Suspense>
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
        {/* <Invitation /> */}
        <section className="invitation w-full flex flex-col items-center pt-[60px] pb-[30px] gap-1 bg-white">
          <div className="invitation-section-text1 flex text-center font-extrabold text-[15px] leading-[19px] mb-[32px] font-S-Core_Dream">
            초대합니다
          </div>
          <div className="invitation-section-text2 text-center font-normal text-[16px] leading-[26px] mb-[32px] font-S-Core_Dream">
            저희 두 사람이 사랑과 믿음으로<br/>
            한 가정을 이루게 되었습니다.<br/>
            바쁘시더라도 참석 하셔서<br/>
            저희의 앞날을 축복해 주시고<br/>
            격려해 주시기를 바랍니다.
          </div>
          <div className="invitation-section-text3 w-full flex justify-center items-center font-semibold text-[18px] leading-[30px] font-S-Core_Dream">
            김주영・정성란<span className="text3-inner font-normal text-[16px] mx-[5px] font-S-Core_Dream">의 장남</span> 기태
          </div>
          <div className="invitation-section-text3 w-full flex justify-center items-center font-semibold text-[18px] leading-[30px] font-S-Core_Dream">
            박수현・이영숙<span className="text3-inner font-normal text-[16px] mx-[5px] font-S-Core_Dream">의 장녀</span> 기영
          </div>
        </section>
        {/* 갤러리 */}
        <Gallery />
        {/* 오시는 길 */}
        <Location />
        {/* 계좌번호 공유하기  */}
        <Accounts />
        {/* 메시지 공유하기 */}
        {/* <ShareMessage /> */}
      </main>
    </Suspense>
  );
}
