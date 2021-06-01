import React from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { FooterContainer } from "../../../Common/Footer/Containers/Footer"
import { incViewCount } from "../../../Redux/Opinion/action"
import { Share } from "../../Comman/Share"
// import { incViewCount, sortDataView } from "..../Redux/Corona/action"
import { ContentShow } from "./ContentShow"
import { Header } from "./Header"
import { MostRead } from "./MostRead"
import { Realated } from "./Related"
import styles from "./Styles/Content.module.css"

function Content3(){

    const [data, setData] = React.useState(null)
    const { id } = useParams()
    const dispatch = useDispatch()

    React.useEffect(() => {
        getDataFromLs()
    }, [])

    const getDataFromLs = () => {
        let local_data = localStorage.getItem("opinion")
       
        local_data = JSON.parse(local_data)
      
        let ok = local_data[0].filter((item) => item.id == id)
        console.log("id is" , id)
        setData(ok)
       
        const payload = {
            id: id,
            view: ok[0].view + 1
        }

        console.log(payload)

        dispatch( incViewCount( payload ) )

    }

    return(
        <>
        {data && data.map((item) => <Header key = {item.id} {...item} />)}
        <div className = {styles.content__main}>
            {data && data.map((item) =><div key = {item.id} className = {styles.content__show__data}> 
            <img src = {item.image} alt = {item.title} width = "800"></img>
            <p> {item.description} </p>
            <div className = {styles.content__fb__share}>
           <Share />
           </div>
             </div> )}
        </div>
        <ContentShow />
        <Realated />
        <MostRead />
        <FooterContainer/>
        </>
    )
}

export {Content3}