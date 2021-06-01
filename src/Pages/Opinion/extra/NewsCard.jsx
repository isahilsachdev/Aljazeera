import React from 'react'
import styles from "./News.module.css"
const NewsCard = ({title , description , urlToImage}) => {
    return (
        <div className={styles.card}>
              <div className={styles.image}>
                <img src={urlToImage} alt="img"/>
              </div>
               <div className={styles.right}>
                    <h1>{title}</h1>
                    <h2>{description}</h2>   
                </div> 
          
        </div>
    )
}

export default NewsCard
