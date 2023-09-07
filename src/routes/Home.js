import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import "../css/MovieList.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [myMovies, setMyMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts-proxy.now.sh/list_movies.json?minimum_rating=8.8&sort_by=year&page=1"
    );
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
        <h1>loading...</h1>
      ) : (
        <div className="movie_list_wrap">
          {myMovies.map((movie) => (
            <MovieList key={movie.id} movie={movie} id={movie.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
