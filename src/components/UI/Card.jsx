import "./Card.css"
import React from "react"


const Card = (props) => {
    return (
        <li className="card">{props.children}</li> /*Burda props.children dedik children sayesinde props aldığımız yerdeki yazılar görünüyor */
    )
}

export default Card