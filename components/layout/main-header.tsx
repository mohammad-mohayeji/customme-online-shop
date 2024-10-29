"use client";

import { SearchNormal1, LoginCurve, ShoppingCart, User } from "iconsax-react";

import { useState } from "react";
import Link from "next/link";
import ProductsNavList from "./products-nav-list";
import Sidebar from "./sidebar";

import Logo from "/public/images/logo.png";
import TextLogo from "/public/images/text-logo.png";

export default function MainHeader() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="mb-44 lg:mb-44">
      <div className="bg-white border-b border-solid border-neutral-400 z-50 top-0 fixed w-full">
        <div className="container flex flex-col">
          <div className="flex-col lg:flex-row flex lg:items-center gap-y-6 lg:gap-y-0 py-4">
            <div className="flex items-center justify-between gap-x-4 w-full lg:w-auto lg:flex-grow">
              <div className="flex items-center gap-4 lg:hidden">
                <button onClick={(e) => setShowSidebar(true)} className="flex flex-col p-1 gap-1.5">
                  <span className="h-[3px] w-7 bg-neutral-900 rounded-2xl"></span>
                  <span className="h-[3px] w-7 bg-neutral-900 rounded-2xl"></span>
                  <span className="h-[3px] w-7 bg-neutral-900 rounded-2xl"></span>
                </button>
                <Link href="/cart">
                  <ShoppingCart className="w-7 h-7 text-neutral-900" />
                </Link>
              </div>
              <Link href="/" className="flex justify-center w-full max-w-[185px] items-center">
                <img src={Logo.src} alt="customme online shop logo." className="w-full max-w-[50px] hidden lg:block" />
                <img src={TextLogo.src} alt="customme online shop text-logo." className="w-full max-w-[135px]" />
              </Link>
              <div className="lg:hidden border-[2px] border-solid border-neutral-600 rounded-full p-1 bg-neutral-600">
                <Link href="/auth">
                  <User className="w-7 h-7 text-neutral-900" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-auto flex-grow-[2]">
              <div className="flex items-center justify-between border border-solid border-neutral-400 rounded-2xl py-2 px-6 w-full lg:max-w-[590px]">
                <input type="text" placeholder="جستجو" className="outline-none bg-transparent flex-grow placeholder:text-primary" />
                <SearchNormal1 className="text-primary size-6" />
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-x-6 flex-grow justify-end text-neutral-900">
              <Link href="/auth" className="flex items-center gap-1 py-2 hover:text-primary transition-colors">
                <LoginCurve />
                <span>ورود | ثبت نام</span>
              </Link>
              <Link href="/cart" className="flex items-center gap-1 py-2 hover:text-primary transition-colors">
                <ShoppingCart />
                <span>سبد خرید</span>
              </Link>
            </div>
          </div>
          <ProductsNavList />
        </div>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </header>
  );
}
