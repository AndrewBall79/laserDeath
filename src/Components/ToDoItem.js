import React from "react";

class ToDoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.toDo.completed}/>{this.props.toDo.text}
                <label></label><br/>
            </div>
        )
    }
}


export default ToDoItem;