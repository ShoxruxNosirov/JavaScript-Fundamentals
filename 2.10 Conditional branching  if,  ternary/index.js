let year = confirm('In which year was the ECMAScript-2015 specification published?');

if (year) {
  console.log( 'Ok' );
} else {
  console.log( 'No' );
}

year ? console.log('ok') : console.log('No')