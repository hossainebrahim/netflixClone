import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav className=" flex justify-between items-center p-5">
      <div className="flex items-center">
        <a href="" className="block w-40">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt=""
          />
        </a>
        <div className="space-x-7 ml-10 ">
          <a href="" className="text-gray-400 hover:underline">
            Home
          </a>
          <a href="" className="text-gray-400 hover:underline">
            Movies
          </a>
          <a href="" className="text-gray-400 hover:underline">
            Services
          </a>
          <a href="" className="text-gray-400 hover:underline">
            Cartoons
          </a>
        </div>
      </div>
      <div className="text-gray-50 flex space-x-5">
        <span className=" cursor-pointer">
          <BiSearchAlt size={30} />
        </span>
        <span className=" cursor-pointer">
          <AiOutlineBell size={30} />
        </span>
      </div>
    </nav>
  );
};
