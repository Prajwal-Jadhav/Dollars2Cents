const dollars = document.getElementById("dollars");
const convert__button = document.querySelector(".dollars__convert");
let cents;

function convertToCents() {
  let dollarValue = "" + dollars.value;
  dollarValue = +dollarValue.replace(/[^\d.]/gi, "");
  cents = Math.round(dollarValue * 100);

  document.querySelector(".cents__result").innerHTML = cents;
}

function convertToCoins() {
  let quarter = Math.floor(cents / 25);
  let dime = Math.floor((cents % 25) / 10);
  let nickel = Math.floor(((cents % 25) % 10) / 5);
  let penny = ((cents % 25) % 10) % 5;

  document.getElementById("quarter").innerHTML = quarter;
  document.getElementById("dime").innerHTML = dime;
  document.getElementById("nickel").innerHTML = nickel;
  document.getElementById("penny").innerHTML = penny;
}

convert__button.addEventListener("click", convertToCents);
convert__button.addEventListener("click", convertToCoins);
