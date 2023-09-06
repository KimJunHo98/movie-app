import React, { useEffect } from "react";
import { useState } from "react";
import { API_URL, API_KEY } from "./config/constans";

function App() {
  const [loading, setLoading] = useState(true);
  const [myMovies, setMyMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `${API_URL}/movie/popular?${API_KEY}&language=en-US`
    );
    const json = await response.json();
    const data = json.results;

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

  console.log(myMovies);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        myMovies.map((movie) => {
          return (
            <>
              <p>{movie.title}</p>
            </>
          );
        })
      )}
    </>
  );
}

export default App;
