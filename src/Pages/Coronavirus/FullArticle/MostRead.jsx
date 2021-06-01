import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { incViewCount } from "../../../Redux/Corona/action"
import styles from "./Styles/Content.module.css"

function MostRead(){

    const [data, setData] = React.useState(null)
    const history = useHistory()
    const dispatch = useDispatch()

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let local_data = localStorage.getItem("corona")
      
        local_data = JSON.parse(local_data)
        console.log("most read",local_data)
        local_data[0].sort((a, b) => {
            return b.view - a.view
        })

        setData(local_data[0])
        console.log("local sort data  ", local_data)
    }

    const redirectTo = (id) => {
        history.push(`/corona/${id}`)
        window.location.reload()
        window.scrollTo(0, 0)
        dispatch( incViewCount() )
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