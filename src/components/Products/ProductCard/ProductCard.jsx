import React from "react";

export function ProductCard({ id, url, header, description }) {
  return (
    <div
      key={id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
    >
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
}
