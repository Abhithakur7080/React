import { Component } from "react";

export class Todo extends Component {
  render() {
    const {handleRemove, todo} = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={() => handleRemove(todo.id)}>x</button>
      </div>
    );
  }
}
