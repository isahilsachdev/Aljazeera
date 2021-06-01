import React from "react"
import styles from "../FullArticle/Styles/Content.module.css"
// import style from ".../Comman/Styles/Content.module.css"
import {GrFormView} from "react-icons/gr"

function Header(data){

    const { title, description , view} = data
    return(
        <>
        <div className = {styles.header__main}>
            <h1> {title} </h1>
            <p style={{fontFamily:"georgia"}}> <i>{description}</i> </p>
            
            <div className = {styles.header__views}>
                <GrFormView size = "50px" className = {styles.header__view__icon} />
                <span className = {styles.header__views__show}> { view > 0 ? view : null } </span>
            </div>
        </div>
        </>
    )
}

export {Header}