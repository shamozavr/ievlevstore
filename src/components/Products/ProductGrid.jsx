import { ProductCard } from "./ProductCard/ProductCard";
import products from "../../assets/images.json";
// import img1 from "../../assets/images/gsm.jpeg";
// import img2 from "../../assets/images/organosilicon_liquids.webp";
// import img3 from "../../assets/images/paint_and_varnish_materials.jpg";
// import img4 from "../../assets/images/glue.jpg";
// import img5 from "../../assets/images/el_isolate.jfif";
// import img6 from "../../assets/images/tools.jfif";
// import img7 from "../../assets/images/RTI.webp";
// import img8 from "../../assets/images/cloack.jpg";

export function ProductGrid() {
  // console.log(products);
  // console.log(img1);
  // console.log(img2);
  // console.log(img3);
  // console.log(img4);
  // console.log(img5);
  // console.log(img6);
  // console.log(img7);
  // console.log(img8);
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
              url={el["url"]}
              header={el.header}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
}
