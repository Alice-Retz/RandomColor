import React, { Component } from 'react';
import ColorRender from '../components/colors/ColorDisplay';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export default class ColorRandomizer extends Component {
  state = {
    color: 'indigo',
  };

  componentDidMount() {
    setInterval(() => {
      const colorChange = colors[Math.floor(Math.random() * colors.length)];
      this.setState({ color: colorChange });
    }, 1000);
  }

  render() {
    const { color } = this.state;
    console.log(color);
    return <ColorRender backgroundColor={color} />;
  }
}
