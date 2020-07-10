import React from 'react';
import './App.css';
import Footer from "./Components/footer";
import MyInfo from "./Components/MyInfo";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MainContent from "./Components/MainContent";
import CheckBoxes from "./Components/CheckBoxes";

const App = () =>
        <div className="App">
            <Nav/>
            <Header/>
            <MainContent/>
            <CheckBoxes/>
            <MyInfo/>
            <Footer/>
        </div>;

export default App;
