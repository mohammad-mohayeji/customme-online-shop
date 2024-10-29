import { MedalStar } from "iconsax-react";
import ProductsGrid from "../products/products-grid";
import ProductItem from "../products/product-item";

export default function BestSellers() {
  return (
    <div className="pt-6">
      <div className="text-neutral-1000 flex items-center gap-x-4">
        <div className="flex items-center gap-x-4">
          <i>
            <MedalStar className="w-10 h-10" />
          </i>
          <h4 className="text-h5 xl:text-h4 font-bold text-nowrap">پر فروش ترین ها</h4>
        </div>
        <hr className="h-px border-0 bg-neutral-500 w-full max-w-[750px]" />
        <a href="#" className="text-btn1 font-medium text-primary text-nowrap">
          مشاهده بیشتر
        </a>
      </div>
      <div className="pt-6">
        <ProductsGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductsGrid>
      </div>
    </div>
  );
}
