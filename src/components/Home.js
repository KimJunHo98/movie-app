import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MoreBtn from "./MoreBtn";
import "../css/MovieList.css";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [myMovies, setMyMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const endPoint = "https://yts-proxy.now.sh/list_movies.json?minimum_rating=8.5&sort_by=download_count&limit=20&page=1";

    const getMovies = async (endPoint) => {
        const response = await fetch(endPoint);
        const json = await response.json();
        const data = json.data;
        const movies = data.movies;

        try {
            if (movies) {
                setMyMovies([...myMovies, ...movies]);
                setLoading(false);
                setCurrentPage(data.page_number);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getMovies(endPoint);
    }, []);

    const handleLoadMoreClick = () => {
        const endPoint = `https://yts-proxy.now.sh/list_movies.json?minimum_rating=8.5&sort_by=download_count&limit=20&page=${currentPage + 1}`;

        getMovies(endPoint);
    };

    return (
        <>
            {loading ? (
                <section id="loading">
                    <div className="container">
                        <div className="inner">
                            <div className="loading">
                                <h1 className="loading_state">loading...</h1>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section id="movie">
                    <div className="container">
                        <div className="inner">
                            <h2 className="ir_so">movie</h2>
                            <div className="movie">
                                <div className="movie_list_wrap">
                                    {myMovies.map((movie) => (
                                        <MovieList key={movie.id} movie={movie} id={movie.id} />
                                    ))}
                                </div>
                                <MoreBtn handleLoadMoreClick={handleLoadMoreClick} />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
