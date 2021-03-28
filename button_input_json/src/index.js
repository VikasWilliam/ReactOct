import React,{Component,useState} from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
    constructor(){
        super();

        this.state={
            counter: 0,
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
                    <h3>you will be a great developer Vikas 👋 ⚛️  </h3><br/>
                    <button onClick={this.onclickHandler} className="btn btn-primary">Click ME!!!!</button><br/><br/>
                    <inputValue ></inputValue>
                    <p>{this.state.counter}</p>
                </center>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("root"));