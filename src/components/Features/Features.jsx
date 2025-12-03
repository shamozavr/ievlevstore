import { ProductCard } from "../Products/ProductCard/ProductCard";
import feature_1 from "../../assets/images/features/feature_1-1.jpeg";
import feature_2 from "../../assets/images/features/feature_2-1.jpeg";
import feature_3 from "../../assets/images/features/feature_3-1.jpeg";
const features = [
  {
    url: feature_1,
    title: "Покраска транспорта",
    titleHTML: (
      <>
        Покраска <span className="text-yellow-300">транспорта</span>
      </>
    ),
    description:
      "Полная и локальная покраска автомобилей. Покраска грузовиков, автобусов и сельхозтехники. Защитное покрытие для прицепов.",
  },
  {
    url: feature_2,
    title: "Покраска металлических изделий",
    description:
      "Антикоррозийная обработка. Декоративная покраска конструкций и изделий. Порошковая покраска.",
  },
  {
    url: feature_3,
    title: "Покраска стеклопластика",
    description:
      "Покраска кузовных деталей из стеклопластика. Покрытие для лодок и катеров, стойкое к воде и УФ-излучению. Покраска любых изделий из композитных материалов.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Мы специализируемся на нанесении защитных и декоративных покрытий на
            сложные поверхности, где важна точная технология.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ProductCard
              key={index}
              url={feature.url}
              header={feature.titleHTML ? feature.titleHTML : feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Направления наших работ охватывают все виды покрасочных услуг для
            транспорта, металлических и композитных изделий
          </p>
          <a
            className="border px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white hover:cursor-pointer transition-colors duration-300"
            href="tel:+78314101132"
          >
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
