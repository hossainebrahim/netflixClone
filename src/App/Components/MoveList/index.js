import React, { useEffect, useState } from "react";
import MoveCard from "../MoveCard";

const MoveList = ({ title, filter }) => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?${filter}`
    ).then((res) => res.json());
    setMovies(response.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="my-12">
      <h3 className="text-gray-100 text-3xl font-medium">{title}</h3>
      <div className="my-7 flex items-start flex-wrap justify-between">
        {movies?.map((movie) => (
          <MoveCard movie={movie} {...movie} key={movie?.id} />
        ))}
      </div>
    </div>
  );
};

export default MoveList;
