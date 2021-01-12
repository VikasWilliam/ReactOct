import React from 'react';
import './app.css';
import Data from "./data.json";

const App = () => {
    return (
        <div className="app">
            <div>
                {Data.map(post=>{
                    return(
                        <div key={post.ID}>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App;
