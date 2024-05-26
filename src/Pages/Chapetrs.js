import React, { useState } from "react";
import Chapters from "../Data/ChaptersApi";
import { Link } from "react-router-dom";

const Chapetrs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredChapters = Chapters.filter((chapter) =>
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-12">
      <div className="flex justify-center pt-28">
        <input
          type="text"
          placeholder="Search Surah..."
          value={searchTerm}
          onChange={handleChange}
          className="p-2 px-20 text-center rounded-lg border border-gray-300 focus:outline-none focus:border-neutral-600"
        />
      </div>
      <div className="flex flex-wrap justify-center py-8">
        {filteredChapters.map((ele) => (
          <div className="S-card mx-5 my-5" key={ele.id}>
            <div className="first-content">
            <Link to={`/quran/${ele.chapter_number}`}  className="block">{ele.name}</Link>
            </div>
            <div className="second-content">
            <Link to={`/quran/${ele.chapter_number}`}  className="block">{ele.arabic_name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapetrs;
