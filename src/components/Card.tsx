import React from "react"
//--- CONTEXT
import { ContextData } from "../context"
//--- ICONS
import { GiCardDiscard } from "react-icons/gi"
import { Link } from "react-router-dom"

const Card = () => {
  const { card } = React.useContext(ContextData)

  return (
    <div className="card__wrapper">
      <div className="card__content">
        <img className="card__card" src={card.img} alt="card"></img>
        <hr />
        <h2 className="card__name">
          {card.number} ~ {card.name}
        </h2>
        <div className="card__arcana">
          <span>arcana:</span> {card.arcana}
        </div>
        <div className="card__numerology">
          <span>numerology:</span> {card.Numerology}
        </div>
        <div className="card__elemental">
          <span>elemental:</span> {card.Elemental}
        </div>
        <div className="card__archetype">
          <span>archetype:</span> {card.Archetype}
        </div>
        <div>
          <span>mythical ~ spiritual:</span> {card["Mythical/Spiritual"]}
        </div>
        <div className="card__questions">
          <span>questions to ask:</span>
          <ul>
            {card["Questions to Ask"].map((elem: string) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="card__fortune-telling">
          <span>fortune telling:</span>
          <ul>
            {card.fortune_telling.map((elem: string) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="card__keywords">
          <span>keywords:</span>
          <ul>
            {card.keywords.map((elem: string) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="card__light">
          <span>light:</span>
          <ul>
            {card.meanings.light.map((elem: string) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className="card__shadow">
          <span>shadow:</span>
          <ul>
            {card.meanings.shadow.map((elem: string) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
        <Link to="/deck">
          <div className="card__btn-container">
            <button className="card__btn--close" type="button">
              <GiCardDiscard size={40} />
              <div>discard</div>
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card
