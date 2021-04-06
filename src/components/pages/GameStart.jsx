import { Component } from "react";
import MainBackgroundView from "../common/mainBackgroundView/MainBackgroundView";
import GameDetailsContainer from "./../common/GameDetailsContainer/GameDetailsContainer";
import HeadingText from "../common/HeadingText/HeadingText";
import HunterImage from "./../common/HunterImage/HunterImage";
import Paragraph from "../common/Paragraph/Paragraph";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

class GameStart extends Component {

  handleGameStart = () => {
    console.log("Clicked");
    this.props.history.replace("/play");
  };

  render() {
    return (
      <MainBackgroundView>
        <GameDetailsContainer>
          <HunterImage />
          <HeadingText text="Greedy Hunter" />
          <Paragraph text="The aim is to eat all the food in record time" />
          <Paragraph text="Confiure your game grid below 👇🏼" />

          <Input
            value={this.props.gridDimension}
            min={5}
            max={12}
            onChange={this.props.onGridNumber}
          />
          <Button label="Start game" onClick={this.handleGameStart} />
        </GameDetailsContainer>
      </MainBackgroundView>
    );
  }
}

export default GameStart;
