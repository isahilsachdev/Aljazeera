import React from "react"
import { Subscribe } from "../../Comman/Subscribe"
import styles from "../FullArticle/Styles/Content.module.css"

function ContentShow(){


    return(
        <>
       <div className = {styles.main__contentShow}>
       <div>
            <p>
            The United States has sanctioned two officials from Iran’s Islamic Revolutionary Guard Corps (IRGC) for alleged involvement in human rights violations against Iranian political prisoners and protesters.

In a statement on Tuesday, the US State Department said Ali Hemmatian and Masoud Safdari, whom it described as IRGC interrogators, and their immediate families would be barred from entering the country.
            </p>
        </div>
        <div>
            <p>
            The department accused the pair of being involved “in gross violations of human rights, namely the torture and/or cruel, inhuman, or degrading treatment or punishment of political prisoners and persons detained during protests in 2019 and 2020 in Iran”.
            </p>
        </div>
        <div className = {styles.subscribe__inside__contentshow} >
            <Subscribe />
        </div>
        <div>
            <p>
            “The United States will continue to hold violators accountable,” Secretary of State Antony Blinken tweeted.

The move comes as US President Joe Biden’s administration and the Iranian government are at an impasse over efforts to return to a 2015 nuclear deal that saw Tehran curb its nuclear programme in exchange for a lifting on international sanctions.
            </p>
        </div>
        <div>
        “The United States will continue to hold violators accountable,” Secretary of State Antony Blinken tweeted.

The move comes as US President Joe Biden’s administration and the Iranian government are at an impasse over efforts to return to a 2015 nuclear deal that saw Tehran curb its nuclear programme in exchange for a lifting on international sanctions.
        </div>
        <div>
        Over 100 US legislators from both the Republican and Democratic parties on Tuesday urged the administration to “seek an agreement or set of agreements with Iran that are comprehensive in nature to address the full range of threats that Iran poses to the region”.

“America and our allies must engage Iran through a combination of diplomatic and sanction mechanisms to achieve full compliance of international obligations and a demonstrated commitment by Iran to addressing its malign behavior,” they said in a letter to Blinken.

In an apparent response to the letter, Iranian Foreign Minister Mohammad Javad Zarif tweeted on Tuesday that the 2015 nuclear deal – formally known as the Joint Comprehensive Plan of Action, or JCPOA – “IS the comprehensive plan”.
        </div>
       </div>
        </>
    )
}

export {ContentShow}