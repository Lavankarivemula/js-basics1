/* // alert('Hi,How are you');
// console.log('Hi,How are you'); #OUTPUTS

/*de bugging*/
/*alert('hi');
console.groupCollapsed('How are you')*/

/*datatypes

let x=5; #number
let y=typeof(x)
console.log(y)

let x="Lavan"; #string
let y=typeof(x)
console.log(y)

let x=0.5 #float
let y=typeof(x)
console.log(y)

let x=true #boolean
let y=typeof(x)
console.log(y)

 let x; #undefined
 let y=typeof(x)
console.log(y)

let x=; #null
let y=typeof(x)
console.log(y)

let x= null; #object
let z={name:'coding'}
let y=typeof(z)
console.log(y) */

/*let x=prompt('enter your name')
let y=x.trim();
let z="welcome"
z=z.concat(" "+ y)
console.log(z)*/
/*let x = 3
if (x > 3) { console.log('This is true') }
else { console.log('this is not true') }*/

/*let x = prompt('enter your age')
y=18-x
if (x >= 18) { alert('You are eligible for voting') }
else{alert('you are not eligible for voting,you have to wait'+' '+y+' '+'years')}*/

/*let x = prompt('enter your age')
if (x <= 10) { console.log('you are just a baby') }
else if (x > 10 && x <= 20) { console.log('you are an adoloscent') }
else if (x > 20 && x <= 30) { console.log('you are an young') }
else if (x > 30 && x <= 40) { console.log('you are an adult') }
else if (x > 40) { console.log('you are old') }
else { console.log('enter a valid age') }*/

/*let input = prompt('Enter your table number')
for (let x = input; x <= input; x++) {
    for (let y = 1; y <= 11; y++)
        console.log(x,' X ' ,y, ' = ',x * y)
}*/

/*function sum() {
    let z=x+y
    return z
}
let x=Number(prompt('Enter the first number'))
let y=Number(prompt('Enter the second number'))
console.log('The sum of two numbers is',x+y)*/

/*function lavan(x,y){
    if (x>y){console.log(x,'is greater than',y)}
    else {console.log(y,'is greater than',x)}
}
let x=Number(prompt('Enter your first number'))
let y=Number(prompt('Enter your second number'))
lavan(x,y)*/

/*let arr = [70, 30, 10, 1, 34, 8]
let small = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (small > arr[i]) {
        small = arr[i]
    }
}
console.log(small)*/
/*let arr = [70, 30, 10, 1, 34, 8]
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
console.log(sum)*/

/*let x = prompt('enter any word');
let org = x;
let splitted_arr = x.split('')
let reversed_arr = splitted_arr.reverse();
if (org == reversed_arr) {
    console.log('its a palindrome')
} else {
    console.log('its not a palindrome')
}*/

//let x=document.getElementById('heading')
//let x=document.getElementsByClassName('heading')[0]//classnumber
//let x=document.getElementsByTagName('h1')[1]
//console.log(x)

//let x=document.querySelector('h1')
//console.log(x.style.color='blue')

//let div=document.createElement('div')
//let x=document.querySelector('#container')
//div.innerHTML='hi'
//div.classList.add('sub')
//x.appendChild(div)
//div.setAttribute('class','sub')
//console.log(div)
//shift+alt+a=comment shortvut keys

//let userame = prompt("What is your name?");
//console.log(`welcome,${userame}.come sit here.`);

