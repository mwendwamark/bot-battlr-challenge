import React from 'react'
import BotCard from "./BotCard"

export default function BotCollection({ botCollection, action, removeCard }) {
  const displayBotCards = botCollection.map(bot => {
    return <BotCard bot={bot} action={action} removeCard={removeCard} />
  })

  return (
    <div>
      <div className="row">
        {displayBotCards}
         <p>There are no more bots to Pick.</p> 
      </div>
    </div>
  )
}

