let sum = (a, b) => a + b;
console.log( sum(1, 2) ); // 3

let double = n => n * 2;
console.log( double(3) ); // 6

let sayHi = () => console.log("Hello!");
sayHi();

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ? () => alert('Hello!') : () => alert("Greetings!");
welcome();

sum = (a, b) => {
  let result = a + b;
  return result;
};
console.log( sum(1, 2) );