// const button = document.querySelector(".generateBtn");

let button = document.getElementById ('button');
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let passcode = document.querySelector('.passcode');
let history_board = document.querySelector('.passcode-history');

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

  console.log(sixDigits)
    }


  getRecord(sixDigits) //
}


  //alternative is to add another function

  // function getRandomNumber() {
  //   return Math.floor(Math.random() * number.length)
  //
  // }
  //

function getRecord(sixDigits) {
  let element = document.createElement('div')
  element.classList.add('passcode-record')

//shows list of generated passcodes with remove button
  element.innerHTML = `<p class ='record'>${sixDigits}</p>
                      <button class='remove-button' type="button" name="button">Delete</button>`

  history_board.appendChild(element)
  let remove_button = element.querySelector('.remove-button');
  remove_button.addEventListener('click',removeRecord)

  console.log(history_board)
  console.log(remove_button)

}

function removeRecord(e) {
  let record = e.currentTarget.parentElement
  history_board.removeChild(record)

}
