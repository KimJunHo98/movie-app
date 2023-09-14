import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams(); // 클릭한 영화의 id 값을 얻어옴, id 값을 그대로 가져오기 위해 변수를 객체처리함
    const [movie, setMovie] = useState([]);

    const getMovieDetail = async () => {
        const response = await fetch(`https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        const data = json.data;

        try {
            if (parseInt(id) === data.movie.id) {
                setMovie([data.movie]);
            }
        } catch (err) {
            console.error(err.message);
        }
    };
    console.log(movie);

    useEffect(() => {
        getMovieDetail();
    }, []);

    return (
        <>
            {id && (
                <section id="detail">
                    <div className="container">
                        <div className="inner">
                            <h2 className="ir_so">detail</h2>
                            {movie.map((item) => (
                                <div key={item.id} className="detail">
                                    <div className="detail_top">
                                        <img src={item.large_cover_image} alt={item.title} className="detail_img" />
                                        <div className="detail_info_items">
                                            <h2 className="detail_title">
                                                {item.title}
                                                <span className="detail_year">({item.year})</span>
                                            </h2>
                                            <ul className="detail_genres_list">
                                                {item.genres.map((genre) => (
                                                    <li key={genre} className="detail_genre">
                                                        {genre}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="detail_rating">({item.rating} / 10)</p>
                                            {item.description_full.length < 500 ? (
                                                <p className="detail_desc">{item.description_full}...</p>
                                            ) : (
                                                <p className="detail_desc">{item.description_full.slice(0, 500)}...</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="detail_center"></div>
                                    <div className="detail_bottom"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Detail;
