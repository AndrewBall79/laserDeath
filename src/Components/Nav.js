import React from "react";


const date = new Date();
let AmPm;
if(date.getHours() %12 < 11){
        AmPm = "PM"
}else AmPm = "AM";

const Nav = () =>
        <div className={"nav"}>
        <h1>This Is the Nav</h1>
                <h1>{`${date.getHours()  % 12}:${date.getUTCMinutes()} ${AmPm}`}</h1>
        </div>;

export default Nav;