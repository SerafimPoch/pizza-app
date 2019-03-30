import React from 'react';
import { Container } from './style';

export default class extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return <Container>{this.props.children}</Container>;
  }
}
