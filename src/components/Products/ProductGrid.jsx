import { ProductCard } from "./ProductCard/ProductCard";

const products = [
  {
    id: 1,
    header: "Горюче-смазочные материалы",
    description: "Чтобы смазать и поджечь",
    url: "./src/assets/gsm.jpeg",
  },
  {
    id: 2,
    header: "Кремнийорганические жидкости",
    description: "Разжижили кремний и органику",
    url: "./src/assets/organosilicon_liquids.webp",
  },
  {
    id: 3,
    header: "Лакокрасочные материалы",
    description: "Полачим покрасим, будет не бита не крашена",
    url: "./src/assets/paint_and_varnish_materials.jpg",
  },
  {
    id: 4,
    header: "Клеевые материалы",
    description: "Осталось только где-то пакетик раздобыть",
    url: "./src/assets/glue.jpg",
  },
  {
    id: 5,
    header: "Электроизоляционные материалы",
    description: "Заизолируйся, а то сгоришь на работе",
    url: "./src/assets/el_isolate.jfif",
  },
  {
    id: 6,
    header: "Инструмент",
    description: "Прикрути приколоти",
    url: "./src/assets/tools.jfif",
  },
  {
    id: 7,
    header: "Резинотехнические изделия",
    description:
      "Прокладки, трубки, патрубки, втулки, уплотнители. Женщины кончились 😔",
    url: "./src/assets/RTI.webp",
  },
  {
    id: 8,
    header: "Технические ткани",
    description: "Мама сшила мне штаны из березовой коры",
    url: "./src/assets/cloack.jpg",
  },
];

export function ProductGrid() {
  return (
    <div class="my-10 px-4 flex flex-col items-center">
      <h2 class="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
        Наша продукция
      </h2>
      <p class="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
        Только от проверенных поставщиков
      </p>
      <div className="flex w-full justify-around gap-4 mx-auto flex-wrap">
        {products.map((el) => {
          return (
            <ProductCard
              id={el.id}
              url={el.url}
              header={el.header}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
}
