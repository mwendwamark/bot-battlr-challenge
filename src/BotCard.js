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

  const buttonStyle = {
    backgroundColor: "#DB2828",
    color: "#fff",
    margin: "10px 0",
    padding: "10px"
  };

  const botTypeStyle = {
    fontSize: "18px",
    marginLeft: "5px"
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "250px",
    height: "350px",
    margin: "10px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover"
  };

  return (
    <div
      className="ui card"
      key={bot.id}
      onClick={handleClick}
      style={{ display: "inline-block", marginRight: "10px" }}
    >
      <div className="image" style={{ height: "250px" }}>
        <img alt="cartoon-robots" src={bot.avatar_url} style={imageStyle} />
      </div>
      <div className="content" style={cardStyle}>
        <div className="header">
          {" "}
          {bot.name}
          <i className={botTypeClasses[bot.bot_class]} style={botTypeStyle} />
        </div>
        <div>
          <small>{bot.catchphrase}</small>
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
                style={buttonStyle}
                onClick={handleRemove}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