/* let result = prompt("Is the book good?");
console.log(result);
console.log(result == "yes");
if (result == "yes") {
  console.log("Thank you!");
}
if (result == "no") {
  console.log("Uh-oh!Thanks for the feedback.");
} */
/* let math = 27;
-*+                      BVet social = 31;
let science = 32;
let telugu = 35;
let english = 49;
let passmarks = 35;
/* if (math > passmarks) {
  console.log("I will buy you a cycle");
} else if (social > passmarks) {
  console.log("I will buy you a cycle");
} else if (science > passmarks) {
  console.log("I will buy you a cycle");
} else if (telugu > passmarks) {
  console.log("I will buy you a cycle");
} else if (english > passmarks) {
  console.log("I will buy you a cycle");
} else {
  console.log("Betterluck nect time");
} */
/* if (
  math > passmarks ||
  social > passmarks ||
  science > 32 ||
  telugu > passmarks ||
  english > passmarks
) {
  console.log("I will buy you a cycle");
} else {
  console.log("Better luck next time"); 
} */
/* let sureshAge, hareeshAge, nareshAge;
sureshAge = prompt("Suresh,What is your age");
console.log("suresh age is:", sureshAge); //console.log(`suresh age is: ${sureshAge}`);
console.log("Thank you for answering");
console.log("Please subscribe to our channel");

hareeshAge = prompt("Hareesh,what is your age");
console.log("hareesh age is:", hareeshAge);
console.log("Thank you for answering");
console.log("Please subscribe to our channel");

nareshAge = prompt("Naresh,what is your age");
console.log("naresh age is:", nareshAge);
console.log("Thank you for answering");
console.log("Please subscribe to our channel"); */

//creating and calling a function to shorten above code

/* function thankYouMesssage() {
  console.log("Thank you for answering");
  console.log("Please subscribe to our channel");
}  

//creation of function

let sureshAge, nareshAge, hareeshAge;
sureshAge = prompt("Suresh,what is your Age");
console.log(`Suresh age is: ${sureshAge}`);
thankYouMesssage(); //calling the function

nareshAge = prompt("Naresh,what is your Age");
console.log(`Naresh age is: ${nareshAge}`);
thankYouMesssage(); //calling the function

hareeshAge = prompt("Hareesh,what is your Age");
console.log(`hareesh age is: ${hareeshAge}`);
thankYouMesssage(); //calling the function */

/* let thankYouMesssage=function(){
   console.log("Thank you for answering");
  console.log("Please subscribe to our channel");
} */
//or
/* let thankYouMesssage;
thankYouMesssage=function(){
   console.log("Thank you for answering");
  console.log("Please subscribe to our channel");
} */

//passing parameters into a function

/* function thankYouMesssage(name, age) { */
/*  if (age >= 0) {
    console.log(`${name} age is: ${age}`);
  } else if (age == null) {
    console.log(`${name} is not entered`);
  } else console.log("No action"); OR*/

/*  console.log(`${name} age is : ${age || "not entred age"}`);
  let waitingTime;//local scope
  waitingTime = 18 - age;
  if (age >= 18) {
    console.log(`${name} ,you will get Driving License`);
    console.log("Please subscribe to our channel");
  } else {
    console.log(
      `${name},you need to wait ${waitingTime} more year(s) to get driving else` //or `${name},you need to wait ${18-age} more year(s) to get driving else`
    );
  }
  currentTotalAge = currentTotalAge + age;
  console.log(`Current total age is: ${currentTotalAge}`);
  console.log("Thank you for answering");
}
let sureshAge, nareshAge, hareeshAge;
let currentTotalAge;//Global scope
currentTotalAge = 0;
sureshAge = Number(prompt("Suresh,what is your Age"));
thankYouMesssage("suresh", sureshAge);
nareshAge = Number(prompt("Naresh,what is your Age"));
thankYouMesssage("Naresh", nareshAge);
hareeshAge = Number(prompt("Hareesh,what is your Age"));
thankYouMesssage("Hareesh", hareeshAge);
console.log(`Total age is ${currentTotalAge}`);
 */

//Objects

/* let student = {
  //creation of object
  name: "lavan",
  phone: 123456789,
  adress: "kurnool",
};
console.log(`${student.name} is from ${student.adress}`); //accessing

//updation of values method 2 dot opertion
student.name = "Lavan";
console.log(student.name);
//deletion direct or using delete key word
delete student.phone;
console.log(student.phone)//will show undefined in console
 */
/* 
let fullName = "Lavan kumar";
console.log("how are you");
function wish() {
  console.log("Happy birthday");
  console.log("How are you");
  console.log(this); //global shiws window information
}
wish();
let student = {
  name: fullName,
  phone: 123456,
  address: "pattikonda,kurnool",
  wish: function () {
    console.log(`Happy birthday ${this.name}`);
    console.log("How are you");
    console.log(this); //shows only object information
  },
};
student.wish();
//alert(500); //alert method converts everything into string
alert(JSON.stringify(student));// */

