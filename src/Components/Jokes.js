import React from "react";

function Jokes(props) {
    return(
        <div className="jokes">
            <h2 style={{display: !props.question && "none"}}>:{props.question}</h2>
            <h2 style={{ color: !props.question && "grey"}}>:{props.punchLine}</h2>
            <hr/>
        </div>
    )
}

export default Jokes;