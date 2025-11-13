import React from "react";
import competiveAdvantage from "../assets/competiveAdvantage.svg";



const Services = () => {
  return (

      <div className="grid min-h-[50vh] p-9 bg-[#f8f8ff] w-full grid-cols-1
      space-y-6 xl:space-y-0 xl:grid-cols-2 rounded-2xl place-content-center place-items-center">
        <img src={competiveAdvantage} className="rounded-2xl h-5/6 md:h-5/7 xl:h-5/6" alt="" />
        <div className="px-10 space-y-5">
          <h3 className="text-3xl font-bold text-center">Empowering Businesses Through Cloud Innovation</h3>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            quam sed odit. Dignissimos consectetur, similique amet, tempora at
            soluta voluptatem nihil optio, repellat iste adipisci ipsum vel odit
            facere explicabo consequuntur provident praesentium saepe accinima
            quod consequatur, vel cum rem assumenda quo provident non quaerat.
            Modi, dignissimos?{" "}
          </p>
        </div>
      </div>
   
  );
};

export default Services;
