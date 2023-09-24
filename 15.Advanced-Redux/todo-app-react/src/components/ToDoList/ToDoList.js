import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from '../../redux/actions/todoActions'
import { actions } from "../../redux/reducers/todoReducers";
import { todoSelector } from "../../redux/reducers/todoReducers";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();


  useEffect(() =>{
    // fetch('https://fakestoreapi.com/products')
    // .then(res => res.json())
    // .then(parsedJson => {
    //   console.log(parsedJson);
    // })

    
  //   axios.get('https://dummyjson.com/todos')
  //   .then(res =>
  //     {
  //       console.log(res);
  //       dispatch(actions.setInitialState(res.data));
  //     })
  }, []);
  
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
          <span className="content">{todo.todo}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[Log]: Todo- TOGGLE Action dispatched");
            dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
