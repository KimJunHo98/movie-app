import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams(); // 클릭한 영화의 id 값을 얻어옴, id 값을 그대로 가져오기 위해 변수를 객체처리함
    console.log(id);

    const getMovieDetail = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();

        console.log(json);
    };

    useEffect(() => {
        getMovieDetail();
    }, []);

    return (
        <>
            <section id="detail">
                <div>Detail</div>
                {/* <ul>
          <li>genre: </li>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>{movie.summary}</p> */}
            </section>
        </>
    );
};

export default Detail;
