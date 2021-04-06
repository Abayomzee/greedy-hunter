let totalSeconds = 0;

export function setTime() {
  totalSeconds += 1;

  const seconds = formatValue(totalSeconds % 60);
  const minutes = formatValue(parseInt(totalSeconds / 60));

  const time = `${minutes}:${seconds}`;
  return time;
}

function formatValue(value) {
  const valueString = value + "";
  if (valueString.length < 2) {
    return `0${valueString}`;
  } else {
    return valueString;
  }
}
