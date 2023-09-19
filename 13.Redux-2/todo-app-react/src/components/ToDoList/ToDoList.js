import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from '../../redux/actions/todoActions'

function ToDoList() {
  const todos = useSelector((state) =>state.todoReducer.todos);
  const dispatch = useDispatch();
  
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(toggleTodo(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
