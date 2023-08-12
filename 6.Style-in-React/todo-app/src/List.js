import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const {handleRemove} = this.props
    return (
      <div className="list">
        {this.props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} handleRemove={handleRemove}/>
        ))}
      </div>
    );
  }
}
