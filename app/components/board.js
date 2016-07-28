import React from 'react';

import styles from './boardStyles.css';

const Board = props => {
  const width = props.width;
  const height = props.height;
  const tiles = props.board.map(tile => {
    return <Tile className={tile === 1 ? styles.alive : styles.dead} />;
  });
  // console.log(tiles);
  const board = [];
  for (let i = 0; i < height; i++ ){
    board[i] = [];
    for (let j = 0; j < width; j++) {
      board[i].push(tiles[(i * width) + j]); 
    }
  }
  //console.lo(board);
  const rows = board.map(row => {
    return <div className={styles.row} >{row}</div>    
  });
  return <div className={styles.board} >{rows}</div>    
};

const Tile = props => {
  return <div className={props.className} ></div>;
};

module.exports = Board;
