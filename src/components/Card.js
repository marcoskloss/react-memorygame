export default function Card({cardInfo, handleFlip}) {
  return (
    <div 
      id={cardInfo.id} 
      className={`card ${cardInfo.flipped ? 'flip' : ''}`}
      onClick={() => {handleFlip(cardInfo)}}  
    >
      <div className="card-front">
        <img src={`assets/images/${cardInfo.icon}.png`} alt={cardInfo.icon} className='icon'/>
      </div>

      <div className="card-back">
        {'</>'}
      </div>
    </div>
  )
}