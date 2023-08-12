import { Component } from "react";

export class Form extends Component {
  

  render() {
    const {change, add, text} = this.props;
    // console.log(add);
    return (
      <div className="form">
        <input
          onChange={change}
          value={text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={add}>Add</button>
      </div>
    );
  }
}
