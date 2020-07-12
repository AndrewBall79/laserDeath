import React from "react";


class Header extends React.Component {
    render() {
        var firstName = "Andrew";
        var lastName = "Ball";
        var someWord = "ball";
        return (
            <header className="App-header">
                <h1>{`${firstName} ${lastName}`}</h1>
                <h3>And A {someWord}</h3>
            </header>
        )
    }
}

export default Header;