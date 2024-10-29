import { Google } from "iconsax-react";

export default function AuthForm() {
  return (
    <div className="w-full max-w-lg py-16 px-20 border border-solid border-neutral-400 rounded-2xl">
      <div className="text-center mb-12">
        <h4 className="text-h4 font-bold text-neutral-1000 mb-24">
          به کاستومی خوش آمدید
        </h4>
        <h6 className="text-h6 font-bold text-neutral-900">ورود | ثبت نام</h6>
      </div>

      <form>
        <div className="flex flex-col gap-y-6 mb-8">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="username" className="text-body4 text-neutral-900">
              نام کاربری
            </label>
            <input
              id="username"
              className="outline-none border border-solid border-neutral-700 rounded-lg py-1.5"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="password" className="text-body4 text-neutral-900">
              کلمه عبور
            </label>
            <input
              id="password"
              className="outline-none border border-solid border-neutral-700 rounded-lg py-1.5"
              type="password"
            />
          </div>
        </div>
        <span className="text-cp3 font-bold text-neutral-1000 block text-center mb-8">
          ورود شما به منزله پذیرفتن قوانین و مقررات می باشد.
        </span>
        <div className="w-full flex flex-col gap-y-4">
          <button className="bg-primary rounded-lg text-[#fff] text-btn2 font-medium py-2.5">
            ورود به سایت
          </button>
          <button className="border border-solid border-neutral-900 rounded-lg text-btn2 font-medium py-2.5 flex items-center justify-center">
            <i className="ml-2"><Google className="w-5 h-5" /></i>
            <span> ورود با حساب گوگل</span>
          </button>
        </div>
      </form>
    </div>
  );
}
