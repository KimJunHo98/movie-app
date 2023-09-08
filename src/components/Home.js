import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import "../css/MovieList.css";
import More from "./More";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [myMovies, setMyMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&page=1");
        const json = await response.json();
        const data = json.data.movies;

        try {
            if (data) {
                setMyMovies(data);
                setLoading(false);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

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
                            <div className="movie">
                                <div className="movie_list_wrap">
                                    {myMovies.map((movie) => (
                                        <MovieList key={movie.id} movie={movie} id={movie.id} />
                                    ))}
                                </div>
                                <More />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
