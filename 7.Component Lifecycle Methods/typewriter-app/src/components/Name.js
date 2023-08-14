import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  componentDidUpdate(prevProps) {
    const {showName} = this.props;
    if (prevProps.showName !== showName) {
      if (showName) {
        this.timer = setInterval(this.typeWriterEffect, 500);
      } else {
        clearInterval(this.timer);
      }
    }
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}