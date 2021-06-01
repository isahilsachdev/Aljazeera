import React from "react"

function RealtedShow(data){

    const {description, title, image, redirectTo, id} = data
    return(
        <>
         <tr >
            <td>
                <img src = {image} alt = {title} width = "150"></img>
            </td>
            <td>
                <h2 onClick = {() => redirectTo(id)}> {title} </h2>
                <p> {description} </p>
            </td> 
        </tr>
        </>
    )
}

export {RealtedShow}