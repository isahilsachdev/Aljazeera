import React from "react"

function SideEco(data){
    const {description, title, image, id, redirectToUrl} = data
    return(
        <>
        <tr>
            <td>
            <img src = {image} alt = {title} width = "200"></img>
            </td>
            <td>
            <h2 onClick = {() => redirectToUrl(id)}> {title} </h2>
            <p>  {description} </p>
            </td>
        </tr>
        </>
    )
}

export {SideEco}