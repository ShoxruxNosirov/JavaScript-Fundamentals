function showMessage() {
    console.log( 'Hello everyone!' );
}

let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}
showMessage(); 

userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  console.log(message);
}
console.log( userName ); // John before the function call
showMessage();
console.log( userName );

userName = 'John';
function showMessage() {
  let userName = "Bob"; // declare a local variable
  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}
showMessage();
console.log( userName );