import styles from './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

import {createNewBoard, passTheTime } from './controllers/controllers.js';

const App = React.createClass({
  getInitialState() {
    return {board: createNewBoard(50, 100)};
  },
  passTime(){
    this.setState({board: passTheTime(this.state.board)});
  },
  toggle(){
    setInterval(this.passTime, 100);
  },
  render: function () {
    return (
      <div>
        <Board board={this.state.board} />
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
