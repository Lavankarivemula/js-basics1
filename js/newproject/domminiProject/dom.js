let buttons = document.querySelectorAll(".Button");
for (let x of buttons) {
  x.addEventListener("click", function (e) {
    let val = e.target.innerText.split(" ");
    alert(`You have clicked on button ${val[1]} `);
  });
}
