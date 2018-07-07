import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import randomColor from 'randomcolor';
import logo from './logo.svg';
import './App.css';
import Tile from './Tile';

const xTiles = 128;
const yTiles = 16;

class App extends Component {
  constructor(props) {
    super(props);
    const { innerWidth } = window;
    this.state = {
      colorMap: this.getRandomColorMapping(),
      size: (innerWidth - xTiles) / xTiles,
    };
  }

  componentDidMount() {
    setInterval(this.changeColorMap, 3000);
  }

  getRandomColorMapping = () => {
    const colors = [];
    for (var i = 0; i < yTiles; i++) {
      const colorRow = [];
      for (var j = 0; j < xTiles; j++) {
        const color = randomColor();
        colorRow.push(color);
      }
      colors.push(colorRow);
    }
    return colors;
  }

  getFlatColorMapping = () => {
    const colors = [];
    const color = randomColor();
    for (var i = 0; i < yTiles; i++) {
      const colorRow = [];
      for (var j = 0; j < xTiles; j++) {
        colorRow.push(color);
      }
      colors.push(colorRow);
    }
    return colors;
  }

  changeColorMap = () => {
    const mappings = [this.getRandomColorMapping, this.getFlatColorMapping];
    const mapFn = mappings[Math.floor(Math.random() * mappings.length)];
    this.setState({ colorMap: mapFn() });
  }

  render() {
    const { colorMap, size } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monument to Change as it Changes, in Code.</h1>
          <a href="https://github.com/cjevning/digital-color-wall" style={{ color: 'whitesmoke' }}>
            View on Github
          </a>&nbsp;
          <FontAwesomeIcon icon={faGithub} color="whitesmoke" />
          <p>Built & maintained by&nbsp;
            <a href="https://connerjevning.com" style={{ color: 'whitesmoke' }}>
              Conner Jevning
            </a>
          </p>
        </header>
        <div className="Tiles-container">
          {colorMap.map(colorRow => (
            <div style={{ display: 'flex' }}>
              {colorRow.map(color => (
                <Tile color={color} size={size} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
