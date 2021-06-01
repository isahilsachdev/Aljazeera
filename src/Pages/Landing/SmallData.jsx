import React from 'react';
import styles from './TopContent.module.css';
const SmallData = ({ title, image }) => {
  return (
    <div className={styles.small_data}>
      <img src={image} alt='news' />

      <p>{title}</p>
    </div>
  );
};

export default SmallData;
