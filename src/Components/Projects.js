import React from "react";

class Projects extends React.Component{
    render() {
        return (

            <div>
                <h2>{this.props.title}</h2>
                <img height="400px" src={this.props.url} alt={this.props.alt}/>
                <h3>{this.props.description}</h3>
            </div>
        );
    }
}

export default Projects;
