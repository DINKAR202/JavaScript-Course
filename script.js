// <!-- arrow function -->
let greet = () => {
  console.log("hello function");
};

greet();
// setTimeout(() => {
//     console.log('under timeout');
// }, 1000)

let sum2 = (a, b) => a + b;

let half = (a) => a * 2;

let obj123 = {
  greeting: "Good morning",
  names: ["Harry", "din", "kundan", "skill", "Djkhiladi"],
  speak() {
    this.names.forEach((student) => {
      console.log("this.greeting" + " cock " + student);
    });
  },
};
obj123.speak();

// <!-- JSON tutorial -->

let jsonObj = {
  name: "DK",
  channel: "dinkar",
  age: "21",
  email: "dinkar@gmail.com",
  mobileNo: "707964648",
};
console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

setTimeout(() => {
  myJsonStr = myJsonStr.replace("DK", "NK");
  myJsonStr = myJsonStr.replace("dinkar", "Nikkita");
  myJsonStr = myJsonStr.replace("21", "25");
  console.log(myJsonStr);
}, 1000);

// clickable

function change() {
  document.getElementById("chnage2").innerHTML = "button clicked";
}

function change() {
  removeEventListener.getElementById("chnage2").innerHTML = "button clicked";
}

// Math

let m = Math;
console.log(m);

let a = 20.1234152;
let b = 30;

console.log("this is without round ", a, b);
console.log("this is round ", Math.round(a), Math.round(b));

// sqare value
console.log(Math.sqrt(36));
console.log(Math.sqrt(64));
console.log(Math.sqrt(50));

//ceil value
console.log("5.8 rounded up to nearest value", Math.ceil(5.8));
console.log("6.8 rounded up to nearest value", Math.ceil(6.8));

// ES6
const greet2 = (name) => {
  return "Hello there " + name;
};

console.log(greet2("WsDinkar"));

const sqr = (num) => num * num;

console.log(sqr(6));

console.log(sqr(5));

const old = [1, 2, 3, 4, 5];
const newArray = ["A", "B", "C", "D", ...old, 6, 7, 8, 9];
console.log(newArray);

// spread operator
const sum = (a, b, c, d) => a + b + c + d;
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13));

// rest operator
const add = (...numbers) => {
  let total = 0;
  numbers.forEach((n) => {
    total += n;
  });
  console.log(total);
};
add(1, 2, 3);

const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 2;
const table = series.map((s) => s * num);
console.log(table);

class Person {
  constructor(uName, uAge) {
    this.name = uName;
    this.age = uAge;
  }
  details() {
    console.log(`The age of ${this.name} is ${this.age} years`);
  }
}

const p = new Person("Wscobe tecg", 11);
p.details();

function myFunction(a, b) {
  return a * b;
}

let x = myFunction(10, 5);
console.log(x);

document.getElementById("demo45").innerHTML = "Date :" + Date();

// width and height

document.getElementById("memo").innerHTML =
  "Browser inner window width: " +
  window.innerWidth +
  "px <br>" +
  "Browser inner window height: " +
  window.innerHeight +
  "px";

function clickhere() {
  // window.location.assign("https://www.w3schools.com/js/tryit.asp?filename=tryjs_loc_assign");
  window.open(
    "https://www.w3schools.com/js/tryit.asp?filename=tryjs_loc_assign"
  );
  // window.history.forward()
  // window.history.back()
}

// fetch("https://jsonplaceholder.typicode.com/users")
// fetch("./json/student_data.json")
// .then((response)=> response.json())
// .then((data)=> {
//     for(var x in data){
//         console.log(data)
//         var a = `${data[x].name}. ${data[x].age} - ${data[x].city} <br>`;
//         document.write(a);

//     }
// })
// .catch((error) => document.write("Can't fetch data"));

document.getElementById("saveForm").addEventListener("click", function (e) {
  var obj = {
    title: document.getElementById("titleText").value,
    body: document.getElementById("bodyText").value,
    userId: document.getElementById("userId").value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
