import { MaximumMoves, TotalMoves } from "../GameData/GameData";
import "./gameCardBottom.scss";

const GameCardBottom = ({ maximumMoves, totalMoves }) => {
  return (
    <div className="gameCard__bottom">
      <MaximumMoves maximumMoves={maximumMoves} />
      <TotalMoves totalMoves={totalMoves} />
    </div>
  );
};

export default GameCardBottom;
