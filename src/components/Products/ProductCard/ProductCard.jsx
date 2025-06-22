import { useEffect, useState } from "react";
const MAXMOBILEWIDTH = 480;

export function ProductCard({ url, header, description }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MAXMOBILEWIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MAXMOBILEWIDTH);
    };

    // Добавляем слушатель события resize
    window.addEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm min-w-full">
      <div
        className="p-5"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white stroke-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {header}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-white stroke-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {description}
        </p>
      </div>
    </div>
  ) : (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <img className="rounded-t-lg w-full h-60" src={url} alt="" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {header}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );

  // return (
  //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm max-sm:min-w-full">
  //     <img
  //       className="rounded-t-lg w-full h-60 max-sm:hidden"
  //       src={url}
  //       alt=""
  //     />
  //     <div className="p-5">
  //       <a href="#">
  //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
  //           {header}
  //         </h5>
  //       </a>
  //       <p className="mb-3 font-normal text-gray-700">{description}</p>
  //     </div>
  //   </div>
  // );
}
