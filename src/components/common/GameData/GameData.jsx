import "./gameData.scss";

export function GameGrid({ grid }) {
  return (
    <p className="gameData">
      Grid: {grid && <span className="gameData__bold">{`${grid} x ${grid}`}</span>}
    </p>
  );
}
export function TimeSpent({ timeSpent }) {
  return (
    <p className="gameData">
      Time spent: <span className="gameData__bold"> {timeSpent} </span> secs
    </p>
  );
}

export function MaximumMoves({ maximumMoves }) {
  return (
    <p className="gameData">
      Maximum moves: <span className="gameData__bold"> {maximumMoves} </span>
    </p>
  );
}
export function TotalMoves({ totalMoves }) {
  return (
    <p className="gameData">
      Total moves: <span className="gameData__bold"> {totalMoves} </span>
    </p>
  );
}
