import React from "react";

const ToDoItem = (props) =>
        <div className="todo-item">
            <input type="checkbox" checked={props.toDo.completed}/>{props.toDo.text}
            <label>{props.toDo.text}</label><br/>
        </div>;



export default ToDoItem;