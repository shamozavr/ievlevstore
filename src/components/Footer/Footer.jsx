import React from "react";

export function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <a href="#" className="hover:underline">
            IevlevStore
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              О нас
            </a>
          </li>
          <li>
            <a href="#products" className="hover:underline me-4 md:me-6">
              Товары
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Услуги
            </a>
          </li>
          <li>
            <div className="flex flex-col">
              <a
                href="tel:+79991111111"
                className="hover:underline me-4 md:me-6"
              >
                +7-999-111-11-11
              </a>
              <a href=""></a>
            </div>
            <a
              href="mailto:salesmanager@ievlevstore.ru"
              className="hover:underline me-4 md:me-6"
            >
              salesmanager@ievlevstore.ru
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
