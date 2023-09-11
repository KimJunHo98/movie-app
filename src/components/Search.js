import React, { useRef } from "react";

const Search = () => {
    const searchFormRef = useRef(null);

    const handleCancleClick = () => {
        searchFormRef.current.classList.remove("active");
    }

    return (
        <>
            <div className="search_box active" ref={searchFormRef}>
                <form className="search_form">
                    <label htmlFor="user_search" className="ir_so">
                        영화 검색
                    </label>
                    <input type="text" id="user_search" name="search" placeholder="어떤 영화를 찾으시나요?" className="search_input" />
                    <button onClick={handleCancleClick} type="button" className="cancle_btn">
                        X
                    </button>
                </form>
            </div>
        </>
    );
};

export default Search;
