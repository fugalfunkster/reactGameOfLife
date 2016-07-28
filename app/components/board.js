import React from 'react';

import styles from './boardStyles.css';

const Board = props => {
  const width = 9;
  const height = 9;
  const tiles = props.board.map(tile => {
    return <Tile className={tile === 1 ? styles.alive : styles.dead} />;
  });
  const board = [];
  for (let i = 0; i < height; i++ ){
    for (j = 0; j < width; j++) {
      board[i].push(tiles[(i * width) + j]); 
    }
  }
  
  return <div className={styles.row} >{row}</div>;
  });
  return <div className={styles.board} >{rows}</div>
};

const Tile = props => {
  return <div className={props.className} ></div>;
};

module.exports = Board;
