import React from "react";
import TodoRemove from "./TodoRemove";

function TodoItem(props){
    let classes = [];

    if(props.item.completed){
        classes.push('done')
    }

    return(
        <li className="todo-item">
            <span className={classes.join(' ')}>
                <input 
                type='checkbox' 
                checked={props.item.completed} 
                onChange={() => props.onChange(props.item.id)} />
                
                {props.item.title}
            </span>
            
            <TodoRemove id={props.item.id} onClick={props.onClick} />
        </li>
    )
}

export default TodoItem;