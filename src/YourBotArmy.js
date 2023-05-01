import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, action, removeCard }) {
  const displayBots = bots.map(bot => {
    return (
      <BotCard 
        bot={bot} 
        action={action} 
        removeCard={removeCard} 
        key={bot.id}
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
    margin: "10px",
    fontSize: "2rem",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <h2 style={headerStyle}>Your Bot Army</h2>
      <div className="ui three column grid" style={armyStyle}>
        {displayBots}
      </div>
    </div>
  );
}

export default YourBotArmy;
