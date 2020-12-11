import React from 'react';
import ReactDom from 'react-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Body from './Component/Body';

const App = () => {
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
           
        </div>
    )

}

ReactDom.render(<App />, document.getElementById("root"));