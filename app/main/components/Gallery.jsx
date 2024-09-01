import ImageGallery from "./ImageGallery";

const Gallery = () => {
  return (
    <>
      <section className="gallery w-full flex justify-center items-center gap-[10px] pt-[60px] pb-9">
        <div className="gallery-section-text text-center text-[15px] font-extrabold leading-[21px] uppercase font-S-Core_Dream">
          갤러리
        </div>
      </section>
      <section className="gallery-image-list flex flex-wrap">
        <ImageGallery />
      </section>
    </>
  );
};

export default Gallery;