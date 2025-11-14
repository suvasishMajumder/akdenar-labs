import React from "react";
import type { sectionObj } from "../types/types";

type ServicesProps = {
  item: sectionObj;
};

const Services: React.FC<ServicesProps> = ({ item }) => {
  return (
    <div
      className="grid min-h-[50vh] p-9 bg-[#f8f8ff] w-full grid-cols-1
      space-y-6 xl:space-y-0 xl:grid-cols-2 rounded-2xl place-content-center place-items-center"
    >
      <img
        src={item.image}
        className="rounded-2xl h-5/6 md:h-5/7 xl:h-5/6"
        alt={item.title}
      />
      <div className="px-10 space-y-5">
        <h3 className="text-3xl font-bold text-center">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Services;
