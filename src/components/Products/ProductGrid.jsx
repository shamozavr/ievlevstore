import { ProductCard } from "./ProductCard/ProductCard";
import products from "../../assets/images.json";
import img1 from "../../assets/images/gsm.jpeg";

export function ProductGrid() {
  console.log(products);
  console.log(img1);
  return (
    <div className="my-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
        Наша продукция
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
        Только от проверенных поставщиков
      </p>
      <div className="flex w-full justify-around gap-4 mx-auto flex-wrap">
        {products.map((el) => {
          return (
            <ProductCard
              key={el.id}
              url={img1}
              header={el.header}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
}
