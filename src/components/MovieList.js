import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movie, id }) => {
  return (
    <>
      <div key={movie.id} className="movie_list_box">
        <Link to={`/detail/${id}`}>
          {/* 클릭한 리스트의 디테일 페이지로 이동(해당 영화의 id 값도 넘겨줌) */}
          <div>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </div>
          <h3>{movie.title}</h3>
        </Link>
        <p>
          <span>{movie.year}</span>&nbsp;/&nbsp;<span>{movie.runtime} min</span>
          &nbsp;/&nbsp;
          <span>{movie.rating}</span>
        </p>
      </div>
    </>
  );
};

export default MovieList;
