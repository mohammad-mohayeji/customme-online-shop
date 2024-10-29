import Mobile from "/public/images/products/iphone-13.png";
import { Heart } from "iconsax-react";

export default function ProductItem() {
  return (
    <div className="border border-solid border-neutral-500 rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300">
      <div className="rounded-lg flex justify-center">
        <img src={Mobile.src} alt="" />
      </div>
      <div>
        <div className="pt-4 pb-[10px] flex justify-between">
          <h6 className="lg:text-h6 font-bold">گوشی موبایل آیفون 13</h6>
          <i>
            <Heart className="text-neutral-900 w-6 h-6" />
          </i>
        </div>
        <p className="text-body4 h-[35px] mb-3">دارای رنگ بندی</p>
        <h5 className="text-h6 lg:text-h5 font-bold text-left">40,000,000 تومان</h5>
      </div>
    </div>
  );
}