/* let patient = {
  name: "pramila",
  height: 162,
  weight: 62,
  fullname: "K Pramila", //or "full name" if we want space and called with console.log(patient.["full name"]) same in case of number key
};
console.log(patient); */

/* let key = prompt("Enter which key do you want?name or age?");
let person = {
  name: "lavan",
  age: 25,
};
console.log(person[key]); */
/* 
let name = "lavan";
let age = "25";
role = "software";

let employee = {
  /*  name:name,
  age:age, // this is retendanc,to avoid we can use short hand property
  role:role, */
/*  name,
  age,
  role,
};
console.log(employee);
 */
/* let dhoni = {
  name: "Mahendra singh Dhobi",
  age: 42,
  isCaptainCool: true,
  teams: ["India", "csk"],
  stats: {
    matches: 528,
    runs: 17266,
    centuries: 16,
  },
  retire: function () {
    return `${this.name} retired from international cricket in 2020.`;
  },
};
console.log(dhoni.name);
console.log(dhoni.stats.runs);
console.log(dhoni.teams[0]);
console.log(dhoni.retire()); */

/* let caluculator = {
  add: function (a, b) { //or shp add(a,b){};
    return `${a + b}`; //or return a+b
  },
  multiply: function (a, b) {
    return `${a * b}`;
  },
  subtraction: function (a, b) {
    return `${a - b}`;
  },
};
console.log(caluculator.add(5, 2));
console.log(caluculator.subtraction(10, 2));
console.log(caluculator.multiply(3, 7)); */

/* let library = {
  name: "Lavan Library",
  books: [],
  totalBooks: 0,
  addBook(title) {
    this.books.push(title);
    this.totalBooks++;
  },
};
library.addBook("Wings of fire");
library.addBook("Shoot Dive Fly");
library.addBook("Love story of a commando");
console.log(library.books);
console.log(library.totalBooks); */

//DOM SELECTORS

/* let x = document.getElementById("heading"); //ID SELECOTR
console.log(x); */
/* let x = document.getElementsByClassName("heading")[1]; //class selectot
console.log(x); */
/* let x = document.getElementsByTagName("h1"); //tag selector
console.log(x);
 */
/* let x = document.querySelector("h1"); //or (.classname,#idname)by tag name
console.log(x); //only 1 element */
/* let x = document.querySelectorAll(".heading");
console.log(x); //for multiple elements */

//METHODS
//1.Method Getting

//1 innerHTML
/* let x = document.querySelector("#heading");
console.log(x.innerHTML); */

//2 innerText
/* let x = document.querySelector(".heading");
console.log(x.innerText); */

//2.method setting

// Style (only for changing)
/* let x = document.querySelector(".heading");
x.style.color = "blue";
console.log(x); */

/* let x = document.querySelector(".heading");
x.innerHTML = "Lavan";
console.log(x.innerHTML); */

//3.getAttribute getting
/* let x = document.querySelector(".heading1");
console.log(x.getAttribute("class")); */

//setAttribute setting
/* let x = document.querySelector(".heading");
x.setAttribute("class", "main_heading");
console.log(x); */

//value to acess value of a textbox

/* let x = document.querySelector(".input");
console.log(x.value); */

//Events

/* let x = document.querySelector("#heading");
x.addEventListener("click", function () {
  x.innerText = "Lavan";
  x.style.backgroundColor = "Red";
  x.style.color = "blue";
}); */
/* let x = document.querySelector("#heading");
let y = document.querySelector("#input");
x.addEventListener("click", function () {
  x.innerText = "Lavan";
  y.value = "Hi Lavan,Please enter your age";
}); */
let x = document.querySelector("#heading");
let y = document.querySelector("#input");
let submit = document.querySelector("#submit");
submit.addEventListener("click", function () {
  x.innerHTML = `Hi ${y.value},How are you`;
  y.value = "";
});
