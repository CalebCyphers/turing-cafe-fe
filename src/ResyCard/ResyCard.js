import React from "react"
import "./ResyCard.css"

function ResyCard(props) {
  return(
    <article className="ResyCard">
      <h3>{props.reservation.name}</h3>
      <p>{props.reservation.date}</p>
      <p>{props.reservation.time}</p>
      <p>Number of guests: {props.reservation.number}</p>
    </article>
  )
}

export default ResyCard;