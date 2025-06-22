export function Hero() {
  return (
    <section className="h-screen bg-cover bg-no-repeat bg-[url('https://avatars.mds.yandex.net/get-altay/6203703/2a00000189fcaa6626fa3eb33f3f85b3d16c/XXL_height')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-56 lg:py-80">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Надёжные материалы для бесперебойной работы
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          От клея до бензина — у нас есть всё, чтобы ваш бизнес не тормозил!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}
