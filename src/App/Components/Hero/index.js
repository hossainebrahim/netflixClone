import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const index = () => {
  return (
    <div className=" relative">
      <img
        className="rounded-xl max-h[370px] object-cover w-[100%]"
        src="https://assets-cache0.moviebreak.de/system/bilder/story/photo/618fa4906e73336f8b0c0000/bwpkqqexLHIEywbZ9vz9hLZ5ITb.jpg"
        alt=""
      />
      <div className="absolute md:top-12 md:left-12 top-5 left-5">
        <h1 className="md:text-6xl text-4xl font-bold text-white">
          Baymax 2.0!
        </h1>
        <button className="bg-red-500 flex items-center p-3 rounded-lg text-white mt-5">
          <AiOutlinePlayCircle size={22} />
          <span className="ml-3"></span>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default index;
