import React from 'react';
import styles from '../Economy/Styles/Economy.module.css';

function HeaderData(data) {
  const { description, title, image, id, redirectToUrl } = data;
  return (
    <>
      <div className={styles.header__main__eco}>
        <div className={styles.header__main__eco__pic}>
          <img src={image} alt={title} width='500'></img>
        </div>
        <div className={styles.header__main__eco__text}>
          <h2 onClick={() => redirectToUrl(id)}> {title} </h2>
          <p> {description} </p>
        </div>
      </div>
    </>
  );
}

export { HeaderData };
