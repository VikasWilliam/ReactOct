import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const Demo =()=> {
  
const[todos,setTodos]= useState([]);
const[input,setInput]= useState('');  

const addHandler=(event)=>{
  event.preventDefault();
  setTodos([...todos,input]);
  setInput('');
}
  
console.log(input);
    return (
      <div>
        <center>
          <h3>Hello clever Programmer 👍</h3>
          
          <input value={input} onChange={event=>setInput(event.target.value)}/><br/><br></br>
          <button className="btn btn-primary" onClick={addHandler}>Click me!</button>
          <ul>{todos.map(a=>(
            <li>{a}</li>
          ))}</ul>
         
        </center>
      </div>

    )
  }


ReactDOM.render(<Demo/>,document.getElementById("root"));