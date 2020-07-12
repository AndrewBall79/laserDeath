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


// const App = () =>
//     <div className="App">
//         <Nav/>
//         <Header/>
//         <MainContent/>
//         <div className="todo-list">
//             {toDoComponent}
//         </div>
//         <div className="jokes-list">
//             {jokeComponents}
//         </div>
//         <div className="products-list">
//             {productsComponents}
//         </div>
//         {/*<ContactCard contact={{}}/>*/}
//         {/*<ContactCard name="" imgUrl="" description="" price=""/>*/}
//         <MyInfo/>
//         <Footer/>
//     </div>;

class App extends React.Component {

    render() {
        const toDoComponent = toDoData.map(toDo => <ToDoItem key={toDo.id} toDo={toDo}/>);
        const productsComponents = artProducts.map(item => <Products key={artProducts.id} product={item}/>);
        const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question}
                                                            punchLine={joke.punchLine}/>)

        return (
            <div className="App">
                <Nav/>
                <Header/>
                <MainContent/>
                <div className="todo-list">
                    {toDoComponent}
                </div>
                <div className="jokes-list">
                    {jokeComponents}
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
