let incrementBtn = document.getElementById("increment");
console.log(incrementBtn);
let initialValue = 0;
incrementBtn.addEventListener("click", function () {
  console.log("clicking");
  let resultElement = document.getElementById("result");
  initialValue = initialValue + 1;
  resultElement.textContent = initialValue;
});
