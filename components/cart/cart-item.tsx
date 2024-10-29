import MobilePic from "/public/images/products/iphone-13.png";

import { Add, Minus } from "iconsax-react";

export default function CartItem() {
  return (
    <div className="border border-solid border-neutral-400 rounded-lg p-4">
      <div className="flex">
        <div className="w-24 flex-shrink-0">
          <img src={MobilePic.src} className="w-24 h-24 object-cover" alt="" />
          <div className="mt-6">
            <div className="flex items-center border border-solid border-neutral-400 rounded-lg text-cp1 font-bold">
              <button className="flex justify-center py-1 grow">
                <Add className="w-3 h-3" />
              </button>
              <span className="border-r border-l border-solid border-neutral-400 py-1 grow text-center">
                1
              </span>
              <button className="flex justify-center py-1 grow">
                <Minus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-cp2 lg:text-cp1 font-bold flex flex-col gap-4 py-4 pr-4">
          <p>گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو</p>
          <p>40,000,000 تومان</p>
        </div>
        {/* <div className="hidden sm:block mr-auto">
          <div className="flex items-center border border-solid border-neutral-400 rounded-lg text-cp1 font-bold">
            <button className="px-2 py-1">
              <Add className="w-3 h-3 lg:w-4 lg:h-4" />
            </button>
            <span className="border-r border-l border-solid border-neutral-400 px-2 py-1">
              1
            </span>
            <button className="px-2 py-1">
              <Minus className="w-3 h-3 lg:w-4 lg:h-4" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
