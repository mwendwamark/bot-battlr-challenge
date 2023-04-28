import React from "react";

const botTypeClasses = {
  Assault: "assasin",
  Defender: "Defender",
  Support: "support",
  Medic: "doctor",
  Witch: "Witch doctor",
  Captain: "Captain"
};

const BotCard = ({ bot, action, removeCard }) => {
  function handleClick(e) {
    e.stopPropagation();
    action(bot);
  }

  function handleRemove(e) {
    console.log("Red X Clicked!");
    e.stopPropagation();
    removeCard(bot);
  }

  const botTypeStyle = {
    fontSize: "18px",
    marginLeft: "5px"
  };

  const cardStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr 50px",
    gridTemplateColumns: "1fr",
    gap: "10px",
    width: "250px",
    height: "350px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)"
    }
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px"
  };

  return (
    <div
      className="bot-card"
      key={bot.id}
      onClick={handleClick}
      style={{ display: "inline-block", marginRight: "10px", ...cardStyle }}
    >
      <div className="image" style={{ height: "250px", overflow: "hidden" }}>
        <img alt="cartoon-robots" src={bot.avatar_url} style={imageStyle} />
      </div>
      <div className="content">
        <div className="header">
          {bot.name}
          <i className={botTypeClasses[bot.bot_class]} style={botTypeStyle} />
        </div>
        <div>
          <small>{bot.catchphrase}</small>
        </div>
      </div>
      <div className="icon">
        <span>
          <i className="icon heartbeat" />
          {bot.health}
        </span>

        <span>
          <i className="icon lightning" />
          {bot.damage}
        </span>
        <span>
          <i className="icon shield" />
          {bot.armor}
        </span>
        <span>
          <div className="ui center aligned segment basic">
            <button
              className="ui mini red button"
              onClick={handleRemove}
            >
              x
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default BotCard;
