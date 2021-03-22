function myFunction() {
  document.getElementById("demo7").innerHTML = "Paragraph changed.";
}

var x;
x = 6;
document.getElementById("demo").innerHTML = x;

var x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;

var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = "The value of z is: " + z;

const price4 = 10;
const price5 = 20;
const price6 = price4 + price5;
document.getElementById("demo").innerHTML = price6;

var price1 = 100;
var price1 = 200;
var price3 = price1 + price1;
console.log(price3);
document.getElementById("demo").innerHTML = price3;

let price7 = 10;
let price8 = 20;
let price9 = price7 + price8;
console.log(price9);

var price10 = 10;
let price11 = 100;
console.log(price11);

var carName;
console.log(carName);

var carName = "hello";
console.log(carName);

var carName = "Total";
carName = "data";
console.log(carName);

const data = "control";
console.log(data);

let point = "point";
point = "pop";
console.log(point);

age = 20;
job = "it";
console.log(job);

let testing1 = "5" + 5;
console.log(testing1);

let testing2 = 5 + "5";
console.log(testing2);

let testing3 = "5" + 5 + 5 + 5;
console.log(testing3);

let testing4 = 5 + 5 + 5 + "5";
console.log(testing4);

var length = 10;
var lastname = "muthu";
var x = { firstName: "ramadoss", lastName: "virat" };

console.log(x);
console.log(lastname);
console.log(length);

var xy = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

console.log(xy);
console.log(myFunction(5, 5));

document.getElementById("demo11").innerHTML = xy;

myFunction1();
function myFunction1() {
  var carName = "Volvo";
  document.getElementById("demo12").innerHTML = typeof carName + " " + carName;
}
document.getElementById("demo13").innerHTML = typeof carName;

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
sln = txt.length;
console.log(sln);

var texted = " hello world to all the data   ";

ptr = texted.toString();
console.log(ptr);
ptr = texted.toUpperCase();
console.log(ptr);
ptr = texted.toLowerCase();

console.log(ptr);
ptr = texted.toLocaleLowerCase();
console.log(ptr);

var str = "i w locate";
var loc = str.indexOf("locate");
console.log(loc);

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
console.log(res);

var stalin = "please vistied microsoft";
var res1 = stalin.replace("microsoft", "w3schools");
console.log(res1);
var stalin1 = "please microsoft visted microsoft";
var res2 = stalin1.replace("microsoft\n", "w3schools");
console.log(res2);

var stalin2 = "5";
var sta1 = stalin2.padStart(4, 0);
console.log(sta1);

var stalin3 = "5";
var sta3 = stalin3.padEnd(4, 0);
console.log(sta3);
var fruit = ["apple", "orange", "mongo", "Banana", "graps"];
document.getElementById("demo").innerHTML = fruit;
console.log(fruit);

var fruit1 = fruit.length;
console.log(fruit1);
var fruit2 = fruit.length - 1;
console.log(fruit2);

var fruit5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo14").innerHTML = fruit5.join(" * ");
console.log(fruit5);
fruit5.push("graph");
console.log(fruit5);
fruit5.pop();
console.log(fruit5);

fruit5.splice(4, 0);
console.log(fruit5);

fruit5.slice(4, 4);
console.log(fruit5);

var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo15").innerHTML = text;

try {
  console.log("hi");
} catch (err) {
  console.log(err);
} finally {
  console.log("i will be executed");
}

let carN = "benz";
function myFunction10() {
  var carN = "Volvo";
  console.log(carN);
}
myFunction10();
console.log("benz");

var x;
x = 5;
console.log(x);

const q = 6;

console.log(q);

var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var person2 = {
  firstName: "muthu",
  lastName: "kumar",
  id: 5566
};
person1.fullName.call(person2);
console.log(person1.fullName.call(person2));

class car {
  constructor(name, year) {
    this.name = name;
    this.age = age;
  }
}

let car1 = new car("audi", 200);
console.log(car1);

let car2 = new car("benz", 4000);
console.log(car2);

var x = 15 * 5;
debugger;

console.log(x);

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

console.log(person);

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person);

var person = new Object();
person.firstName = "muthu";
person.lastName = "kumar";
person.age = 30;
person.eyeColor = "red";

console.log(person);

var person = {
  firstName: "muthu",
  lastName: "kumar",
  age: 30,
  eyeColor: "red"
};

var x = person;
x.age = 10;
x.lastName = "yam";
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);

var text = "";
var person = {
  firstName: "muthu",
  lastName: "kumar"
};
var x;

for (x in person) {
  text += person[x];
  console.log(person[x]);
}

var person = { name: "John", age: 30, city: "New York" };

var myString = JSON.stringify(person);
console.log(myString);

var person = {
  name: "John",
  age: function() {
    return 30;
  }
};

var myString = JSON.stringify(person);
console.log(myString);

var person = {
  name: "John",
  age: 30,
  language: "en",
  get lang() {
    return this.language;
  }
};

console.log(person.language);

var person = {
  name: "John",
  age: 30,
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

person.lang = "en";

console.log(person.language);

function myDisplayer(some) {
  document.getElementById("demo16").innerHTML = some;
  console.log(some);
}

let myPromise = new Promise(function(resolve, reject) {
  let x = 1;
  if (x == 0) {
    resolve("ok");
  } else {
    reject("error");
  }
});

myPromise.then(
  function(value) {
    myDisplayer(value);
  },
  function(error) {
    myDisplayer(error);
  }
);

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

setTimeout(myFunction(), 30000);

function myFunction() {
  console.log("hello world");
}

function mOver(obj) {
  obj.innerHTML = "Thank You";
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me";
}

document.getElementById("demo17").innerHTML =
  "The full URL of this page is:<br>" + window.location.port;

function newDoc() {
  window.location.assign("https://www.w3schools.com");
}
