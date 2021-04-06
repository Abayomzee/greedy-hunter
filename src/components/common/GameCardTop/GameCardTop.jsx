import React from "react";
import { GameGrid, TimeSpent } from "../GameData/GameData";
import HeartLevel from "../HeartLevel/HeartLevel";
import "./gameCardTop.scss";

const GameCardTop = ({ grid, timeSpent }) => {
  return (
    <div className="gameCard__top">
      <GameGrid grid={grid} />
      <HeartLevel />
      <TimeSpent timeSpent={timeSpent} />
    </div>
  );
};

export default GameCardTop;
