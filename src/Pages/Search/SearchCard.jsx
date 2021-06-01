import React from 'react';
import styles from './Styles/SearchCard.module.css';

const SearchCard = ({ title, description, urlToImage }) => {
  if (urlToImage === null) {
    urlToImage = 'https://via.placeholder.com/300.png/09f/fff';
  }
  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.image}>
        <img src={urlToImage} alt={title} className={styles.image_i} />
      </div>
    </div>
  );
};

export default SearchCard;
