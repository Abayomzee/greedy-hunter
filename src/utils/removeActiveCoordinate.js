export function removeActiveCoordinate(coordinates) {
  const { top, left, bottom, right } = coordinates;

  removeTopActive(top);
  removeRightActive(right);
  removeBottomActive(bottom);
  removeLeftActive(left);
}

function removeTopActive(top) {
  if (!top) return;
  document.querySelectorAll(`div[data-key="${top}"]`)[0].style.border =
    "1px solid #853594";
}
function removeRightActive(right) {
  if (!right) return;
  document.querySelectorAll(`div[data-key="${right}"]`)[0].style.border =
    "1px solid #853594";
}
function removeBottomActive(bottom) {
  if (!bottom) return;
  document.querySelectorAll(`div[data-key="${bottom}"]`)[0].style.border =
    "1px solid #853594";
}
function removeLeftActive(left) {
  if (!left) return;
  document.querySelectorAll(`div[data-key="${left}"]`)[0].style.border =
    "1px solid #853594";
}
