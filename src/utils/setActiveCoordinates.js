export function setActiveCoordinate(coordinates) {
  const { top, left, bottom, right } = coordinates;

  setTopActive(top);
  setRightActive(right);
  setBottomActive(bottom);
  setLeftActive(left);
}

function setTopActive(top) {
  if (!top) return;
  document.querySelectorAll(`div[data-key="${top}"]`)[0].style.border =
    "4px solid yellow";
}
function setRightActive(right) {
  if (!right) return;
  document.querySelectorAll(`div[data-key="${right}"]`)[0].style.border =
    "4px solid yellow";
}
function setBottomActive(bottom) {
  if (!bottom) return;
  document.querySelectorAll(`div[data-key="${bottom}"]`)[0].style.border =
    "4px solid yellow";
}
function setLeftActive(left) {
  if (!left) return;
  document.querySelectorAll(`div[data-key="${left}"]`)[0].style.border =
    "4px solid yellow";
}
