// const button = document.querySelector(".generateBtn");

let button = document.getElementById ('button');
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let passcode = document.querySelector('.passcode');

button.addEventListener ('click', generateNumber);

console.log(button)


function generateNumber() {
  let sixDigits = '';

  Math.floor(Math.random() * number.length);

  // console.log(Math.floor(Math.random() * number.length))

  for (let i = 0; i < 6; i++) {

  //   console.log(i)

  sixDigits += number[Math.floor(Math.random() * number.length)]

  //alternative
  // sixDigits += number[getRandomNumber()]

  passcode.innerHTML = sixDigits.split('').join(' ')

  // console.log(sixDigits)

  }

  //alternative is to add another function

  // function getRandomNumber() {
  //   return Math.floor(Math.random() * number.length)
  //
  // }
  //

}
