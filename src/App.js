import React,{useState} from 'react';
import TodoItem from './Components/TodoItem';
import TodoAdd from './Components/TodoAdd';
import todosDate from './todosDate.json';


function App(){
  let [state, setState] = useState(todosDate)


  function handlerChange(id){
    setState(
      state.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
    }

    function addTodo(title){
      setState(
        state.concat({
          "userId": 1,
          "id": state.length+1,
          "title": title,
          "completed": false
        })
      )
    }

    function removeTodo(id){
      setState(
        state.filter(todo => todo.id !== id)
      )
    }


    let todos = state.map((item) => <TodoItem key={item.id} item={item} onChange={handlerChange} onClick={removeTodo} />);
    
    return (
      <div className="App">
        <div className="wrapper">
          <TodoAdd onChange={addTodo} />
          <ul className="todo-list">
            {todos}
          </ul>
        </div>
      </div>
    );
  
}

export default App;
