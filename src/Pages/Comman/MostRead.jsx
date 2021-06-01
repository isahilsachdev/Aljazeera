import React from "react";
import { useHistory } from "react-router";
import styles from "../Comman/Styles/Content.module.css"

function MostRead(){

    const [data, setData] = React.useState(null)
    const history = useHistory()

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let local_data = localStorage.getItem("eco")
        local_data = JSON.parse(local_data)
        local_data.sort((a, b) => {
            return b.view - a.view
        })

        setData(local_data)
    }

    const redirectTo = (id) => {
        history.push(`/economy/${id}`)
        window.location.reload()
        window.scrollTo(0, 0)
    }
    return(
        <>
        <div className = {styles.most__read__main}>
            <div className = {styles.most__read__text}>Most Read</div>
            <div className = {styles.most__read__dot}></div>
        </div>
        <div className = {styles.most__read__data}>
            {data && data.map((item, i) => i < 4 ? <div key = {item.id}> 
            <img src = {item.image} alt = {item.id}></img>
            <h3 onClick = {() => redirectTo(item.id)}> {item.title} </h3>
             </div>: null)}
        </div>
        </>
    )
}

export {MostRead}