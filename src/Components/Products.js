import React from "react";

class Products extends React.Component {
    render() {
        return (
            <div>
                <h2>Item: {this.props.product.name}</h2>
                <h3>Price: ${this.props.product.price}</h3>
                <h3>Description: {this.props.product.description}</h3>
            </div>
        )
    }
}

export default Products;