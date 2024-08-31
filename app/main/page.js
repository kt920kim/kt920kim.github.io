import Image from "next/image";
// import { Container as MapDiv, NaverMap, Marker, useNavermaps} from 'react-naver-maps';
// import localFont from 'next/font/local'
import DesignSight01 from "../../public/images/tokyo_21_21_design_sight_01.jpg";
import DesignSight02 from "../../public/images/tokyo_21_21_design_sight_02.jpg";
import DesignSight03 from "../../public/images/tokyo_21_21_design_sight_03.jpg";
import ShibuyaStreet01 from "../../public/images/tokyo_shibuya_street_01.jpg";
import ShibuyaStreet02 from "../../public/images/tokyo_shibuya_street_02.jpg";
import TokyoTower01 from "../../public/images/tokyo_tower_01.jpg";
import styles from "./main.css";

// import KakaoMapScript from "./KakaoMapScript";
// import useKakaoLoader from "./useKakaoMapLoader";
import KakakoMap from "./components/KakakoMap";
import ImageGallery from './components/ImageGallery';

// const myFont = localFont({
//   src: '../../public/fonts/S-Core_Dream_OTF/SCDream4.otf', // Regular
//   display: 'swap',
// })

export default function Home() {
  // useKakaoLoader();

  return (
    // <main className={`flex min-h-screen flex-col items-center justify-between scrollbar-hide ${myFont.className}`}>
    <>
    {/* <KakaoMapScript /> */}
    <main className="flex min-h-screen flex-col items-center justify-between scrollbar-hide">
      <section className="main">
        {/* <Image src="/images/tokyo_21_21_design_sight_01.jpg" alt="Main Picture" priority /> */}
        <Image className="object-scale-down" src={DesignSight01} alt="Main Picture" priority />
        <div className="mainsection-text w-full py-[40px] bg-white">
          <div className="mainsection-text-1 flex flex-col text-center mb-[10px] leading-[26px] text-[16px] font-normal font-S-Core_Dream">결혼식에 초대합니다</div>
          <div className="mainsection-text-2 flex justify-center items-center mb-[28px] leading-[32px] text-[29px] tracking-[-0.32px] font-semibold font-S-Core_Dream">
            김기태 <span className="text2-inner mr-[5px] font-S-Core_Dream"> & </span> 박기영
          </div>
          <div className="mainsection-text-3 text-center text-[18px] leading-[25px] tracking-[-0.18px] font-[550] font-S-Core_Dream">2024. 10. 19 토요일 오전 11시 30분<br/>플로렌스 오목교점 튜울립홀</div>
        </div>
      </section>
      <section className="invitation w-full flex flex-col items-center py-[60px] gap-1 bg-[#F5EEE1]">
        <div className="invitation-section-text1 text-center font-extrabold text-[15px] leading-[19px] mb-[32px] font-S-Core_Dream">INVITATION</div>
        <div className="invitation-section-text2 text-center font-normal text-[16px] leading-[26px] mb-[32px] font-S-Core_Dream">
          저희 두 사람이 사랑과 믿음으로<br/>
          한 가정을 이루게 되었습니다.<br/>
          바쁘시더라도 부디 오셔서<br/>
          저희의 앞날을 축복해 주시고<br/>
          격려해 주시면 감사하겠습니다.
        </div>
        <div className="invitation-section-text3 w-full flex justify-center items-center font-semibold text-[18px] leading-[30px] font-S-Core_Dream">
          김주영・정성란<span className="text3-inner font-normal text-[16px] mx-[5px] font-S-Core_Dream">의 장남</span> 기태
        </div>
        <div className="invitation-section-text3 w-full flex justify-center items-center font-semibold text-[18px] leading-[30px] font-S-Core_Dream">
          박수현・이영숙<span className="text3-inner font-normal text-[16px] mx-[5px] font-S-Core_Dream">의 장녀</span> 기영
        </div>
      </section>
      <section className="gallery w-full flex justify-center items-center gap-[10px] pt-[60px] pb-9">
        <div className="gallery-section-text text-center text-[15px] font-extrabold leading-[21px] uppercase font-S-Core_Dream">
          GALLERY
        </div>
      </section>
      <section className="gallery-image-list flex flex-wrap">
        <ImageGallery />
        {/* <div className="basis-1/3">
          <Image src={DesignSight01} alt="Gallery 1" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
        </div>
        <div className="basis-1/3">
          <Image src={DesignSight02} alt="Gallery 2" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
        </div>
        <div className="basis-1/3">
          <Image src={DesignSight03} alt="Gallery 3" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
        </div>
        <div className="basis-1/3">
          <Image src={TokyoTower01} alt="Gallery 4" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
        </div>
        <div className="basis-1/3">
          <Image src={ShibuyaStreet01} alt="Gallery 5" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
        </div>
        <div className="basis-1/3">
          <Image src={ShibuyaStreet02} alt="Gallery 6" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
        </div> */}
      </section>
      <section className="location w-full flex flex-col justify-center items-center gap-2 pt-[60px] px-5 pb-10">
        <div className="location-section-text1 text-center font-extrabold text-[15px] leading-[21px] uppercase font-S-Core_Dream">
          LOCATION
        </div>
      </section>
      <section className="location-map w-full flex">
        <KakakoMap />
      </section>

      <section className="location-info w-full flex flex-col justify-center items-start gap-2 pt-6 px-5 pb-10">
        <div className="location-info-section-text1 flex flex-col self-stretch font-extrabold text-[16px] leading-5 font-S-Core_Dream">
          플로렌스 오목교점
        </div>
        <div className="location-info-section-text2 flex flex-col self-stretch font-normal text-[15px] leading-[21px] font-S-Core_Dream">
          서울 영등포구 영등포로 33<br/>
          목동비즈타워 8층 플로렌스 오목교점<br/>
          Tel. 0507-1374-2114
        </div>
      </section>
      <section className="location-how-publictrans w-full flex flex-col justify-center items-start gap-2 pt-3 px-5 pb-6">
        <div className="location-how-publictrans-section-text1 flex flex-col self-stretch font-extrabold text-[16px] leading-5 font-S-Core_Dream">대중교통</div>
        <ol className="location-how-publictrans-section-list list-decimal flex flex-col self-stretch justify-center items-start gap-1 pl-5 mb-4">
          <li className="self-stretch not-italic font-normal text-[15px] leading-[21px] font-S-Core_Dream">지하철: 5호선 양평역 2번출구 직진 3번거리 (1층 우리은행건물)</li>
          <li className="self-stretch not-italic font-normal text-[15px] leading-[21px] font-S-Core_Dream">버스: 관악고등학교 정류소 하차 (640, 650, 5012, 5616, 6211, 6625, 6628, 6629, 6630, 6640B)</li>
        </ol>
      </section>
      <section className="location-how-drivecar w-full flex flex-col items-start gap-2 px-5 pb-[60px]">
        <div className="location-how2-section-text1 flex flex-col self-stretch not-italic font-extrabold text-[16px] leading-5 font-S-Core_Dream">자가용</div>
        <div className="location-how2-section-text2 flex flex-col self-stretch not-italic font-normal text-[15px] leading-[21px] font-S-Core_Dream">
          네비게이션 이용 시 “플로렌스 오목교점”을 입력하세요. (주차 2시간 30분 무료)
        </div>
      </section>
      {/* <section className="congratulatory w-full flex flex-col justify-center items-center gap-6 bg-[#F5EEE1] mb-[60px] pt-[60px] pb-[80px]">
        <div className="congratulatory-section-text text-center not-italic font-extrabold text-[18px] leading-[21px] uppercase font-S-Core_Dream">마을 전하실 곳</div>
        <div className="congratulatory-section-groom-btn flex text-center items-center justify-center gap-[10px] rounded-lg px-3 py-[10px] not-italic font-normal text-[15px] leading-[21px] uppercase font-S-Core_Dream">신랑층 계좌번호</div>
        <div className="congratulatory-section-bride-btn flex text-center items-center justify-center gap-[10px] rounded-lg px-3 py-[10px] not-italic font-normal text-[15px] leading-[21px] uppercase font-S-Core_Dream">신부측 계좌번호</div>
      </section> */}
    </main>
    </>
  );
}
