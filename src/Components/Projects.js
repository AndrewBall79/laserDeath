import React from "react";

class Projects extends React.Component{
    render() {
        return (
            <div>
                <h2>{this.props.project.title}</h2>
                <img width="90%" src={this.props.project.url} alt={this.props.project.alt}/>
                <h3>{this.props.project.description}</h3>
            </div>
        );
    }
}

export default Projects;
