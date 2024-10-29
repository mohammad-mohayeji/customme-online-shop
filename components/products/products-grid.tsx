type ProductsGridType = {
  children: React.ReactNode;
  className?: string;
};

export default function ProductsGrid({ children, className }: ProductsGridType) {
  return (
    <div className={`${className ? className : ""}`}>
      {children}
    </div>
  );
}
