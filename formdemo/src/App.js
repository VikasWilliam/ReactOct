import React,{ useState} from 'react';

const App=()=>{
  const[inputText,setInputText]= useState([]);

  const inputTextHandler=(e)=>{
    setInputText(e.target.value);
  }

  return(
    <div>
      <input className="form-group" value={inputText} onChange={inputTextHandler}></input>
      <p>{inputText}</p>
    </div>
  )
}



export default App;
