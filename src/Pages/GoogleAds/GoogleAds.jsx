import React from "react"
import AdSense from 'react-adsense';

function GoogleAds(){

    React.useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    })

    return(
        <>
        <h1 style = {{border: "1px solid black"}}> React Ads </h1>
        <AdSense.Google
        client='ca-pub-8171429761114620'
        slot='7806394673'
        style={{ display: 'block' }}
        layout='in-article'
        format='fluid'
        />
        </>
    )
       
}

export {GoogleAds}