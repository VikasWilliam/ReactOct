import React from 'react';

const InputField= ({inputText,setInputText})=>{



const inputTextHandler=(e)=>{
    
    setInputText(e.target.value);
    console.log(e.target.value)
   
};
    return(
        <div>
            <input value={inputText} onChange={inputTextHandler} className="Form-group" type="text"></input>
            <p>{inputText}</p>
        </div>
    )
}

export default InputField;