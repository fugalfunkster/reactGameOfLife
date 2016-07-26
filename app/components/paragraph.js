import styles from './styles.css';

import React from 'react';

const Paragraph = (props) => (
  <div className={styles.font}>{props.children}</div>
)

module.exports = Paragraph;
