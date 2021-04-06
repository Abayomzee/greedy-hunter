import React, { Component } from "react";
import GameScreen from "./../GameScreen/GameScreen";
import GameCardTop from "../GameCardTop/GameCardTop";
import GameCardBottom from "../GameCardBottom/GameCardBottom";
import { GridContext } from "./../../../utils/context";
import "./gameCard.scss";

class GameCard extends Component {
  state = {};
  render() {
    return (
      <div className="gameCard">
        <GridContext.Consumer>
          {({ grid, maximumMoves, totalMoves, timeSpent }) => (
            <React.Fragment>
              <GameCardTop grid={grid} timeSpent={timeSpent} />
              <GameScreen grid={grid} />
              <GameCardBottom
                maximumMoves={maximumMoves}
                totalMoves={totalMoves}
              />
            </React.Fragment>
          )}
        </GridContext.Consumer>
      </div>
    );
  }
}

export default GameCard;
