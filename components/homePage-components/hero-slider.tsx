"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { useState } from "react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

// hero images for our slider;
const heroImg =
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/d0e6c08b616cf2d9231ad9522da6d384bad1b3e0_1727873722.jpg?x-oss-process=image/quality,q_95";
const heroImg2 =
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/303a4447d411bf8112a347537bf5aa4ed0250aa6_1727608462.jpg?x-oss-process=image/quality,q_95";
const heroImg3 =
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/88e7d7d654e6e5111e5d6098d84414c4a7fa341f_1667981540.jpg?x-oss-process=image/quality,q_95/format,webp";

export default function HeroSlider() {
  const [swiperControll, setSwiperControll] = useState<SwiperCore | null>(null);

  return (
    <div className="h-full relative">
      <Swiper modules={[Autoplay]} autoplay={{disableOnInteraction: false, delay: 3000}} onSwiper={(swiper) => setSwiperControll(swiper)} className="mySwiper h-full">
        <SwiperSlide>
          <div className="h-full aspect-auto">
            <img src={heroImg} alt="an image for the main page slider." className="object-cover w-full h-full"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full aspect-auto">
            <img src={heroImg2} alt="an image for the main page slider." className="object-cover w-full h-full"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full aspect-auto">
            <img src={heroImg3} alt="an image for the main page slider." className="object-cover w-full h-full"/>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-10 right-10 flex items-center gap-x-2 z-20">
        <button onClick={() => swiperControll?.slidePrev()} className="prev w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center border border-solid">
          <ArrowRight2 className="text-neutral-900" />
        </button>
        <button onClick={() => swiperControll?.slideNext()} className="next w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center border border-solid">
          <ArrowLeft2 className="text-neutral-900" />
        </button>
      </div>
    </div>
  );
}
