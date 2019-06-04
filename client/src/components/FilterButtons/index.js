import React from "react";
import "./style.css";

function FilterButtons({ breweryRegion, onClick }) {
    return (
        <button className="filterButtons" onClick={onClick}>
            {breweryRegion}
        </button>
    );
}

export default FilterButtons;
