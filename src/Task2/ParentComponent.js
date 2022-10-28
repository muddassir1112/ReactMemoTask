import React, { Component } from "react";
import  ChildComponent  from "./ChildComponent";
// import

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { names: "Muddassir" };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({names:"Ansari"});
      console.log(this.state.names);
    },2000);
  }
  render() {
    return (
      <div>
        <h2>
          <u>Question-2</u>
        </h2>
        <h3>
          Make a class component named ParentComponent and inside
          componentDidMount start a timer that console.log a name every 2
          seconds. Inside this ParentComponent there is a child functional
          component called ChildComponent. We don't want to render
          ChildComponent every time the ParentComponent renders. How will you do
          this?
        </h3>
        <ChildComponent />
      </div>
    );
  }
}
