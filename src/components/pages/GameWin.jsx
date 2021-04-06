import { Component } from "react";
import MainBackgroundView from "../common/mainBackgroundView/MainBackgroundView";
import GameDetailsContainer from "./../common/GameDetailsContainer/GameDetailsContainer";
import HeadingText from "../common/HeadingText/HeadingText";
import HunterImage from "./../common/HunterImage/HunterImage";
import Paragraph from "../common/Paragraph/Paragraph";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

class GameWin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridDimension: 3,
    };
  }

  handleChange = ({ currentTarget }) => {
    this.setState({ gridDimension: currentTarget.value });
  };

  render() {
    return (
      <MainBackgroundView>
        <GameDetailsContainer>
          <HunterImage />
          <HeadingText text="Bravo!" />
          <Paragraph text="Time Spent:" data={"98 seconds"} />

          <Input
            value={this.state.gridDimension}
            min={3}
            max={100}
            onChange={this.handleChange}
          />
          <Button label="Start again" />
        </GameDetailsContainer>
      </MainBackgroundView>
    );
  }
}

export default GameWin;
