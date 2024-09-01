import KakaoMap from "./KakaoMap";

const Location = () => {
  return (
    <>
      <section className="location w-full flex flex-col justify-center items-center gap-2 pt-[60px] px-5 pb-10">
        <div className="location-section-text1 text-center font-extrabold text-[15px] leading-[21px] uppercase font-S-Core_Dream">
          오시는 길
        </div>
      </section>
      <section className="location-map w-full flex px-5">
        <KakaoMap />
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
      <section className="location-how-drivecar w-full flex flex-col items-start gap-2 px-5">
        <div className="location-how2-section-text1 flex flex-col self-stretch not-italic font-extrabold text-[16px] leading-5 font-S-Core_Dream">자가용</div>
        <div className="location-how2-section-text2 flex flex-col self-stretch not-italic font-normal text-[15px] leading-[21px] font-S-Core_Dream">
          네비게이션 이용 시 “플로렌스 오목교점”을 입력하세요. (주차 2시간 30분 무료)
        </div>
      </section>
    </>
  )
};

export default Location;