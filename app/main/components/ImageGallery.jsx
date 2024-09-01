"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageGallery.css';

import DesignSight01 from "../../../public/images/tokyo_21_21_design_sight_01.jpg";
import DesignSight02 from "../../../public/images/tokyo_21_21_design_sight_02.jpg";
import DesignSight03 from "../../../public/images/tokyo_21_21_design_sight_03.jpg";
import ShibuyaStreet01 from "../../../public/images/tokyo_shibuya_street_01.jpg";
import ShibuyaStreet02 from "../../../public/images/tokyo_shibuya_street_02.jpg";
import TokyoTower01 from "../../../public/images/tokyo_tower_01.jpg";

const ImageList = [
  { src: DesignSight01, alt: "21_21 Design Sight 1" },
  { src: DesignSight02, alt: "21_21 Design Sight 2" },
  { src: DesignSight03, alt: "21_21 Design Sight 3" },
  { src: TokyoTower01, alt: "Tokyo Tower 1" },
  { src: ShibuyaStreet01, alt: "Shibuya Street 1" },
  { src: ShibuyaStreet02, alt: "Shibuya Street 2" }
]

const ImageGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    const { target: element } = event;

    // console.log(target.querySelector('img').alt);
    if (element?.tagName === 'IMG') {
      console.log(element.alt);
    } else {
      const imgDomNode = element.querySelector('img');
      console.log(imgDomNode?.alt);
    }

    document.body.style.overflowY = 'hidden';
    setModalOpen(true);
  }
  const closeModal = () => {
    document.body.style.overflowY = 'visible';
    setModalOpen(false);
  }

  return (
    <>
      <div className="basis-1/3" onClick={openModal}>
        <Image src={DesignSight01} alt="Gallery 1" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
      </div>
      <div className="basis-1/3" onClick={openModal}>
        <Image src={DesignSight02} alt="Gallery 2" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
      </div>
      <div className="basis-1/3" onClick={openModal}>
        <Image src={DesignSight03} alt="Gallery 3" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
      </div>
      <div className="basis-1/3" onClick={openModal}>
        <Image src={TokyoTower01} alt="Gallery 4" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
      </div>
      <div className="basis-1/3" onClick={openModal}>
        <Image src={ShibuyaStreet01} alt="Gallery 5" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
      </div>
      <div className="basis-1/3" onClick={openModal}>
        <Image src={ShibuyaStreet02} alt="Gallery 6" className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
      </div>

      {modalOpen && (
        <div id="myModal" className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <span className="close" onClick={closeModal}>×</span> */}
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log('onSwiper', swiper)}
              onSlideChange={(swiper) => console.log('onSlideChange', swiper)}
            >
              {
                ImageList.map((slideContent, index) => (
                  <SwiperSlide key={slideContent.alt} virtualIndex={index}>
                    <div className="image-container flex justify-center items-center h-full">
                      <Image src={slideContent.src} alt={slideContent.alt} />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
