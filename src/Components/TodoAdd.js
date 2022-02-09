import React, {useState} from "react";

function TodoAdd(props){
    let [todo, setTodo] = useState();

    function todoInput(event){
        setTodo(event.target.value)
    }
    function todoEnter(){
        props.onChange(todo); 
        document.querySelector("input[type='text']").value = "";
        setTodo(undefined);
    }
    return(
        <div className="todo-add">
            <input 
                type="text" 
                name='newTodo'
                placeholder="Enter new todo"
                onChange={todoInput} />
            <button onClick={() => todoEnter() }>Todo Add</button>
        </div>
    )
    
}


export default TodoAdd