import { useEffect, useState } from "react";

import { GameBoard } from "./components/GameBoard";
import GameOver from "./components/GameOver";
import {game} from './game/game'

export default function Memorygame() {
  const [isGameOver, setIsGameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, [])

  function restart() {
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setIsGameOver(false)
  }

  function handleFlip(card) {
    game.flipCard(
      card.id,
      () => {setIsGameOver(true)},
      () => {setCards([...game.cards])}
    )  
    setCards([...game.cards])
  }

  return (
    <div>
      <GameBoard cards={cards} handleFlip={handleFlip}/>

      <GameOver show={isGameOver} handleRestart={restart}/> 
    </div>
  )
}