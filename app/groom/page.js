import Image from "next/image";
import { Suspense } from "react";

import DesignSight01 from "../../public/images/tokyo_21_21_design_sight_01.jpg";
import styles from "./main.css";

import ImageGallery from "../components/ImageGallery";
import Accounts from "../components/Accounts";

export default function Home() {

  return (
    <Suspense>
      <main className="flex flex-col items-center justify-between scrollbar-hide">
        <section className="main">
          <Image className="object-scale-down" src={DesignSight01} alt="Main Picture" priority />
        </section>
        {/* 감사 인사 */}
        <section className="invitation w-full flex flex-col items-center py-[30px] gap-1 bg-white">
          {/* <div className="invitation-section-text1 flex text-center font-extrabold text-[15px] leading-[19px] mb-[32px] font-S-Core_Dream">
            초대합니다
          </div> */}
          <div className="invitation-section-text2 text-center font-normal text-[16px] leading-[26px] mb-[32px] font-S-Core_Dream">
            저희 결혼 소식을 전해드리게 되어 기쁩니다.<br/>
            결혼식은 가족끼리 조촐하게 진행할 예정입니다.<br/>
            이해해 주시길 바라며, 축복해 주시면 감사하겠습니다.<br/>
            항상 건강하시고 평안하시길 기원합니다.<br/>
            <br/>
            신랑 김기태, 신부 박기영 올림<br/>
          </div>
        </section>
        {/* 갤러리 */}
        <section className="gallery w-full flex justify-center items-center gap-[10px] pt-[20px] pb-9">
          <div className="gallery-section-text text-center text-[15px] font-extrabold leading-[21px] uppercase font-S-Core_Dream">
            갤러리
          </div>
        </section>
        <section className="gallery-image-list flex flex-wrap">
          <ImageGallery />
        </section>
        {/* 계좌번호 공유하기  */}
        {/* <Accounts /> */}
      </main>
    </Suspense>
  );
}
