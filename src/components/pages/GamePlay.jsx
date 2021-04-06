import { Component } from "react";
import GamePlayBackground from "./../common/GamePlayBackground/GamePlayBackground";
import GameCard from "./../common/GameCard/GameCard";
import { GridContext } from "./../../utils/context";
import { setTime } from "./../../utils/timer";

class GamePlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSpent: null,
      maximumMoves: 0,
    };
  }

  componentDidMount() {
    this.setMaximumMoves();
    this.timeSpentId = setInterval(() => this.setTimeSpent(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeSpentId);
  }

  setTimeSpent = () => {
    this.setState({ timeSpent: setTime() });
  };

  setMaximumMoves = () => {
    const { grid } = this.props;
    this.setState({
      maximumMoves: Math.round((grid * grid) / 2),
    });
  };

  render() {
    const { grid, totalMoves } = this.props;
    const { timeSpent, maximumMoves } = this.state;
    const data = {
      maximumMoves,
      grid,
      totalMoves,
      timeSpent,
    };
    return (
      <GamePlayBackground>
        <GridContext.Provider value={data}>
          <GameCard />
        </GridContext.Provider>
      </GamePlayBackground>
    );
  }
}

export default GamePlay;
