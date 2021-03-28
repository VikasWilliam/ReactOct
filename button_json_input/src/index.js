import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Buttondemo from './Component/Buttondemo';
import InputField from './Component/InputField';

const App = ()=>{

    const [inputText,setInputText]=useState('');
    return(
        <div>
            <center>
            <h3>Hello Vikas William..You will be a great Developer ⚛️</h3><br/>
            <Buttondemo/>
            <InputField inputText={inputText} setInputText={setInputText}/>
            </center>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))