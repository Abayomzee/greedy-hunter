export function move(to, from) {

  document.querySelectorAll(
    `div[data-key="${to}"]`
  )[0].innerHTML = document.querySelectorAll(
    `div[data-key="${from}"]`
  )[0].innerHTML;

  //   Clear formal hunter position
  // document.querySelectorAll(`div[data-key="${from}"]`)[0].innerHTML = "";
}
