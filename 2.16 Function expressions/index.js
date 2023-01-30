let sayHi = function() {
    console.log( "Hello" );
};
console.log( sayHi ); // function

function sayHii() {   // (1) create
    console.log( "Hello" );
}
  
let func = sayHii;    // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHii(); // Hello  

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  console.log( "You agreed." );
}
function showCancel() {
  console.log( "You canceled the execution." );
}
ask("Do you agree?", showOk, showCancel);