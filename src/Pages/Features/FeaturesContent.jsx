import React from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { getfeaturesData, incFeaViewCount, saveDataInLocalStorageFea } from "../../Redux/Features/action"
import { ContentShow } from "../Comman/ContentShow"
import { Header } from "../Comman/Header"
import { RealtedShow } from "../Comman/RealtedShow"
import { Share } from "../Comman/Share"
import { MostReadFea } from "./MostReadFea"
import styles from "../Comman/Styles/Content.module.css"
import { FooterContainer } from "../../Common/Footer/Containers/Footer"
import { RelatedFea } from "./FeaRelated"

function FeaturesContent(){

    const [data, setData] = React.useState(null)
    const { id } = useParams()
    const dispatch = useDispatch()

    React.useEffect(() => {
        getDataFromLs()
    }, [])

    const getDataFromLs = () => {
        let local_data = localStorage.getItem("fea")
        local_data = JSON.parse(local_data)
        let ok = local_data.filter((item) => item.id == id)
        setData(ok)

        const payload = {
            id: id,
            view: ok[0].view + 1
        }

        console.log(payload)

        dispatch( incFeaViewCount( payload ) )
        .then((res) => {
            if(res.success){
                dispatch( getfeaturesData() )
                .then((res) => {
                    if(res.success){
                        dispatch( saveDataInLocalStorageFea() )
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
        <RelatedFea />
        <MostReadFea />
        <FooterContainer />
        </>
    )
}

export {FeaturesContent}