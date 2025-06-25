//to create a new div dynamically using js
let x = document.createElement("div");
let y = document.querySelector(".container"); //parent div
//to give html to the created div
x.innerHTML = "Hi Lavan";
//to give class to created div
//x.setAttribute("class", "Childdiv");
//by using classlist
x.classList.add("child_Div"); // to remove x.classList.remove("child_Div")
//to put created div in parent div
y.appendChild(x);
console.log(x);
