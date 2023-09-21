import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
// call actions from note reducer
import { noteActions } from "../../redux/reducers/noteReducers";
import { noteSelector } from "../../redux/reducers/noteReducers";

function NoteList() {
    const notes = useSelector(noteSelector);
    const dispatch = useDispatch();
    

  return (
    <div className="container">
      
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={() => {dispatch(noteActions.delete(index))}} className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
