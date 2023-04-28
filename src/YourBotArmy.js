import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, action, removeCard }) {
  const displayBots = bots.map(bot => {
    return (
    <BotCard 
    bot={bot} 
    action={action} 
    removeCard={removeCard} />);
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <h2>Your bot army</h2>
      <div className="">
        <div className="row bot-army-row">
          {displayBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
