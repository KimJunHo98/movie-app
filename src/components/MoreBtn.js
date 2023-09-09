import React from "react";

const MoreBtn = ({handleLoadMoreClick}) => {
    return (
        <>
            <button onClick={handleLoadMoreClick} className="more_btn">Load More</button>
        </>
    );
};

export default MoreBtn;
