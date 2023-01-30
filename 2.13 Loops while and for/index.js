let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log( i );
  i++;
}

i = 0;
do {
    console.log( i );
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
console.log( 'Sum: ' + sum );

    for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    console.log(i); // 1, then 3, 5, 7, 9
  }  

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');
      // what if we want to exit from here to Done (below)?
    }
  }
  console.log('Done!');