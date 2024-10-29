import MobilePic from "/public/images/products/iphone-13.png";

import { ShoppingCart, HeartAdd } from "iconsax-react";

type ProductDetailsPageType = {
  params: {
    slug: string;
  };
};

export default function ProductDetailsPage({ params }: ProductDetailsPageType) {
  return (
    <main className="container flex flex-col items-center md:items-start md:flex-row gap-x-4">
      <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-row md:flex-col gap-4">
          <div className="p-4 bg-neutral-200 rounded-md">
            <img src={MobilePic.src} alt="" className="w-24 h-24 object-cover" />
          </div>
          <div className="p-4 bg-neutral-200 rounded-md">
            <img src={MobilePic.src} alt="" className="w-24 h-24 object-cover" />
          </div>
          <div className="p-4 bg-neutral-200 rounded-md">
            <img src={MobilePic.src} alt="" className="w-24 h-24 object-cover"/>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src={MobilePic.src} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-10 md:py-14">
        <h4 className="text-h6 md:text-h4 font-bold text-primary mb-4">مشخصات محصول</h4>
        <hr className="h-px border-0 bg-neutral-500 w-full" />
        <div className="text-body4 md:text-body2 text-neutral-900 py-4 flex flex-col gap-y-2">
          <p><span className="font-bold">نام محصول:</span> گوشی موبایل Apple Iphone 13</p>
          <p><span className="font-bold">رنگ ها:</span> مشکی، آبی، صورتی</p>
          <p><span className="font-bold">تعداد سیم کارت:</span> دو سیم کارت</p>
          <p><span className="font-bold">اندازه صفحه نمایش:</span> 6.1 اینچ</p>
          <p><span className="font-bold">حافظه داخلی:</span> 128 گیگابایت</p>
          <p><span className="font-bold">شبکه های ارتباطی:</span> 2G, 3G, 4G, 5G</p>
        </div>
        <div className="py-4 flex items-center gap-4">
          <button className="bg-white text-primary border border-primary text-cp3 md:text-btn2 font-medium rounded-lg py-2 px-4 mr-auto flex items-center">
            <i>
              <HeartAdd className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </i>
            افزودن به مورد علاقه ها
          </button>
          <button className="bg-primary text-white text-cp3 md:text-btn2 font-medium rounded-lg py-2 px-4 flex items-center">
            <i>
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </i>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </main>
  );
}
