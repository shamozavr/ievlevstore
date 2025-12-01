import { useState } from "react";

export function Footer() {
  const [openSections, setOpenSections] = useState({
    company: false,
    navigation: false,
    contacts: false,
    bank: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:mx-auto md:block">
            <button
              className="md:hidden flex items-center justify-between w-full text-white mb-4"
              onClick={() => toggleSection("company")}
            >
              <h3 className="text-white">ООО СП АРТЕЛЬ</h3>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openSections.company ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <h3 className="text-white mb-4 hidden md:block">ООО СП АРТЕЛЬ</h3>
            <div
              className={`md:block ${
                openSections.company ? "block" : "hidden md:block"
              }`}
            >
              <ul className="space-y-1">
                <li>ИНН: 5263156720</li>
                <li>КПП: 526301001</li>
                <li>ОГРН: 1255200026190</li>
                <li>
                  Адрес: 603158, Нижегородская область, г. Нижний Новгород, ул.
                  Зайцева, дом 31, офис П1
                </li>
              </ul>
            </div>
          </div>

          {/* Bank Details */}
          <div className="lg:mx-auto md:block">
            <button
              className="md:hidden flex items-center justify-between w-full text-white mb-4"
              onClick={() => toggleSection("bank")}
            >
              <h3 className="text-white">Банковские реквизиты</h3>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openSections.bank ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <h3 className="text-white mb-4 hidden md:block">
              Банковские реквизиты
            </h3>
            <div
              className={`md:block ${
                openSections.bank ? "block" : "hidden md:block"
              }`}
            >
              <ul className="space-y-1">
                <li>
                  Банк: ВОЛГО-ВЯТСКИЙ БАНК
                  <br />
                  ПАО СБЕРБАНК
                </li>
                <li>БИК: 042202603</li>
                <li>К/с: 30101810900000000603</li>
                <li>Р/с: 40702810142710003553</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:mx-auto md:block">
            <button
              className="md:hidden flex items-center justify-between w-full text-white mb-4"
              onClick={() => toggleSection("navigation")}
            >
              <h4 className="text-white">Навигация</h4>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openSections.navigation ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <h4 className="text-white mb-4 hidden md:block">Навигация</h4>
            <div
              className={`md:block ${
                openSections.navigation ? "block" : "hidden md:block"
              }`}
            >
              <ul className="space-y-1">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-white transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Услуги
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Товары
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:mx-auto md:block">
            <button
              className="md:hidden flex items-center justify-between w-full text-white mb-4"
              onClick={() => toggleSection("contacts")}
            >
              <h4 className="text-white">Контакты</h4>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openSections.contacts ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <h4 className="text-white mb-4 hidden md:block">Контакты</h4>
            <div
              className={`md:block ${
                openSections.contacts ? "block" : "hidden md:block"
              }`}
            >
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+78314101132"
                    className="hover:text-white transition-colors"
                  >
                    +7 (831) 410-11-32
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sp-artel@yandex.ru"
                    className="hover:text-white transition-colors"
                  >
                    sp-artel@yandex.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2025 ООО СП АРТЕЛЬ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
