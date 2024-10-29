"use client";

import { useState } from "react";
import { ArrowDown2, FilterAdd, Sort, CloseCircle } from "iconsax-react";
import PriceRangeSlider from "./price-range-slider";

export default function ProductsFilterBox() {
  const [openDropdowns, setOpenDropdowns] = useState<{ [prop: number]: boolean }>({});
  const [isOpenSortingBox, setIsOpenSortingBox] = useState(false);
  const [isOpenFilterSidebar, setIsOpenFilterSidebar] = useState(false);

  const toggleDropdown = (id: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div>
      <div className="hidden md:block border border-solid border-neutral-400 rounded-2xl p-4 self-start">
        <div className="flex items-center justify-between mb-4">
          <p className="text-body3 text-neutral-1000">فیلترها</p>
          <button className="text-cp3 font-bold text-primary">حذف فیلترها</button>
        </div>
        <div className="flex flex-col gap-y-2 text-neutral-900">
          <div className="py-2 px-3 border border-solid border-neutral-300 rounded-lg">
            <button onClick={(_e) => toggleDropdown(1)} className="flex items-center justify-between w-full">
              <span className="text-body4">برند</span>
              <ArrowDown2 variant="Bold" className="w-5 h-5" />
            </button>
            <div className={`${openDropdowns[1] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
              <ul className="px-2 py-4 flex flex-col gap-y-2 text-cp1 font-bold">
                <li className="flex justify-between items-center">
                  <span>اپل</span>
                  <input type="checkbox" value="apple" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>سامسونگ</span>
                  <input type="checkbox" value="samsung" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>شیائومی</span>
                  <input type="checkbox" value="xiaomi" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>هوآوی</span>
                  <input type="checkbox" value="huawei" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
              </ul>
            </div>
          </div>
          <div className="py-2 px-3 border border-solid border-neutral-300 rounded-lg">
            <button onClick={(_e) => toggleDropdown(2)} className="flex items-center justify-between w-full">
              <span className="text-body4">محدوده قیمت</span>
              <ArrowDown2 variant="Bold" className="w-5 h-5" />
            </button>
            <div className={`${openDropdowns[2] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
              <div className="py-4 px-[10px]">
                <PriceRangeSlider />
              </div>
            </div>
          </div>
          <div className="py-2 px-3 border border-solid border-neutral-300 rounded-lg">
            <button onClick={(_e) => toggleDropdown(3)} className="flex items-center justify-between w-full">
              <span className="text-body4">ظرفیت حافظه داخلی</span>
              <ArrowDown2 variant="Bold" className="w-5 h-5" />
            </button>
            <div className={`${openDropdowns[3] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
              <ul className="px-2 py-4 flex flex-col gap-y-2 text-cp1 font-bold">
                <li className="flex justify-between items-center">
                  <span>۳۲</span>
                  <input type="checkbox" value="32" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>۶۴</span>
                  <input type="checkbox" value="64" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>۱۲۸</span>
                  <input type="checkbox" value="128" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>۲۵۶</span>
                  <input type="checkbox" value="256" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>۵۱۲</span>
                  <input type="checkbox" value="512" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
              </ul>
            </div>
          </div>
          <div className="py-2 px-3 border border-solid border-neutral-300 rounded-lg">
            <button onClick={(_e) => toggleDropdown(4)} className="flex items-center justify-between w-full">
              <span className="text-body4">تعداد سیم کارت</span>
              <ArrowDown2 variant="Bold" className="w-5 h-5" />
            </button>
            <div className={`${openDropdowns[4] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
              <ul className="px-2 py-4 flex flex-col gap-y-2 text-cp1 font-bold">
                <li className="flex justify-between items-center">
                  <span>تک سیم کارت</span>
                  <input type="checkbox" value="1" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <span>دو سیم کارت</span>
                  <input type="checkbox" value="2" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_7px_2px_rgba(0,0,0,.1)] p-3">
        <div className="flex items-center bg-primary rounded-lg">
          <button onClick={(_e) => setIsOpenFilterSidebar(true)} className="w-1/2 flex items-center justify-center text-white px-2 py-4">
            <FilterAdd className="h-6 w-6 ml-2" />
            <span className="text-body5 sm:text-body4">فیلتر محصولات</span>
          </button>
          <div className="w-[1px] h-8 bg-white"></div>
          <button onClick={(_e) => setIsOpenSortingBox(true)} className="w-1/2 flex items-center justify-center text-white px-2 py-4">
            <Sort className="h-6 w-6 ml-2" />
            <span className="text-body5 sm:text-body4">مرتب سازی</span>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <div onClick={(_e) => setIsOpenSortingBox(false)} className={`${isOpenSortingBox ? "block" : "hidden"} fixed right-0 left-0 bottom-0 top-0 bg-neutral-600 opacity-50 z-[60]`}></div>
        <div className={`${isOpenSortingBox ? "bottom-0" : "-bottom-full"} fixed bottom-0 left-0 right-0 bg-white z-[70] rounded-tl-xl rounded-tr-xl text-neutral-900 transition-all duration-300`}>
          <div className="flex justify-between text-body4 p-4">
            <span>مرتب سازی بر اساس:</span>
            <button onClick={(_e) => setIsOpenSortingBox(false)}>
              <CloseCircle />
            </button>
          </div>
          <hr className="h-px border-0 bg-neutral-500 w-full" />
          <div>
            <form className="flex flex-col gap-y-4 px-6 py-4 text-body4">
              <div className="flex items-center">
                <input id="most_expensive" name="sort" type="radio" className="form-radio text-primary focus:ring-0 focus:ring-offset-0 ml-2" />
                <label htmlFor="most_expensive">گران ترین</label>
              </div>
              <div className="flex items-center">
                <input id="cheapest" name="sort" type="radio" className="form-radio text-primary focus:ring-0 focus:ring-offset-0 ml-2" />
                <label htmlFor="cheapest">ارزان ترین</label>
              </div>
              <div className="flex items-center">
                <input id="best_sellet" defaultChecked={true} name="sort" type="radio" className="form-radio text-primary focus:ring-0 focus:ring-offset-0 ml-2" />
                <label htmlFor="best_sellet">پر فروش ترین</label>
              </div>
              <div className="flex items-center">
                <input id="most_visited" name="sort" type="radio" className="form-radio text-primary focus:ring-0 focus:ring-offset-0 ml-2" />
                <label htmlFor="most_visited">پر بازدید ترین</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div onClick={(_e) => setIsOpenFilterSidebar(false)} className={`${isOpenFilterSidebar ? "block" : "hidden"} fixed right-0 left-0 bottom-0 top-0 bg-neutral-600 opacity-50 z-[50]`}></div>
        <div className={`${isOpenFilterSidebar ? "right-0" : "-right-full"} transition-all duration-300 w-[280px] bg-white min-h-screen fixed  top-0 bottom-0 z-[50]`}>
          <div className="text-neutral-900">
            <div className="border-b">
              <button onClick={(_e) => toggleDropdown(1)} className="p-4 flex items-center justify-between w-full">
                <span className="text-[15px]">برند</span>
                <ArrowDown2 className="w-5 h-5" />
              </button>
              <div className={`${openDropdowns[1] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
                <form className="py-4 px-6 flex flex-col gap-y-2 text-cp1 font-bold">
                  <div className="flex justify-between items-center">
                    <label>اپل</label>
                    <input type="checkbox" value="apple" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>سامسونگ</label>
                    <input type="checkbox" value="samsung" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>شیائومی</label>
                    <input type="checkbox" value="xiaomi" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>هوآوی</label>
                    <input type="checkbox" value="huawei" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                </form>
              </div>
            </div>
            <div className="border-b">
              <button onClick={(_e) => toggleDropdown(2)} className="p-4 flex items-center justify-between w-full">
                <span className="text-[15px]">محدوده قیمت</span>
                <ArrowDown2 className="w-5 h-5" />
              </button>
              <div className={`${openDropdowns[2] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
                <div className="pb-2 px-8">
                  <PriceRangeSlider />
                </div>
              </div>
            </div>
            <div className="border-b">
              <button onClick={(_e) => toggleDropdown(3)} className="p-4 flex items-center justify-between w-full">
                <span className="text-[15px]">ظرفیت حافظه داخلی</span>
                <ArrowDown2 className="w-5 h-5" />
              </button>
              <div className={`${openDropdowns[3] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
                <form className="py-4 px-6 flex flex-col gap-y-2 text-cp1 font-bold">
                  <div className="flex justify-between items-center">
                    <label>32</label>
                    <input type="checkbox" value="32" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>64</label>
                    <input type="checkbox" value="64" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>128</label>
                    <input type="checkbox" value="128" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>256</label>
                    <input type="checkbox" value="256" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>512</label>
                    <input type="checkbox" value="512" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                </form>
              </div>
            </div>
            <div className="border-b">
              <button onClick={(_e) => toggleDropdown(4)} className="p-4 flex items-center justify-between w-full">
                <span className="text-[15px]">تعداد سیم کارت</span>
                <ArrowDown2 className="w-5 h-5" />
              </button>
              <div className={`${openDropdowns[4] ? "max-h-60" : ""} max-h-0 overflow-hidden transition-all duration-500`}>
                <form className="py-4 px-6 flex flex-col gap-y-2 text-cp1 font-bold">
                  <div className="flex justify-between items-center">
                    <label>تک سیم کارت</label>
                    <input type="checkbox" value="1" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <label>دو سیم کارت</label>
                    <input type="checkbox" value="2" className="form-checkbox w-4 h-4 focus:ring-0 focus:ring-offset-0 text-primary rounded" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
