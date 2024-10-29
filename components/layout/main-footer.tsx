import { Instagram, Facebook, Youtube } from "iconsax-react";

import eNamad from "/public/images/licenses/eNamad.png";
import Samandehi from "/public/images/licenses/samandehi.png";
import ecUnion from "/public/images/licenses/ecUnion.png";

export default function MainFooter() {
  return (
    <div className="pt-20">
      <div className="w-full text-[#fff]">
        <div className="bg-shade-600">
          <div className="container py-14 flex flex-col sm:flex-row items-center sm:justify-between">
            <div>
              <div className="hidden sm:flex flex-col">
                <p className="text-body4 mb-4">برای دریافت آخرین و اخبار و تخفیف ایمیل خود را وارد نمایید.</p>
                <div className="flex items-center gap-x-4">
                  <input type="text" placeholder="ایمیل شما" className="w-full max-w-[392px] flex-shrink-0 placeholder:text-body5 placeholder:text-neutral-600 border border-solid border-white rounded-lg py-2 px-4 bg-transparent" />
                  <button className="bg-primary py-2 px-4 rounded-lg">ثبت</button>
                </div>
              </div>
              <div className="flex sm:hidden flex-col text-body5 gap-y-2 font-light">
                <span>تماس با پشتیبانی: ۰۲۱-۳۴۵۶۰۰۰</span>
                <span>پاسخگویی 24 ساعته، 7 روز هفته</span>
              </div>
            </div>
            <div className="flex flex-col mt-4 sm:mt-0">
              <p className="hidden sm:block text-body4 mb-6">ما را در شبکه های اجتماعی دنبال کنید.</p>
              <div className="flex items-center justify-between sm:justify-start gap-x-6">
                <Youtube className="w-8 h-8"/>
                <Facebook className="w-7 h-7"/>
                <Instagram  className="w-7 h-7"/>
              </div>
              <span className="sm:hidden text-center text-body5 font-light mt-2">تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد</span>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container py-14 flex flex-col lg:flex-row gap-y-14 lg:gap-y-0 items-center justify-between">
            <div className="w-full lg:w-[55%] flex flex-wrap justify-between items-start gap-x-6 gap-y-8">
              <div className="w-[45%] lg:w-auto">
                <p className="text-cp1 font-bold mb-4 border-b border-solid border-[#fff] pb-2">
                  همراه با کاستومی
                </p>
                <ul className="text-body4 flex flex-col gap-y-5">
                  <li>
                    <p>فروش محصولات</p>
                  </li>
                  <li>
                    <p>فرصت همکاری</p>
                  </li>
                  <li>
                    <p>تماس با ما</p>
                  </li>
                  <li>
                    <p>نقشه سایت</p>
                  </li>
                </ul>
              </div>
              <div className="w-[45%] lg:w-auto">
                <p className="text-cp1 font-bold mb-4 border-b border-solid border-[#fff] pb-2">
                  خدمات مشتریان
                </p>
                <ul className="text-body4 flex flex-col gap-y-5">
                  <li>
                    <p>سوالات متدوال</p>
                  </li>
                  <li>
                    <p>حریم خصوصی</p>
                  </li>
                  <li>
                    <p>ثبت شکایت</p>
                  </li>
                  <li>
                    <p>ضمانت نامه محصولات</p>
                  </li>
                </ul>
              </div>
              <div className="w-[45%] lg:w-auto">
                <p className="text-cp1 font-bold mb-4 border-b border-solid border-[#fff] pb-2">
                  راهنمای خرید
                </p>
                <ul className="text-body4 flex flex-col gap-y-5">
                  <li>
                    <p>راهنمای ثبت سفارش</p>
                  </li>
                  <li>
                    <p>شیوه های پرداخت</p>
                  </li>
                  <li>
                    <p>نحوه ارسال سفارش ها</p>
                  </li>
                  <li>
                    <p>شرایط بازگرداندن محصول</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-auto hidden sm:block">
              <h6 className="text-h6 font-bold text-center mb-10">
                فروشگاه اینترنتی کاستومی
              </h6>
              <div className="flex items-center justify-between gap-x-8 text-body5 mb-16">
                <p>تماس با پشتیبانی: ۰۲۱۳۴۵۶۰۰۰</p>
                <p>پاسخگویی ۲۴ ساعته‌، ۷ روز هفته</p>
              </div>
              <div className="flex items-center gap-x-8 justify-around">
                <img src={eNamad.src} className="w-[55px] h-[65px]" alt="" />
                <img src={Samandehi.src} className="w-[55px] h-[65px]" alt="" />
                <img src={ecUnion.src} className="w-[55px] h-[65px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
