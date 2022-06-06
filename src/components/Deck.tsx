import React from "react"
//--- ROUTER
import { Link } from "react-router-dom"
//--- COMPONENTS
import RulesOneCard from "./RulesOneCard"
//--- CONTEXT
import { ContextData } from "../context"
//--- IMAGES
import back from "../database/images/back.jpg"

const Deck = () => {
  const { mixedDeck, getOneCard, shake } = React.useContext(ContextData)

  return (
    <div className="deck__wrapper">
      <RulesOneCard />
      <div className="deck__content">
        {mixedDeck.length !== 0 &&
          mixedDeck.map((card: { name: string; number: string }) => {
            return (
              <Link key={card.number} to="/card">
                <img
                  className={shake ? `${"shake"} ${"deck__img"}` : "deck__img"}
                  alt={card.name}
                  src={back}
                  onClick={() => getOneCard(card)}
                />
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Deck
