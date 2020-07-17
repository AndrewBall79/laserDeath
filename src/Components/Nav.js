import React from "react";
import {nav, button, DropdownButton} from "react-bootstrap";


const date = new Date();

const styles = {
    fontSize: 30
};

let AmPm;
if (date.getHours() % 12 < 11) {
    styles.color = "red";
    AmPm = "PM"
} else {
    AmPm = "AM";
    styles.color = "blue"
}


class Nav extends React.Component {
    render() {
        return (
            <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">Andrew Ball</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Top Of Page<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <h1 style={styles}>{`${date.getHours() % 12 }:${('0' + date.getMinutes()).slice(-2)} ${AmPm}`}</h1>
                </div>
            </nav>
        )
    }
}

export default Nav;