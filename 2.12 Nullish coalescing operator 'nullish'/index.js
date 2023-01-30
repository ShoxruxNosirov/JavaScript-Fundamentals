let a, b = 'Anonymous';
let result = (a !== null && a !== undefined) ? a : b;
let user;

console.log(user ?? "Anonymous");

user = "John";

console.log(user ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");   // Supercoder

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0