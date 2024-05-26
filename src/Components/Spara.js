import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const Yaseen = () => {
  const [ayat, setAyat] = useState([]);
  const [loader, setLoader] = useState(true);

  const params = useParams();
  const {id} = params

  const getSurahData = async () => {
    try {
      let surah = await fetch(
        `https://quranenc.com/api/v1/translation/sura/urdu_junagarhi/${id}`
      );
      surah = await surah.json();
      console.log(surah.result);
      setAyat(surah.result);
      setLoader(false);
    } catch (error) {
      setLoader(true);
      console.log("Error in Data Loading", error);
    }
  };

  useEffect(() => {
    getSurahData();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
        <div className="pt-32 ">
        <div className="   flex flex-col items-center">
            <h2 className="text-5xl font-bold">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
            <h3 className="mt-3">شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہایت رحم والا ہے</h3>
          </div>
        </div>
          <div className="pt-20 pb-16 flex justify-center items-center">
            <div className="w-full max-w-screen-lg">
              {Array.isArray(ayat) &&
                ayat.map((ele, index) => (
                  <div
                    className="bg-neutral-100 rounded-lg shadow-lg p-6 mb-8 w-full flex flex-col items-center"
                    key={index}
                  >
                    <h2 className="text-2xl font-bold mb-2">
                      Sura: {ele.sura}, aya: {ele.aya}
                    </h2>
                    <h3 className="text-3xl font-semibold mb-4 text-center">
                      {index+1}: {ele.arabic_text}
                    </h3>
                    <p className="text-gray-700 text-center">
                      {ele.translation}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Yaseen;
