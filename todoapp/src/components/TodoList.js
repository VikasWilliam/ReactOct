import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos,setTodos }) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-List">
                {todos.map(a=>(
                    <Todo key={a.id} 
                     text={a.text}
                     a={a}
                     setTodos={setTodos} 
                     todos={todos}
                     />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;