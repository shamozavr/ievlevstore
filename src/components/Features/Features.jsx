import { Truck, Wrench, Waves } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Truck,
      title: "Покраска транспорта",
      items: [
        "Полная и локальная покраска автомобилей",
        "Покраска грузовиков, автобусов и сельхозтехники",
        "Защитное покрытие для прицепов",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Wrench,
      title: "Покраска металлических изделий",
      items: [
        "Антикоррозийная обработка",
        "Декоративная покраска конструкций и изделий",
        "Порошковая покраска",
      ],
      color: "bg-orange-500",
    },
    {
      icon: Waves,
      title: "Покраска стеклопластика",
      items: [
        "Покраска кузовных деталей из стеклопластика",
        "Покрытие для лодок и катеров, стойкое к воде и УФ-излучению",
        "Покраска любых изделий из композитных материалов",
      ],
      color: "bg-teal-500",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Мы специализируемся на нанесении защитных и декоративных покрытий на
            сложные поверхности, где важна точная технология.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 mb-6">{feature.title}</h3>

                {/* Items List */}
                <ul className="space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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
