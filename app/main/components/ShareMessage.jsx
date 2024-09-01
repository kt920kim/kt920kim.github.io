"use client"

import Image from "next/image";
import Script from "next/script";

import React, { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import KakaoTalk from "../../../public/images/kakaotalk.png";
import Link from "../../../public/images/link.png";

const ShareMessage = () => {
  const [webPageLink, setWebPageLink] = useState("");

  const handleKakaoTalkShare = () => {
    Kakao.Share.createDefaultButton({
      container: '#kakaotalk-sharing-btn',
      objectType: 'text',
      text: '김기태 & 박기영 결혼합니다.',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: webPageLink,
        webUrl: webPageLink,
      },
    });
  };

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={() => {
          Kakao.init("b26e186abb61e7b9ce1010719b5d31e7");
        }}
      />

      <section className="share-message w-full flex flex-col justify-center items-center py-[30px] bg-[#F5EEE1]">
        <div className="share-by-kakaotalk flex flex-row text-[15px] leading-[19px] mb-4 font-S-Core_Dream">
          <Image src={KakaoTalk} alt="카카오톡" width={24} height={24} />
          <button id="kakaotalk-sharing-btn" className="ml-2" onClick={handleKakaoTalkShare}>카카오톡 공유하기</button>
        </div>
        <div className="share-by-link flex flex-row text-[15px] leading-[19px] mb-4 font-S-Core_Dream">
          <Image src={Link} alt="링크주소" width={24} height={24} />
          {/* <button className="ml-2" onClick={handleLinkShare}>링크주소 공유하기</button> */}
          <CopyToClipboard
            text={webPageLink}
            onCopy={() => { setWebPageLink(window.location.href || ""); alert("복사되었습니다."); }}
          >
            <button className="ml-2">링크주소 공유하기</button>
          </CopyToClipboard>
        </div>
      </section>
    </>
  );
}

export default ShareMessage;
