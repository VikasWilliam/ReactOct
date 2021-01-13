import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App2 from './App';

class App extends Component{
  constructor(){
    super();

    this.state={
      counter : 0, 
    }
  }
  
   onclickHandler=()=>{
    this.setState({
      counter: this.state.counter+1
    })
  }

  render(){
    return(
      <div>
        <center>
          <h3>✨ Hit me to see the magic ✨</h3><br/>
          <button className="btn btn-primary" onClick={this.onclickHandler}>Click me!!</button>
          <p>{this.state.counter}</p>
          <App2/>
        </center>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"));