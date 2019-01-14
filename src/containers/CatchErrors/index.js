import React from "react";

class CatchErrors extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return this.props.children;
  }
}

export default CatchErrors;
