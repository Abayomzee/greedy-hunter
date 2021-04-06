import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameStart from "./components/pages/GameStart";
import GameWin from "./components/pages/GameWin";
import GameLost from "./components/pages/GameLost";
import GamePlay from "./components/pages/GamePlay";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: 5,
      totalMoves: 0,
    };
  }

  handleGridNumber = ({ currentTarget }) => {
    let grid = null;
    if (currentTarget.value < 5) {
      grid = 5;
    } else if (currentTarget.value > 12) {
      grid = 12;
    }
    this.setState({ grid });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/won" component={GameWin} />
          <Route path="/lost" component={GameLost} />
          <Route
            path="/play"
            render={() => (
              <GamePlay
                maximumMoves={this.state.maximumMoves}
                grid={this.state.grid}
                totalMoves={this.state.totalMoves}
                setMaximumMoves={this.setMaximumMoves}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <GameStart
                {...props}
                onGridNumber={this.handleGridNumber}
                grid={this.state.grid}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
