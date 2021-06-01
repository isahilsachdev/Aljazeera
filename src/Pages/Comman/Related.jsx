import React from "react"
import { RealtedShow } from "./RealtedShow"
import styles from "../Comman/Styles/Content.module.css"
import { useHistory } from "react-router"

function Realated(){
    const [data, setData] = React.useState(null)
    const history = useHistory()

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let local_data = localStorage.getItem("eco")
        local_data = JSON.parse(local_data)
        setData(local_data)
    }

    const redirectTo = (id) => {
        history.push(`/economy/${id}`)
        window.location.reload()
        window.scrollTo(0, 0)

    }

    return(
        <>
        <div className = {styles.related__show__data}>
            <div className = {styles.realted__head}>
                <div className = {styles.related__text}>Related</div>
                <div className = {styles.related__dot}></div>
            </div>
            {data && data.map((item, i) => i < 5 ? <div className = {styles.show__related__table}>
                <table> <tbody>
                <RealtedShow key = {item.id} {...item} redirectTo = {redirectTo} />
                </tbody> 
                 </table>
            </div> : null)}
        </div>
        </>
    )
}

export {Realated}