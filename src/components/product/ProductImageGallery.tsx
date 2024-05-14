import React, { Fragment, useEffect, useState } from "react";
import { EffectFade, Thumbs } from "swiper";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../swiper";
import { Product } from "../../types/RootStateTypes";

const ProductImageGallery: React.FC<{ product: Product }> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.swiper-button-prev, .swiper-button-next { display: none !important; }`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const slides = product?.image.map((img, i) => ({
    src: `${import.meta.env.VITE_PUBLIC_URL}${img}`,
    key: i,
  }));

  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {/* Badge logic here */}
        {product?.image?.length && (
          <Swiper options={gallerySwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <button className="lightgallery-button" onClick={() => setIndex(key)}>
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img src={single} className="img-fluid" alt="" />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        )}
      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.image?.length && (
          <Swiper options={thumbnailSwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <div className="single-image">
                  <img src={single} className="img-fluid" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Fragment>
  );
};

export default ProductImageGallery;
