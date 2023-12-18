import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MoreBtn from "./MoreBtn";

const Home = ({searchFormRef}) => {
    const [loading, setLoading] = useState(true);
    const [myMovies, setMyMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchText, setSearchText] = useState("");

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
        const endPoint = `https://yts-proxy.now.sh/list_movies.json?minimum_rating=8.5&sort_by=download_count&limit=20&page=${
            currentPage + 1
        }`;

        getMovies(endPoint);
    };

    const handleCancleClick = () => {
        searchFormRef.current.classList.remove("active");
    };

    const onChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredMovie = myMovies.filter((movie) => {
        const movieTitleLower = movie.title.toLowerCase();
        const searchTextLower = searchText.toLowerCase();

        return movieTitleLower.includes(searchTextLower);
    });

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
                                <div className="search_box" ref={searchFormRef}>
                                    <form className="search_form" onSubmit={(e) => e.preventDefault()}>
                                        <label htmlFor="user_search" className="ir_so">
                                            영화 검색
                                        </label>
                                        <input
                                            type="text"
                                            id="user_search"
                                            name="search"
                                            value={searchText}
                                            placeholder="어떤 영화를 찾으시나요?"
                                            onChange={onChange}
                                            className="search_input"
                                        />
                                        <button onClick={handleCancleClick} type="button" className="cancle_btn">
                                            X
                                        </button>
                                    </form>
                                </div>
                                <div className="movie_list_wrap">
                                    {filteredMovie.length < 1 ? (
                                        <p className="nothing">검색한 영화 정보가 없습니다.</p>
                                    ) : (
                                        filteredMovie.map((movie) => <MovieList key={movie.id} movie={movie} id={movie.id} />)
                                    )}
                                </div>
                                {filteredMovie.length < 1 ? null : <MoreBtn handleLoadMoreClick={handleLoadMoreClick} />}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
