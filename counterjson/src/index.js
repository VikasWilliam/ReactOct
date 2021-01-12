import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App2 from './component/form';


class Demo extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    }

   
  }

  onClickHandler=()=>{
    this.setState({
      counter: this.state.counter+1
    })
  }
  

  render() {
    return (
      <div>
        <center>
          <button onClick={this.onClickHandler} className="btn btn-primary">Click Me!</button>
          <p>{this.state.counter}</p>
          <App2/>
        </center>
      </div>

    )
  }
}

ReactDOM.render(<Demo/>,document.getElementById("root"));