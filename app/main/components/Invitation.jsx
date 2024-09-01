import Image from "next/image";

// import WeddingIcon from "../../../public/images/groom_bride_05.png";

const Invitation = () => {
  return (
    <section className="invitation w-full flex flex-col items-center py-[60px] gap-1 bg-white">
      <div className="invitation-section-text1 flex text-center font-extrabold text-[15px] leading-[19px] mb-[32px] font-S-Core_Dream">
        {/* <Image src={WeddingIcon} alt="" width={32} height={32} /> */}
        {/* <div className="m-2">초대합니다</div> */}
        초대합니다
      </div>
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
  );
};

export default Invitation;