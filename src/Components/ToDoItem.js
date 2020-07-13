import React from "react";
import toDoData from "../data/toDoData";

function ToDoItem(props) {
    // constructor() {
    //     super();
    //     this.state = {
    //         toDos: toDoData
    //     };
        // this.handleClick = this.handleClick.bind(this);
        // this.handleClickX2 = this.handleClickX2.bind(this);
        // this.handleClickDiv3 = this.handleClickDiv3.bind(this);
        // this.handleClickRound = this.handleClickRound.bind(this);
    // }
    // handleClickRound(){
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count.toFixed(0)
    //         }
    //     })
    // }
    // handleClickDiv3(){
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count / 3
    //         }
    //     })
    // }
    // handleClickX2(){
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count * 2
    //         }
    //     })
    // }
    // handleClick(){
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }

        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)}/>
                <p>{props.item.text}</p>
                {/*<h1>{this.state.count}</h1>*/}
                {/*<button onClick={this.handleClick}>Change</button>*/}
                {/*<button onClick={this.handleClickX2}>Change X 2</button>*/}
                {/*<button onClick={this.handleClickDiv3}>Change / 3</button>*/}
                {/*<button onClick={this.handleClickRound}>Round</button>*/}
                <br/>
            </div>
        )

}


export default ToDoItem;