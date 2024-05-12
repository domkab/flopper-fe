import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import cn from "clsx";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import heroSliderData from '../../src/data/hero-slider-fourteen.json';
import HeroSliderFourteenSingle from '../components/hero-slider/heroSliderFourteenSingle';

const HeroSliderFourteen: React.FC = () => {
  return (
    <div className="slider-area">
      <div className="slider-active-2 nav-style-3">
        <Swiper
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1000}
          navigation={{
            prevEl: '.prev-swiper-nav',
            nextEl: '.next-swiper-nav'
          }}
          autoHeight={false}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="overflow-hidden"
        >
          <button className="swiper-button-prev ht-swiper-button-nav prev-swiper-nav">
            <i className={cn('pe-7s-angle-left', "icon")} />
          </button>
          <button className="swiper-button-next ht-swiper-button-nav next-swiper-nav">
            <i className={cn('pe-7s-angle-right', "icon")} />
          </button>
          {heroSliderData?.map((single, key) => (
            <SwiperSlide key={key}>
              <HeroSliderFourteenSingle data={single} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderFourteen;
