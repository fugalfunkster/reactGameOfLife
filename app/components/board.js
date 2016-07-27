import React from 'react';

import styles from './boardStyles.css';

const Board = props => {
  const rows = props.board.map(each => {
    const row = each.map(tile => {
      return <Tile className={tile === 1 ? styles.alive : styles.dead} />;
    });
    return <div className={styles.row} >{row}</div>;
  });
  return <div className={styles.board} >{rows}</div>
};

const Tile = props => {
  return <div className={props.className} ></div>;
};

module.exports = Board;
