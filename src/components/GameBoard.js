import Card from './Card'

export function GameBoard({cards, handleFlip}) {
  return (
    <div id='gameBoard'>
      {cards.map((card, index) => {
        return <Card cardInfo={card} handleFlip={handleFlip} key={index}/>
      })}
    </div>
  )
}