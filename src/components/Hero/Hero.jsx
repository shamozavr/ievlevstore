import heroImage from "../../assets/images/hero.jpg";

export function Hero() {
  return (
    <section
      className="flex items-center min-h-screen bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-8 mt-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Точная покраска <br></br> Комплексное снабжение
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Профессиональная покраска любого транспорта, металла и стеклопластика:
          от локального ремонта до антикоррозийной защиты и декоративного
          покрытия.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Комплексное снабжение предприятий качественными материалами от ведущих
          производителей.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="tel:+78314101132"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 transition-colors duration-300"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}
