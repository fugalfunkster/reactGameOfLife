import styles from './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

import {createNewBoard, passTheTime } from './controllers/controllers.js';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const width = Math.round(windowWidth / 10);
const height = Math.round((windowHeight - 220) / 10);
let growth;

const App = React.createClass({
  getInitialState() {
    return {board: createNewBoard(width, height, 100),
            counter: 0,
            active: 'false'};
  },
  componentDidMount(){
    this.toggle();
  },
  passTime(){
    this.setState({board: passTheTime(this.state.board, width, height),
                   counter: this.state.counter + 1});
  },
  clear(){
    if (this.state.active === 'true'){
      this.setState({active: 'false'});
      clearInterval(growth);
    }
    this.setState({board: createNewBoard(width, height, 0),
                   counter: 0});
  },
  random(){
    if (this.state.active === 'true'){
      this.setState({active: 'false'});
      clearInterval(growth);
    }
    this.setState({board: createNewBoard(width, height, 70),
                   counter: 0});
  },
  toggle(){
    if(this.state.active === 'false'){
      this.setState({active: 'true'});
      growth = setInterval(this.passTime, 16);
      return;
    } else {
      this.setState({active: 'false'});
      clearInterval(growth);
      return;
    }
  },
  mark(index){
    let tempBoard = this.state.board;
    tempBoard[index] = tempBoard[index] ? 0 : 1;
    this.setState({board: tempBoard});
  },
  render: function () {
    return (
      <div>
        <h1>The Game Of Life</h1>
        <div className={styles.buttons}>       
          <Button toggle={this.toggle} text='Start / Stop'/>
          <Button toggle={this.clear} text='Clear'/>
          <Button toggle={this.random} text='Random'/>
          <div className={styles.counter} >{'Generation: ' + this.state.counter}</div>
        </div>
        <Board board={this.state.board} width={width} height={height} mark={this.mark} />
      </div>
    );
  }
});

const Button = props => {
  return <div className={styles.button} onClick={props.toggle} >{props.text}</div>;
};


let element = document.createElement('div');
element.id = 'app';
document.body.appendChild(element);

ReactDOM.render(<App/>, document.getElementById('app'));
