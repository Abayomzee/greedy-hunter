import images from "./../../../utils/images";
import "./gameBoxes.scss";
import { PureComponent } from "react";

class GameBoxes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hunter: {
        currentIndex: null,
        topIndex: null,
        bottomIndex: null,
        rightIndex: null,
        leftIndex: null,
      },
    };
  }

  componentDidMount() {
    // const hunter = this.props.hasHunter;
    // this.setHunterCoordinates(hunter);
  }

  hunterPosition = (hunter) => {
    if (hunter) console.log(this.props.id);
  };

  setHunterCoordinates = (hunter) => {
    if (hunter) {
      const { grid } = this.props;
      const hunterIndex = this.props.id;
      this.setState({
        hunter: {
          currentIndex: hunterIndex,
          topIndex: hunterIndex - grid >= 1 ? hunterIndex - grid : null,
          bottomIndex:
            hunterIndex + grid < grid * grid ? hunterIndex + grid : null,
          rightIndex: hunterIndex % grid !== grid - 1 ? hunterIndex + 1 : null,
          leftIndex: hunterIndex % grid !== 0 ? hunterIndex - 1 : null,
        },
      });
    }
    console.log(this.state);
  };

  // 1. Ability to click each boxes
  // 2. After clicking, check if clicking is eligible
  // 3. When the hunter box is clicked
  // => set it top, right, bottom, left
  // Boxes to active and enable clicking feature

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
