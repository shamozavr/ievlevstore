import { ProductCard } from "./ProductCard/ProductCard";
// import products from "../../../public/assets/images.json";
import img1 from "../../assets/images/gsm.jpeg";
import img2 from "../../assets/images/organosilicon_liquids.jfif";
import img3 from "../../assets/images/paint_and_varnish_materials.jfif";
import img4 from "../../assets/images/glue.jfif";
import img5 from "../../assets/images/el_isolate.jfif";
import img6 from "../../assets/images/tools.jfif";
import img7 from "../../assets/images/RTI_3.jfif";
import img8 from "../../assets/images/cloack.jfif";

const products = [
  {
    id: 1,
    header: "Горюче-смазочные материалы",
    description:
      "Масла, смазки и топливные присадки для промышленного и транспортного оборудования",
    url: img1,
  },
  {
    id: 2,
    header: "Кремнийорганические жидкости",
    description:
      "Термостабильные силиконовые жидкости и смазки для высокотемпературных применений",
    url: img2,
  },
  {
    id: 3,
    header: "Лакокрасочные материалы",
    description:
      "Промышленные краски, лаки и защитные покрытия для металла и других поверхностей",
    url: img3,
  },
  {
    id: 4,
    header: "Клеевые материалы",
    description:
      "Промышленные клеи, герметики и адгезивы различного назначения и состава",
    url: img4,
  },
  {
    id: 5,
    header: "Электроизоляционные материалы",
    description:
      "Материалы для электрической изоляции в электротехническом оборудовании",
    url: img5,
  },
  {
    id: 6,
    header: "Инструмент",
    description:
      "Ручной и механизированный инструмент для монтажа, ремонта и обслуживания",
    url: img6,
  },
  {
    id: 7,
    header: "Резинотехнические изделия",
    description:
      "Уплотнители, прокладки, втулки, трубки и другие изделия из резины и полимеров",
    url: img7,
  },
  {
    id: 8,
    header: "Технические ткани",
    description:
      "Специализированные ткани для промышленного, фильтровального и изоляционного применения",
    url: img8,
  },
];

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
    <div
      id="products"
      className="my-10 px-4 flex flex-col items-center border-t border-gray-200 pt-8"
    >
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
