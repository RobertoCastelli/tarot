import React from "react"
//--- COMPONENTS
import GameType from "./GameType"

const Header = () => {
  return (
    <div className="header__wrapper">
      <section className="header__subtitle">
        The tarot is a pack of playing cards, used from the middle of 15th
        century in various parts of Europe to play games such as Italian
        tarocchini, French tarot and Austrian Königrufen.
      </section>
      <section className="header__subtitle">
        In the late 18th century, some tarot packs began to be used as a trend
        for divination via tarot card reading and cartomancy leading to custom
        packs developed for such occult purposes.
      </section>
      <section className="header__subtitle">
        This represents each of 78 cards with corresponding scans of the
        Rider-Waite tarot deck - one of the most popular tarot decks in use for
        divination in the English-speaking world.
      </section>
      <div>
        <GameType />
      </div>
    </div>
  )
}

export default Header
