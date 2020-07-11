import React from "react";

function ContactCard(props) {
    return (
            <div className="contact-card">
                <h3>{props.contact.name}</h3>
                <img src={props.contact.imgUrl} alt=""/>
                <p>{props.contact.description}</p>
                <p>Price: {props.contact.price}</p>
            </div>
    )

}

export default ContactCard;