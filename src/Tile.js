import React, { Component } from 'react';
import randomColor from 'randomcolor';
import injectSheet from 'react-jss';
import './Tile.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = { flipping: false };
  }
  componentWillReceiveProps(newProps) {
    const seed = Math.random() * 10;
    setTimeout(() => this.setState({ flipping: true }), seed);
    setTimeout(() => this.setState({ flipping: false }), 1000);
  }

  render() {
    const { size, color } = this.props;
    const { flipping } = this.state;
    const seed = Math.random();
    return (
      <div
        className="flip-container vertical"
        style={{ perspective: `${size}px`, margin: '1px 2px', width: `${size}px`, height: `${size}px` }}
      >
        <div className="flipper" style={{
          transformOrigin: `100% ${size / 2}px`,
          animation: flipping ? 'spinner 200ms infinite linear' : undefined,
        }}>
          <div
            className="front"
            style={{ backgroundColor: this.props.color, width: `${size}px`, height: `${size}px` }}
          >
          </div>
          <div
            className="back"
            style={{ backgroundColor: randomColor(), width: `${size}px`, height: `${size}px` }}
          >
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
