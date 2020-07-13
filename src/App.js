import React from 'react';
import './App.css';
import Footer from "./Components/footer";
import MyInfo from "./Components/MyInfo";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MainContent from "./Components/MainContent";
import ToDoItem from "./Components/ToDoItem";
import ContactCard from "./Components/ContactCard";
import Jokes from "./Components/Jokes";
import jokesData from "./data/jokesData";
import Products from "./Components/Products";
import artProducts from "./data/artProducts";
import toDoData from "./data/toDoData";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: toDoData

        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(id){
            this.setState(prevState => {
                const updatedTodos = prevState.todos.map(todo =>{
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                });
                    console.log(updatedTodos);
                return{
                    todos : updatedTodos
                }
            })
    }


    render() {
        const toDoComponent = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        const productsComponents = artProducts.map(item => <Products key={artProducts.id} product={item}/>);
        const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question}
                                                            punchLine={joke.punchLine}/>);


        let wordDisplay;
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }


        return (
            <div className="App">
                <h1>You're Logged {wordDisplay}</h1>
                <Nav/>
                <Header/>
                <MainContent/>
                <div className="todo-list">
                    <h1>{toDoComponent}</h1>
                </div>
                <div className="jokes-list">
                    <h3 onMouseOver={() => console.log("You Got Joked!")}>{jokeComponents}</h3>
                </div>
                <div className="products-list">
                    {productsComponents}
                </div>
                {/*<ContactCard contact={{}}/>*/}
                {/*<ContactCard name="" imgUrl="" description="" price=""/>*/}
                <MyInfo/>
                <Footer/>
            </div>
        )
    }
}

export default App;
