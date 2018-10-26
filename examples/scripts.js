let myVariable = 5;
console.log(myVariable);
console.log("Hello, world!");
let colors = ['orange', 'blue', 'white'];
colors.push('green');
colors.forEach(oneColor => {
  if(oneColor === 'orange') {
    console.log(`Ooh ${oneColor}, thats my favourite color`);
  } else {
    console.log('Just another color:' + oneColor);
  }
});
