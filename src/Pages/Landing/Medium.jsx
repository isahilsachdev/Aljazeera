import React from 'react';

import styles from './TopContent.module.css';
const Medium = ({ title, image }) => {
  return (
    <div className={styles.medium_data}>
      <h2>{title}</h2>
      <img src={image} alt='news' />
    </div>
  );
};

export default Medium;
