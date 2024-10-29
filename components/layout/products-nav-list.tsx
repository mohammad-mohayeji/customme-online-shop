import { ArrowDown2 } from "iconsax-react";

type SubMenuType = {
  children?: React.ReactNode;
  className?: string;
  links: {
    text: string;
    href: string;
  }[];
};

export function SubMenu({ links }: SubMenuType) {
  return (
    <nav className="hidden group-hover:block absolute left-0 right-0 w-full bg-[#eaeded] mt-4 border-t border-solid border-neutral-400">
      <div className="container">
        <ul className="flex items-center gap-x-6">
          {links.map((link) => (
            <li>
              <a href={link.href} className="block py-4 hover:text-primary">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function ProductsNavList() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center justify-between text-xs xl:text-[14px] text-neutral-900">
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">کامپیوتر و قطعات</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "قطعات کامپیوتر", href: "#" },
              { text: "لوازم جانبی کامپیوتر", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">لپ تاپ و قطعات</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "لپ تاپ", href: "#" },
              { text: "قطعات لپ تاپ", href: "#" },
              { text: "لوازم جانبی کامپیوتر", href: "#" },
              { text: "کیف و کوله", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">موبایل و گجت</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "گوشی موبایل", href: "#" },
              { text: "ساعت هوشمند", href: "#" },
              { text: "لوازم جانبی موبایل", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">تبلت</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "تبلت", href: "#" },
              { text: "کتاب خوان", href: "#" },
              { text: "صفحات دیجیتال", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">اداری</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "لوازم اداری", href: "#" },
              { text: "لوازم فروشگاهی", href: "#" },
              { text: "هوشمند سازی", href: "#" },
              { text: "مواد مصرفی", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">شبکه و سرور</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "تجهیزات شبکه", href: "#" },
              { text: "تجهیزات VOIP", href: "#" },
              { text: "ملزومات شبکه", href: "#" },
              { text: "سرور", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">کنسول و بازی</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "کنسول و لوازم بازی", href: "#" },
              { text: "میز و صندلی گیمینگ", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">دوربین و جانبی</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "دوربین عکاسی دیجیتال", href: "#" },
              { text: "دوربین فیلمبرداری", href: "#" },
              { text: "لوازم عکاسی و فیلمبرداری", href: "#" },
              { text: "لنز دوربین", href: "#" },
            ]}
          />
        </li>
        <li className="group cursor-default py-4">
          <span className="flex items-center relative">
            <p className="ml-2">کامپیوتر آماده</p>
            <ArrowDown2 className="w-4 h-4" />
            <div className="hidden group-hover:block h-1 bg-primary w-full absolute -bottom-4"></div>
          </span>
          <SubMenu
            links={[
              { text: "آل این وان", href: "#" },
              { text: "کیس آماده", href: "#" },
              { text: "تین کلاینت", href: "#" },
              { text: "اسمبل آنلاین", href: "#" },
            ]}
          />
        </li>
      </ul>
    </nav>
  );
}
