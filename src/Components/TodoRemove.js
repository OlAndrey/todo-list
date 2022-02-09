import React from "react";

function TodoRemove(props){

    let styles = {
        background: "red",
        borderRadius: "50%",
        fontWeight: 900,
    }

    return(
        <button style={styles} className="todo-remove" onClick={() => props.onClick(props.id)}>X</button>
    )
}

export default TodoRemove