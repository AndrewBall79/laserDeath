import React from "react";


var firstName = "Andrew";
var lastName = "Ball";
var someWord = "ball";
const Header = () =>
        <header className="App-header">
            <h1>{`${firstName} ${lastName}`}</h1>
            <h3>And A {someWord}</h3>
        </header>;

export default Header;