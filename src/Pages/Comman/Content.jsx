import React from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { FooterContainer } from "../../Common/Footer/Containers/Footer"
import { getEconomyData, incViewCount, saveDataInLocalStorage} from "../../Redux/Economy/action"
import { ContentShow } from "./ContentShow"
import { Header } from "./Header"
import { MetaData } from "./MetaData"
import { MostRead } from "./MostRead"
import { Realated } from "./Related"
import { Share } from "./Share"
import styles from "./Styles/Content.module.css"

function Content(){

    const [data, setData] = React.useState(null)
    const { id } = useParams()
    const dispatch = useDispatch()

    React.useEffect(() => {
        getDataFromLs()
    }, [])

    const getDataFromLs = () => {
        let local_data = localStorage.getItem("eco")
        local_data = JSON.parse(local_data)
        let ok = local_data.filter((item) => item.id == id)
        setData(ok)

        const payload = {
            id: id,
            view: ok[0].view + 1
        }

        console.log(payload)

        dispatch( incViewCount( payload ) )
        .then((res) => {
            if(res.success){
                dispatch( getEconomyData() )
                .then((res) => {
                    if(res.success){
                        dispatch( saveDataInLocalStorage() )
                    }
                })
            }
        })

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
            {/* <MetaData title = {item.title} image = {item.image} description = {item.description} /> */}
             </div> )}
        </div>
        <ContentShow />
        <Realated />
        <MostRead />
        <FooterContainer />
        </>
    )
}

export {Content}