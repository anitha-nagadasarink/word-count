// Variable declarations
const number = document.getElementById("number");
const countdownBtn = document.querySelector(".countdown");
const result = document.querySelector(".result");

countdownBtn.addEventListener("click", function () {
  let numberValue = number.value;
  setInterval(() => {
    if (numberValue >= 10) {
      result.innerText = numberValue--;
    } else if (numberValue >= 0 && numberValue <= 9) {
      result.innerText = `0${numberValue--}`;
    }
  }, 500);
});