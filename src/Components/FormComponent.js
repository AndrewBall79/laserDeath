import React from "react";

function FormComponent(props) {
    return (
        <main>
            <input type="text" name="firstName" value={props.data.firstName} placeholder="First Name"
                   onChange={props.handleSwap}/>
            <br/>
            <input type="text" name="lastName" value={props.data.lastName} placeholder="Last Name"
                   onChange={props.handleSwap}/>
            <br/>
            <input type="text" name="age" value={props.data.age} placeholder="Age"
                   onChange={props.handleSwap}/>
            <br/>
            <label>
                <input type="checkbox" name="isFriendly" checked={props.data.isFriendly}
                       onChange={props.handleSwap}/>Is Friendly?
            </label>
            <br/>
            <label>
                <input type="radio" name="gender" value="male" checked={props.data.gender === "male"}
                       onChange={props.handleSwap}/>Male
            </label>
            <br/>
            <label>
                <input type="radio" name="gender" value="female" checked={props.data.gender === "female"}
                       onChange={props.handleSwap}/>Female
            </label>
            <h1>First Name: {props.data.firstName}</h1>
            <h1>Last Name: {props.data.lastName}</h1>
            <h1>Age: {props.data.age}</h1>
            <h1>You Are {props.data.gender}</h1>

            <br/>
            <label>Destination</label>
            <select value={props.data.destination} onChange={props.handleSwap} name="destination">
                <option value="Germany">Germany</option>
                <option value="Philippines">Philippines</option>
                <option value="England">England</option>
                <option value="South Africa">South Africa</option>
            </select>
            <h1>Your Destination is: {props.data.destination}</h1>
            <br/>
            <input type="checkbox" name="isVegan" onChange={props.handleSwap}
                   checked={props.data.isVegan}/>Vegan?
            <br/>
            <input type="checkbox" name="isKosher" onChange={props.handleSwap}
                   checked={props.data.isKosher}/>Kosher?
            <br/>
            <input type="checkbox" name="isLactoseFree" onChange={props.handleSwap}
                   checked={props.data.isLactoseFree}/>Lactose Free?
            <br/>
            <p>Your Diet Restrictions:</p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent;
