import React from "react";
import { useState } from "react";
import { ImageList } from "../../index";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const Service = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="bg-green-300/30">
      <div className="py-10">
        <HeaderTitle
          title="Layanan Kami"
          subtitle="Kami menyediakan layanan terbaik untuk Anda"
          description="Dengan kualitas yang terjamin dan pelayanan yang ramah, kami siap melayani Anda dengan sepenuh hati."
        />
      </div>
      <div className="py-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 place-items-center">
          {ImageList.map((item) => (
            <div
              key={item.id}
              className="text-center mx-auto max-w-[300px] bg-green-200 relative shadow-lg rounded-lg hover:bg-green-300 duration-300 group h-full"
            >
              <div className="h-[110px]">
                <img
                  className="max-w-[250px] mx-auto -translate-y-16 duration-300 group-hover:scale-110"
                  src={item.img}
                  alt={item.name}
                />
              </div>

              <div className="p-10">
                <h3 className="text-lg inline-block bg-green-600 text-white px-5 mt-5 rounded-full mb-3">
                  {item.name}
                </h3>
                <p
                  className={`text-justify ${expandedId === item.id ? "" : "line-clamp-3"}`}
                >
                  {item.description}
                </p>
                <button
                  className="mt-4 text-green-600 hover:text-green-800 font-semibold"
                  onClick={() =>
                    setExpandedId(expandedId === item.id ? null : item.id)
                  }
                >
                  {expandedId === item.id ? "Tutup" : "Baca Selengkapnya"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
