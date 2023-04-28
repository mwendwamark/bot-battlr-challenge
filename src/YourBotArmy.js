import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, action, removeCard }) {
  const displayBots = bots.map(bot => {
    return (
      <BotCard 
        bot={bot} 
        action={action} 
        removeCard={removeCard} 
      />
    );
  });

  const armyStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    margin: "20px"
  };

  const headerStyle = {
    textAlign: "center",
    margin: "10px"
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <h2 style={headerStyle}>Your bot army</h2>
      <div className="ui three column grid" style={armyStyle}>
        {displayBots}
      </div>
    </div>
  );
}

export default YourBotArmy;
