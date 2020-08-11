import Header from './header/header';
import Routes from "./Routes";
import React from 'react'

const Home = (props) => {
    let content = (
        <div>
            <Header/>
            <Routes/>
        </div>
    )
    return content;
}


export default Home;
