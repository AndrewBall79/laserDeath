// import React from "react";
// import toDoData from "../data/toDoData";
// import ToDoItem from "./ToDoItem";
// import artProducts from "../data/artProducts";
// import Products from "./Products";
// import jokesData from "../data/jokesData";
// import Jokes from "./Jokes";
// import Conditional from "./Conditional";
//
// class States extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todos: toDoData,
//             isLoading: false,
//             isLoggedIn: false,
//             character: {},
//
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     componentDidMount() {
//         this.setState({isLoading: true});
//         fetch("https://swapi.dev/api/people/19")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     isLoading: false,
//                     character: data
//                 })
//             });
//     }
//
//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }
//
//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             });
//             console.log(updatedTodos);
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }
//
//     render() {
//         const text = this.state.isLoading ? "Loading..." : this.state.character.name;
//         let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
//         const toDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}
//                                                                  handleChange={this.handleChange}/>);
//         const productsComponents = artProducts.map(item => <Products key={item.id} product={item}/>);
//         const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question}
//                                                             punchLine={joke.punchLine}/>);
//
//         return (
//             <States>
//                 {!this.state.isLoggedIn ? <h1>Not Logged In</h1> : <Conditional/>}
//                 <button onClick={this.handleClick}>{buttonText}</button>
//                 <div className="todo-list">
//                     {toDoItems}
//                 </div>
//                 <div className="jokes-list">
//                     <h3>{jokeComponents}</h3>
//                 </div>
//                 <div className="products-list">
//                     {productsComponents}
//                 </div>
//                 <div className="swapi">{text}</div>
//             </States>
//
//         )
//     }
// }
//
// export default States;