import React from "react";

const Stats = () => {
  return (
    <div>
    <h2 className="flex justify-center items-center mb-4 text-2xl">
        Basic Knolage of Quran-Al-Qareem
    </h2>
      <section class="text-gray-600 test body-font bg-neutral-200/70 mx-5 rounded-xl">
        <div class="container px-5 py-10 mb-20 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                30
              </h2>
              <p class="leading-relaxed">Parah</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              114 
              </h2>
              <p class="leading-relaxed">Surahs</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              6346 
              </h2>
              <p class="leading-relaxed">Verses </p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              15 
              </h2>
              <p class="leading-relaxed">Sajda-e-Tilawat</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;

