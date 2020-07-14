import React from "react";
import FormComponent from "./FormComponent";


class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            isFriendly: true,
            gender: "",
            favColor: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        };
        this.handleSwap = this.handleSwap.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch("https://swapi.dev/api/people/19")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    character: data
                })
            });
    }

    handleSwap(event) {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return(
           <FormComponent
                handleSwap={this.handleSwap}
                data={this.state}
           />
        )
    }
}

export default FormContainer;