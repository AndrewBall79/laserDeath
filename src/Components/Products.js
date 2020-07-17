import React from "react";

class Products extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.product.name}</h2>
                <h3>Price: {this.props.product.price}</h3>
                <img height="400px" src={this.props.product.url} alt={this.props.product.alt}/>
                <h3>{this.props.product.description}</h3>
                <hr/>
            </div>
        )
    }
}

export default Products;