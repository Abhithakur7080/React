import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  // create handleAdd and handleRemove functions here

  handleAdd = () => {
     if(this.state.text.trim() !==""){
      const newTodo = {
        id: Date.now(),
        text: this.state.text
      }
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        text: ""
       }));
     };
  }
  handleRemove = (id) => {
    this.setState((prevstate) => ({
      todos: prevstate.todos.filter((todo) => todo.id !== id)
    }))
  }

  render() {

    return (
      <div className="App">
        <span>Todo</span>
        <Form text={this.state.text}
        change={this.handleChange}
        add={this.handleAdd}/>
        <List todos={this.state.todos}
        handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
