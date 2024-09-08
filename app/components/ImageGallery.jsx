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

import DesignSight01 from "../../public/images/tokyo_21_21_design_sight_01.jpg";
import DesignSight02 from "../../public/images/tokyo_21_21_design_sight_02.jpg";
import DesignSight03 from "../../public/images/tokyo_21_21_design_sight_03.jpg";
import DesignSight04 from "../../public/images/tokyo_21_21_design_sight_04.jpg";
import ShibuyaStreet01 from "../../public/images/tokyo_shibuya_street_01.jpg";
import ShibuyaStreet02 from "../../public/images/tokyo_shibuya_street_02.jpg";
import ShibuyaStreet03 from "../../public/images/tokyo_shibuya_street_03.jpg";
import TokyoTower01 from "../../public/images/tokyo_tower_01.jpg";
import TokyoTower02 from "../../public/images/tokyo_tower_02.jpg";

const ImageList = [
  { src: DesignSight01, alt: "21_21 Design Sight 1" },
  { src: DesignSight02, alt: "21_21 Design Sight 2" },
  { src: DesignSight03, alt: "21_21 Design Sight 3" },
  { src: DesignSight04, alt: "21_21 Design Sight 4" },
  { src: TokyoTower01, alt: "Tokyo Tower 1" },
  { src: TokyoTower02, alt: "Tokyo Tower 2" },
  { src: ShibuyaStreet01, alt: "Shibuya Street 1" },
  { src: ShibuyaStreet02, alt: "Shibuya Street 2" },
  { src: ShibuyaStreet03, alt: "Shibuya Street 3" }
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
      {
        ImageList.map((item, index) => (
          <div key={index} className="basis-1/3" onClick={openModal}>
            <Image src={(item.src || "")} alt={(item?.alt || "")} className="gallery-image w-full h-[15vh] object-cover align-middle pb-[3px] px-[6px] overflow-clip clip-margin" />
          </div>
        ))
      }

      {modalOpen && (
        <div id="myModal" className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <span className="close" onClick={closeModal}>×</span> */}
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-navigation-size': '22px',
                '--swiper-pagination-color': '#fff',
              }}
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
            >
              {
                ImageList.map((slideContent, index) => (
                  <SwiperSlide key={index}>
                    <div className="image-container flex justify-center items-center h-full">
                      <Image src={slideContent.src} alt={slideContent.alt} className="h-[400px] object-cover" />
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
