import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      counter: '',
      display: ''
    }
  }
  /* onClickHandler=(event)=>{
    this.setState({
      counter: event.target.value
    })
  } */

  exe=(event)=>{
    event.preventDefault();
  this.setState({
    counter: event.target.value
  
    
    });

  
  }

  exe2=(event)=>{
    event.preventDefault();
    this.setState({
      display: "Hello"+ " "+ this.state.counter
    })
   
  } 
  

  render(){
    console.log(this.state.counter)
    console.log(this.state.display)
    return(
      <div>
        <form onSubmit={this.exe2}>
        <screenLeft>
          <h3>Enter your Post!!</h3>
          <textarea type="text" value={this.state.counter} onChange={this.exe} rows="10" cols="100" className="form-group"></textarea><br/><br/>
          <button  className="btn btn-primary">Click me!!</button><br/><br/>
         
        </screenLeft>
        </form>
        <center>
        <p>{this.state.display}</p> <br/><br/>
        </center>
        
       
      </div>

    )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"));