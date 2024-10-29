import CartItem from "@/components/cart/cart-item";

import { ReceiptDisscount, ArrowLeft2 } from "iconsax-react";

export default function CartPage() {
  return (
    <main className="container flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-[62%]">
        <div className="flex flex-col gap-y-4 border border-solid border-neutral-400 rounded-2xl p-4 sm:p-6">
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className="w-full md:w-[38%]">
        <div className="flex flex-col border border-solid border-neutral-400 rounded-2xl p-6">
          <div>
            <h4 className="text-neutral-1000 text-h6 font-bold mb-3">
              کد تخفیف
            </h4>
            <span className="text-neutral-900 text-body5">
              کد تخفیف خود را در کادر زیر وارد کرده و دکمه ثبت رو بزنید تا در
              صورت داشتن اعتبار به سفارش شما اعمال شود.
            </span>
            <div className="flex items-center gap-x-2 my-4">
              <input type="text" className="w-full px-2 py-1 outline-none border border-solid border-neutral-400 rounded-lg"/>
              <button className="px-4 py-1 border border-solid border-primary text-primary rounded-lg">
                ثبت
              </button>
            </div>
          </div>
          <hr className="h-px border-[1px] border-solid border-neutral-400 w-full" />
          <div className="py-4 text-body5 lg:text-body4 text-neutral-900 flex flex-col gap-y-4">
            <p className="flex items-center justify-between">
              <span>مجموع قیمت کالاها:</span>
              <span>40,000,000 تومان</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="flex items-center">
                <ReceiptDisscount className="w-6 h-6 ml-2" />
                مجموع تخفیف روی کالاها:
              </span>
              <span>0 تومان</span>
            </p>
            <p className="flex items-center justify-between">
              <span>سود شما از خرید:</span>
              <span>0 تومان</span>
            </p>
            <p className="flex items-center justify-between">
              <span>هزینه ارسال:</span>
              <span>50000 تومان</span>
            </p>
          </div>
          <hr className="h-px border-[1px] border-solid border-neutral-400 w-full" />
          <div className="pt-4">
            <p className="text-body5 lg:text-body4 flex justify-between items-center mb-4">
              <span>مبلغ قابل پرداخت:</span>
              <span>40,050,000 تومان</span>
            </p>
            <button className="flex items-center justify-center text-btn2 font-medium bg-primary text-white rounded-lg w-full py-2">
              <span>ثبت سفارش</span>
              <ArrowLeft2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
