import React, { Component } from "react";
import { Clock } from "./style";

class Time extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <Clock>{this.state.date.toLocaleTimeString()}</Clock>;
  }
}

export default Time;
