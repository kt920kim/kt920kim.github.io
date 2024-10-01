import Image from "next/image";
import { Suspense } from "react";

import DesignSight01 from "../../public/images/tokyo_21_21_design_sight_01.jpg";
import styles from "./main.css";

import ImageGallery from "../components/ImageGallery";
import Accounts from "../components/Accounts";
import GuestBook from "../components/TmpGuestBook";

export const metadata = {
  title: '김기태 & 박기영 결혼합니다.',
  openGraph: {
    title: '김기태 & 박기영 결혼합니다.',
  }
}

export default function Page() {

  return (
    <Suspense>
      <main className="flex flex-col items-center justify-between scrollbar-hide">
        <section className="main">
          <Image className="object-scale-down" src={DesignSight01} alt="Main Picture" priority />
        </section>
        {/* 감사 인사 */}
        <section className="invitation w-full flex flex-col items-center py-[30px] gap-1">
          {/* <div className="invitation-section-text1 flex text-center font-extrabold text-[15px] leading-[19px] mb-[32px] font-S-Core_Dream">
            초대합니다
          </div> */}
          <div className="invitation-section-text2 text-center font-normal text-[16px] leading-[26px] mb-[32px] font-S-Core_Dream">
            2024년 10월 19일<br/>
            <br/>
            저희 두 사람,<br/>
            인생의 동반자로서 첫 걸음을 내딛습니다.<br/>
            서로를 존중하고 배려하며,<br/>
            감사하는 마음으로 평생 함께 살아가겠습니다.<br/>
            새로운 시작을 축복해 주시길 부탁드립니다.<br/>
            축하해 주시는 모든 분의 가정에도<br/>
            항상 행복이 가득하길 기원합니다.<br/>
            <br/>
            신랑 김기태, 신부 박기영 올림<br/>
          </div>
        </section>
        {/* 갤러리 */}
        <section className="gallery w-full flex justify-center items-center gap-[10px] pt-[20px] pb-9">
          <div className="gallery-section-text text-center text-[20px] font-extrabold leading-6 uppercase font-S-Core_Dream">
            갤러리
          </div>
        </section>
        <section className="gallery-image-list flex flex-wrap mx-2 mb-[32px]">
          <ImageGallery />
        </section>
        <GuestBook />
        {/* 계좌번호 공유하기  */}
        <Accounts />
      </main>
    </Suspense>
  );
}
