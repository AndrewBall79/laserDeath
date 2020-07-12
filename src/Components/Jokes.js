import React from "react";

class Jokes extends React.Component {
    render() {
        return (
            <div className="jokes">
                <h2 style={{display: !this.props.question && "none"}}>:{this.props.question}</h2>
                <h2 style={{color: !this.props.question && "grey"}}>:{this.props.punchLine}</h2>
                <hr/>
            </div>
        )
    }
}

export default Jokes;