import React from "react";
import { Link } from "react-router-dom";
import Stats from "../Components/Stats";
// import SlderComp from "../Components/Slider";
import MovingNames from "../Components/MovingNames";
// import SliderComponent from "../Components/Slider";
;

const Home = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="text-gray-600 body-font mt-6">
        <div className="container px-5 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">
            "The Quran is a guidance for mankind, a clear evidence of guidance"
            <br className="hidden sm:block" /> Surah Al-Baqarah (2:185)
          </h1>

          {/* <SliderComponent/> */}

          <hr className="border-t-2 border-gray-600/40 mb-10" />

          <h2 className="flex justify-center items-center mb-4 text-2xl">
            Main Surahs Of Quran-Al-Qareem
          </h2>

          <div className="flex justify-center flex-wrap">
            <div className="p-4 md:w-1/3 flex justify-center">
              <div className="flex flex-col test items-center bg-gray-200 rounded-lg overflow-hidden min-h-48">
                <div className="p-6">
                  <h2 className="text-gray-900 text-xl font-medium mb-2 text-center">
                    Surah Al-Baqarah
                  </h2>
                  <p className="leading-relaxed text-center">
                    The sūrah encompasses a variety of topics and contains
                    several commands for Muslims such as enjoining fasting on
                    the believer during the month of Ramadan.
                  </p>
                </div>
                <div className="pb-2 border-t border-gray-200">
                  <Link
                    to="/quran/2"
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex justify-center">
              <div className="flex flex-col test items-center bg-gray-200 rounded-lg overflow-hidden min-h-48">
                <div className="p-6">
                  <h2 className="text-gray-900 text-xl text-center font-medium mb-2">
                    Surah Al-Yaseen
                  </h2>
                  <p className="leading-relaxed text-center">
                    Surah Yaseen is one of the great Surahs of the Quran that
                    generally spoke about Tawheed, revelation, and the
                    hereafter. It tells the story of the tyrant village as a
                    lesson for people.
                  </p>
                </div>
                <div className="pb-2 border-t border-gray-200">
                  <Link
                    to="/quran/36"
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex justify-center">
              <div className="flex flex-col test items-center bg-gray-200 rounded-lg overflow-hidden min-h-48">
                <div className="p-6">
                  <h2 className="text-gray-900 text-xl text-center font-medium mb-2">
                    Surah Al-Rehman
                  </h2>
                  <p className="leading-relaxed text-center">
                    Throughout this surah, Allah lists blessing after blessing
                    and sign aft er sign, enumerating various means through
                    which His mercy has manifested upon humanity.
                  </p>
                </div>
                <div className="pb-2 border-t border-gray-200">
                  <Link
                    to="/quran/55"
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats Section */}

      <hr className="border-t-2 border-gray-600/40 mb-10 mt-10 mx-9" />
      <Stats />

      {/* calling names of Allah */}
      <hr className="border-t-2 border-gray-600/40 mb-10 mt-10 mx-9" />
      <MovingNames/>

    </div>
  );
};

export default Home;
