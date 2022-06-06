import React from "react"
//--- ROUTER
import { Link } from "react-router-dom"
//--- IMAGES
import oneCard from "../database/images/one-card.jpg"
import threeCard from "../database/images/three-card.jpg"

const GameType = () => {
  return (
    <div className="game__wrapper">
      <div className="game__one-card-content">
        <Link to="deck">
          <img className="game__one-card-img" src={oneCard} alt="one-card" />
        </Link>
        <div>one card reading</div>
      </div>
      <div className="game__three-cards-content">
        <img
          className="game__three-cards-img"
          src={threeCard}
          alt="three-cards"
        />
        <s>three cards reading</s>
      </div>
    </div>
  )
}

export default GameType
