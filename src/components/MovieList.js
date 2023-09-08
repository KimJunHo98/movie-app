import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movie, id }) => {
    return (
        <>
            <div key={movie.id} className="movie_list_box">
                <Link to={`/detail/${id}`} className="move_to_detail">
                    {/* 클릭한 리스트의 디테일 페이지로 이동(해당 영화의 id 값도 넘겨줌) */}
                    <div class="movie_list_item">
                        <img src={movie.medium_cover_image} alt={movie.title} className="movie_poster" />
                        <h3 className="movie_title">{movie.title}</h3>
                        <ul className="movie_info_items">
                            <li className="movie_year">개봉일: {movie.year}년 /&nbsp;</li>
                            <li className="movie_runtime">상영시간: {movie.runtime}분 /&nbsp;</li>
                            <li className="movie_rating">후기: {movie.rating}점</li>
                        </ul>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default MovieList;
