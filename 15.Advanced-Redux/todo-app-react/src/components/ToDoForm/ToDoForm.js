import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ToDoForm.css";
// call action from todo reducer
import { actions, addToDoAsync } from "../../redux/reducers/todoReducers";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if(message){
    setTimeout(() => {
      dispatch(resetNotification());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("[Log]: Todo- ADD Action dispatched");
    dispatch(addToDoAsync(todoText))
    setTodoText("");
  };

  return (
    <div className="container">
    {
      message && 
      <div className="alert alert-success" role="alert">
      {message}
    </div>
    }
    
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
