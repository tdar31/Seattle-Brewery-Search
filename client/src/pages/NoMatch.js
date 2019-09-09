import React from "react";
import Nav from "../components/Nav";

function NoMatch() {
    return (
        <div>
            <Nav />
            <br />
            <h3>404 Page Not Found</h3>
            <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                    🙄
                </span>
            </h1>
        </div>
    );
}

export default NoMatch;
