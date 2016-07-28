import styles from './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

import {createNewBoard, passTheTime } from './controllers/controllers.js';

const width = 40;
const height = 50;


const App = React.createClass({
  getInitialState() {
    return {board: createNewBoard(width, height)};
  },
  passTime(){
    this.setState({board: passTheTime(this.state.board, width, height)});
  },
  toggle(){
    setInterval(this.passTime, 1000);
  },
  render: function () {
    return (
      <div>
        <Board board={this.state.board} width={width} height={height} />
        <Button toggle={this.toggle} />
      </div>
    );
  }
});

const Button = props => {
  return <div className={styles.button} onClick={props.toggle} > Start / Stop </div>;
};


let element = document.createElement('div');
element.id = 'app';
document.body.appendChild(element);

ReactDOM.render(<App/>, document.getElementById('app'));
