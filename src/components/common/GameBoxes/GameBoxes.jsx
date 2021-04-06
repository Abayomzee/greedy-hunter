import { images } from "./../../../utils/images";
import "./gameBoxes.scss";
import { PureComponent } from "react";

class GameBoxes extends PureComponent {
  render() {
    const { hasFood, hasHunter, id, onClick } = this.props;

    return (
      <div className="gameBoxes" data-key={id} onClick={onClick}>
        {hasFood ? (
          <img src={images.food} alt="food" className="gameBoxes__food" />
        ) : null}
        {hasHunter ? (
          <img src={images.hunter} alt="food" className="gameBoxes__food" />
        ) : null}
      </div>
    );
  }
}

export default GameBoxes;
