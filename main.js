let button = document.getElementById('button');
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let passcode = document.querySelector('.passcode');
let history_board = document.querySelector('.passcode-history');
let clear_button = document.getElementById('clear-button');
let delete_record = [];
let restore_button = document.getElementById('restore-button');

let timer_display = document.querySelector('.timer-display');
let timer = 10;

button.addEventListener ('click', generateNumber);
clear_button.addEventListener ('click', clearAllRecords);
restore_button.addEventListener ('click', restoreRecords);

// console.log(button)


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
  console.log(record)
  history_board.removeChild(record)
  startTimer()
  storeDeletedRecord(record)
}

function clearAllRecords() {
  let records = document.querySelectorAll('.passcode-record');

// in order to remove all items in array, need to loop one by one to remove
  records.forEach( function(record) {
    history_board.removeChild(record) //remove item
    storeDeletedRecord(record)
  });
  console.log(restore_button)
  restore_button.style.display = 'inline';
  startTimer()
  timer = 10
}

function storeDeletedRecord(record) {
  delete_record.push(record)
}

function restoreRecords() {
  delete_record.forEach( function(record) {
    history_board.appendChild(record) //create/add item
  });
  timer_display.style.display = 'inline';

  delete_record = []
  timer = 0;
  console.log(restoreRecords)
}

function startTimer() {
  restore_button.style.display = 'inline';
  timer_display.style.display = 'inline';

  let runTimer = setInterval(function () {
    if (timer > 0) {
      timer -= 1;

      timer_display.innerHTML = `${timer} seconds to restore your previous records`
    } else {
      clearInterval(runTimer)
      // restore_button.classList.add('display-none');
      restore_button.style.display = 'none';
      timer_display.style.display = 'none';
      timer = 10;
      delete_record = []
    }
  }, 1000);

}
