import React from "react";

class ContactCard extends React.Component {

    render() {


        return (
            <div className="contact-card">
                <h3>{this.props.name}</h3>
                <img src={this.props} alt=""/>
                <p>{this.props.description}</p>
                <p>Price: {this.props.price}</p>
            </div>
    )

}
}

export default ContactCard;