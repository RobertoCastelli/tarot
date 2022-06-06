import React from "react"
import Actions from "./Actions"

const RulesOneCard = () => {
  return (
    <div className="rules__wrapper">
      <ol className="rules__ol">
        <li className="rules__li">
          Lay some simple ground rules with yourself "Think about what your
          intuition is telling you about the answer before you even pull your
          card
        </li>
        <li className="rules__li">
          Ask a very clear, specific, and heartfelt question "Then see what
          you’re being invited to understand about the situation that you may
          not be consciously aware of
        </li>
        <li className="rules__li">
          Meditate on the card you pulled Consider "The artwork, the symbolism,
          the traditional meaning, and also any personal meanings that come up
          for you
        </li>
        <li style={{ color: "#95afa1" }}>shuffle & pick a card</li>
      </ol>
      <Actions />
    </div>
  )
}

export default RulesOneCard
