import ProductItem from "@/components/products/product-item";
import ProductsFilterBox from "@/components/products/products-filterBox";
import ProductsGrid from "@/components/products/products-grid";

export default function ProductsPage() {
  return (
    <div className="px-12 lg:px-24">
      <ProductsGrid className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProductsFilterBox />
        <ProductsGrid className="grid sm:grid-cols-2 xl:grid-cols-3 md:col-span-2 xl:col-span-3 gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductsGrid>
      </ProductsGrid>
    </div>
  );
}
