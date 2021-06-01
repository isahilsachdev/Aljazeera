import React from "react";
import styles from "./Corona.module.css";
const BigCard = ({ title, description, urlToImage, index }) => {
  return (
    <div>
      <div className={styles.top}>
       {index === 1 && <div className={styles.item1}>
          <div className={styles.bigImage}><img src={urlToImage} alt="img"/></div>
          <div className={styles.bigTitle}>{title}</div>
        </div>}
        {index === 2 && <div className={styles.item2}>two</div>}
        {index === 3 && <div className={styles.item3}>three</div>}
        {index === 4 && <div className={styles.item4}>four</div>}
      </div>
    </div>
  );
};

export default BigCard;
