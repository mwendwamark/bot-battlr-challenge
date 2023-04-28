import React from 'react';
import BotCard from './BotCard';

function BotCollection({ botCollection, action, removeCard }) {
  return (
    <div className="bot-collection">
      {botCollection.length > 0 ? (
        botCollection.map(bot => (
          <BotCard key={bot.id} bot={bot} action={action} removeCard={removeCard} />
        ))
      ) : (
        <p>There are no more bots to pick.</p>
      )}
    </div>
  );
}

export default BotCollection;
