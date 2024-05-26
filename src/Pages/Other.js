import React from "react";
import lohyQurani from "../Data/OtherAli";
import SliderComponent from "../Components/Slider";
import Arkan from "../Components/Arkan";

const Other = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="pt-28 text-5xl text-center mb-6">Lohe Qurani "لوح قرآني"</h1>
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {lohyQurani.map((ele) => (
              <div className="p-4 w-full md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <h1 className="text-7xl text-center">{ele.name}</h1>
                  <div className="p-6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Arkan */}
        <h1 className="pt-28 text-5xl text-center">Arkan-e-Islam </h1>
        <Arkan/>

        {/* SLider */}
        <SliderComponent />

      </section>
    </div>
  );
};

export default Other;
