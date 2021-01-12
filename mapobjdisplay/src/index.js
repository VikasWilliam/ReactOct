import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './App';

const Display = () => {
  return (
    <div>
      <Apps />
    </div>
  )
}

ReactDOM.render(<Display />, document.getElementById("root"));
