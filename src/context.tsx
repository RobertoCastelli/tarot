import React, { FC, useState, useEffect, createContext, ReactNode } from "react"
//--- DATABASE
import { cards } from "./database/cards"
//--- CONTEXT
export const ContextData = createContext<any>(cards) //! fix the 'any'

//--- INTERFACE
interface ContextProps {
  children: ReactNode
}

interface Deck {}

//--- FC PROVIDER
const ContextProvider: FC<ContextProps> = ({ children }) => {
  //--- STATES
  const [deck, setDeck] = useState<Deck[]>([])
  const [mixedDeck, setMixedDeck] = useState<Deck[]>([])
  const [card, setCard] = useState<Deck[]>([])
  const [shake, setShake] = useState(false)

  //--- GENERATE DECK --> GET 22 MAJOR ARCANA CARDS
  useEffect(
    () =>
      setDeck(
        cards.filter(
          (card: { arcana: string }) => card.arcana === "Major Arcana"
        )
      ),
    []
  )

  //--- SELECT ONE CARD
  const getOneCard = (card: Deck[]) => {
    setCard(card)
  }

  //--- SHUFFLE CARDS
  const shuffle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    let newDeck = [...deck]
    for (let i = newDeck.length; --i; ) {
      let newIndex = Math.floor(Math.random() * (i + 1))
      let oldDeck = newDeck[i]
      newDeck[i] = newDeck[newIndex]
      newDeck[newIndex] = oldDeck
    }
    setMixedDeck(newDeck)
    shakeCards()
  }

  //--- SHAKE CARDS
  const shakeCards = () => {
    setShake(true)
    setTimeout(() => {
      setShake(false)
    }, 1500)
  }

  return (
    <ContextData.Provider
      value={{
        card,
        setCard,
        cards,
        deck,
        mixedDeck,
        shuffle,
        getOneCard,
        shake,
      }}
    >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider
