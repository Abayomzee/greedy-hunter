import GameBoxes from "../GameBoxes/GameBoxes";
import "./gameScreen.scss";
import { randomPositions } from "./../../../utils/randomPositions";
import { PureComponent } from "react";
import { randomNumber } from "./../../../utils/randomNumber";
import { setActiveCoordinate } from "./../../../utils/setActiveCoordinates";
import { removeActiveCoordinate } from "./../../../utils/removeActiveCoordinate";
import {
  bottomIndex,
  leftIndex,
  rightIndex,
  topIndex,
} from "./../../../utils/coordinateIndexes";
import { move } from "./../../../utils/moveHunter";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.props.grid,
    };
  }

  hunterCoordinates = {
    currentIndex: null,
    topIndex: null,
    bottomIndex: null,
    rightIndex: null,
    leftIndex: null,
  };

  key = null;
  hunterIndex = null;

  handleClick = (hunterPosition, key) => {
    const { grid } = this.state;
    this.hunterIndex = hunterPosition[0];
    this.key = key;

    if (this.hunterIndex === this.key) {
      // Set the hunter active coordinates
      this.setHunterCoordinates(this.hunterIndex, grid);
      let coordinate = this.getCoordinate();
      setActiveCoordinate(coordinate);

      //
      console.log(this.hunterCoordinates);
    } else if (this.key === this.hunterCoordinates.topIndex) {
      // Move Hunter up
      move(this.key, this.hunterIndex);

      let coordinate = this.getCoordinate();
      removeActiveCoordinate(coordinate);

      // Set new hunterIndex
      this.hunterIndex = this.key;
      this.setHunterCoordinates(this.hunterIndex, grid);
      coordinate = this.getCoordinate();
      setActiveCoordinate(coordinate);

      //
    } else if (key === this.hunterCoordinates.leftIndex) {
      // Move Hunter Left
      move(this.key, this.hunterIndex);

      let coordinate = this.getCoordinate();
      removeActiveCoordinate(coordinate);

      // Set new hunterIndex
      this.hunterIndex = this.key;
      this.setHunterCoordinates(this.hunterIndex, grid);
      coordinate = this.getCoordinate();
      setActiveCoordinate(coordinate);
      //
    } else if (key === this.hunterCoordinates.bottomIndex) {
      // Move Hunter down
      move(this.key, this.hunterIndex);

      let coordinate = this.getCoordinate();
      removeActiveCoordinate(coordinate);

      // Set new hunterIndex
      this.hunterIndex = this.key;
      this.setHunterCoordinates(this.hunterIndex, grid);
      coordinate = this.getCoordinate();
      setActiveCoordinate(coordinate);
      //
    } else if (key === this.hunterCoordinates.rightIndex) {
      // Move Hunter Right
      move(this.key, this.hunterIndex);

      let coordinate = this.getCoordinate();
      removeActiveCoordinate(coordinate);

      // Set new hunterIndex
      this.hunterIndex = this.key;
      this.setHunterCoordinates(this.hunterIndex, grid);
      coordinate = this.getCoordinate();
      setActiveCoordinate(coordinate);
      //
    } else {
      return;
    }
  };

  setHunterCoordinates = (hunterIndex, grid) => {
    this.hunterCoordinates = {
      currentIndex: hunterIndex,
      topIndex: topIndex(hunterIndex, grid),
      rightIndex: rightIndex(hunterIndex, grid),
      bottomIndex: bottomIndex(hunterIndex, grid),
      leftIndex: leftIndex(hunterIndex, grid),
    };
  };

  getCoordinate = () => {
    return {
      top: this.hunterCoordinates.topIndex,
      left: this.hunterCoordinates.leftIndex,
      right: this.hunterCoordinates.rightIndex,
      bottom: this.hunterCoordinates.bottomIndex,
    };
  };

  render() {
    const { grid } = this.props;
    const style = {
      gridTemplateColumns: `repeat(${grid}, 1fr)`,
      gridTemplateRows: `repeat(${grid}, 1fr)`,
    };

    const box = [];
    const possibleHunterIndex = [];
    const totalBox = grid * grid;
    const randomFoodIndex = randomPositions(grid, totalBox);

    for (let a = 0; a < totalBox; a++) {
      possibleHunterIndex.push(a);
    }

    for (let x of randomFoodIndex) {
      possibleHunterIndex.splice(possibleHunterIndex.indexOf(x), 1);
    }

    const hunterIndex = randomNumber(possibleHunterIndex.length);
    const hunterPosition = [possibleHunterIndex[hunterIndex]];

    for (let a = 0; a < totalBox; a++) {
      box.push(
        <GameBoxes
          id={a}
          key={a}
          hasFood={randomFoodIndex.includes(a)}
          hasHunter={hunterPosition.includes(a)}
          grid={grid}
          onClick={() => this.handleClick(hunterPosition, a)}
        />
      );
    }

    return (
      <div className="gameScreen" style={style}>
        {box.map((box) => box)}
      </div>
    );
  }
}

export default GameScreen;
