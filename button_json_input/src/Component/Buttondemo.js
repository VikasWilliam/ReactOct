import React,{Component} from 'react';

class Buttondemo extends Component{
    constructor(){
        super();

        this.state={
            counter: 0,
        }
    }
onClickHandler=()=>{

    this.setState({
        counter: this.state.counter+1
    })
}

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={this.onClickHandler}>Click Me!</button><br/>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}  

export default Buttondemo;