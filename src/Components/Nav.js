import React from "react";


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
            <div className={"nav"}>
                <h1 style={styles}>{`${date.getHours()}:${('0' + date.getMinutes()).slice(-2)} ${AmPm}`}</h1>
            </div>
        )
    }
}

export default Nav;