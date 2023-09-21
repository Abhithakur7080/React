import { useState } from "react";
import "./NoteForm.css";
// call action from note reducer
import { noteActions } from "../../redux/reducers/noteReducers";
import { useDispatch, useSelector } from "react-redux";
// import { noteSelector, resetNotification } from "../../redux/reducers/noteReducers";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  // const message = useSelector(notificationSelector);

  // if (message) {
  //   setTimeout(() => {
  //     dispatch(resetNotification());
  //   }, 3000);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(noteActions.add(noteText));
    setNoteText("");
  };

  return (
    <div className="container">

      {/* {
        message &&
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      } */}

      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">Create Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
