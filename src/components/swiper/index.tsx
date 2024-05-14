import { forwardRef } from "react";
import cn from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperSliderProps {
  options?: any;
  prevIcon?: string;
  nextIcon?: string;
  children?: React.ReactNode;
  className?: string;
  navClass?: string;
  navStyle?: number;
  dotStyle?: number;
}

const SwiperSlider = forwardRef<HTMLDivElement, SwiperSliderProps>(({
  options = {},
  prevIcon = 'pe-7s-angle-left',
  nextIcon = 'pe-7s-angle-right',
  children = null,
  className = '',
  navClass = '',
  navStyle = 1,
  dotStyle = 1,
}, ref) => {
  const modules = options?.modules !== undefined ? options.modules : [];
  const prevClass = `prev-${navClass || "swiper-nav"}`;
  const nextClass = `next-${navClass || "swiper-nav"}`;
  const sliderOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    autoplay: options?.autoplay ? {
      delay: 2500,
      disableOnInteraction: false,
    } : false,
    watchSlidesProgress: true,
    autoHeight: true,
    breakpoints: {},
    ...options,
    modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
    navigation: options?.navigation
      ? {
        prevEl: `.${prevClass}`,
        nextEl: `.${nextClass}`,
      }
      : false,
    pagination: options?.pagination
      ? {
        clickable: true,
      }
      : false,
  };

  return (
    <div
      className={cn("swiper-wrap", className)}
      ref={ref}
    >
      <Swiper {...sliderOptions}>{children}</Swiper>

      {sliderOptions?.navigation && (
        <>
          <button
            type="button"
            className={`swiper-button-prev ht-swiper-button-nav ${prevClass}`}
          >
            <i className={cn(prevIcon, "icon")} />
          </button>
          <button
            type="button"
            className={`swiper-button-next ht-swiper-button-nav ${nextClass}`}
          >
            <i className={cn(nextIcon, "icon")} />
          </button>
        </>
      )}
    </div>
  );
}
);

export { SwiperSlide };

export default SwiperSlider;