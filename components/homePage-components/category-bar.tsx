import { MedalStar } from "iconsax-react";

import MobileCase from "/public/images/categories/mobile-case.png";
import GreetingCard from "/public/images/categories/greeting-card.png";
import Accessory from "/public/images/categories/accessory.png";
import Stationery from "/public/images/categories/stationery.png";
import Clothes from "/public/images/categories/clothes.png";
import HomeDecor from "/public/images/categories/home-decor.png";

export default function CategoryBar() {
  return (
    <div className="hidden lg:block py-4">
      <div className="text-neutral-1000 flex items-center gap-x-4">
        <i>
          <MedalStar className="w-10 h-10" />
        </i>
        <h4 className="text-h5 xl:text-h4 font-bold text-nowrap">دسته بندی محصولات</h4>
        <hr className="h-px border-0 bg-neutral-500 w-full max-w-[850px] mr-auto" />
      </div>
      <div className="pt-6">
        <ul className="flex items-center gap-x-8 text-cp1 font-bold">
          <li>
            <div className="w-full max-w-[170px] flex flex-col items-center border border-neutral-400 rounded-2xl p-2">
              <img className="rounded-lg" src={MobileCase.src} alt="" />
              <span className="text-neutral-1000 py-2">قاب موبایل</span>
            </div>
          </li>
          <li>
            <div className="w-full max-w-[170px] flex flex-col items-center border border-neutral-400 rounded-2xl p-2">
              <img className="rounded-lg" src={GreetingCard.src} alt="" />
              <span className="text-neutral-1000 py-2">کارت تبریک</span>
            </div>
          </li>
          <li>
            <div className="w-full max-w-[170px] flex flex-col items-center border border-neutral-400 rounded-2xl p-2">
              <img className="rounded-lg" src={Accessory.src} alt="" />
              <span className="text-neutral-1000 py-2">اکسسوری</span>
            </div>
          </li>
          <li>
            <div className="w-full max-w-[170px] flex flex-col items-center border border-neutral-400 rounded-2xl p-2">
              <img className="rounded-lg" src={Stationery.src} alt="" />
              <span className="text-neutral-1000 py-2">لوازم التحریر</span>
            </div>
          </li>
          <li>
            <div className="w-full max-w-[170px] flex flex-col items-center border border-neutral-400 rounded-2xl p-2">
              <img className="rounded-lg" src={Clothes.src} alt="" />
              <span className="text-neutral-1000 py-2">لباس</span>
            </div>
          </li>
          <li>
            <div className="w-full max-w-[170px] flex flex-col items-center border border-neutral-400 rounded-2xl p-2">
              <img className="rounded-lg" src={HomeDecor.src} alt="" />
              <span className="text-neutral-1000 py-2">دکور خانه</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
