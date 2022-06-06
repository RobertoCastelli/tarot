import React, { useContext } from "react"
//--- CONTEXT
import { ContextData } from "../context"
//--- ICONS
import { GiCardDraw } from "react-icons/gi"
import { HiHome } from "react-icons/hi"
import { Link } from "react-router-dom"

const Actions = () => {
  const { shuffle } = useContext(ContextData)

  return (
    <div className="action__wrapper">
      <div className="action__content">
        <button
          className="btn__shuffle"
          type="button"
          onClick={(e) => shuffle(e)}
        >
          <GiCardDraw size={40} />
          <div>shuffle</div>
        </button>
      </div>

      <Link to="/">
        <div className="action__content">
          <button className="btn__home" type="button">
            <HiHome size={40} />
            <div>home</div>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Actions
