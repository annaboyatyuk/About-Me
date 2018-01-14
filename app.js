'use strict';

var userPoints = 0;

console.log('Guessing game about me!');

// alert('Let\'s play a guessing game!');

// var userName = prompt('But first, what\'s your name?');
// alert('Welcome ' + userName + '! This is a fun game, I promise.');

// var answer1 = prompt('Does Anna like hiking?' , 'Type yes or no').toLowerCase();

// console.log('the user answers the first question:' + answer1);

// //toLowerCase
// //use a confirm box to show the score

// if (answer1 === 'yes' || answer1 === 'y') {
//   userPoints++;
//   alert('Correct! I love the nature and the views, but I also hate the walking up a mountain part.');
// } else {
//   userPoints++;
//   alert('Correct! I hate the process of walking up mountains, but I also really love the nature and the views');
// }


// alert('Those were both right, you\'re welcome.');


// var answer2 = prompt('Does Anna like to read books?' , 'Type yes or no').toLowerCase();
// console.log('the user answers the second question:' + answer2);

// if (answer2 === 'yes' || answer2 === 'y') {
//   userPoints++;
//   alert('I love books! Sadly though, I haven\'t had much time for reading');
// } else {
//   alert('I love books! Sadly though, I haven\'t had much time for reading');
// }


// var answer3 = prompt('Does Anna have a pet tiger?' , 'Type yes or no').toLowerCase();
// console.log('the user answers the third question:' + answer3);

// if (answer3 === 'no' || answer3 === 'n') {
//   userPoints++;
//   alert('You got it, that would be dangerous.');
// } else {
//   alert('Not at the moment, but maybe one day.');
// }


// alert(userName +'! You have ' + userPoints + ' points!');


// var answer4 = prompt('Does Anna want to go to Iceland?' , 'Type yes or no').toLowerCase();
// console.log('the user answers the fourth question:' + answer4);

// if (answer4 === 'yes' || answer4 === 'y') {
//   userPoints++;
//   alert('Thats my number 1 traveling goal.');
// } else {
//   alert('Who wouldn\'t want to go see it?');
// }


// var answer5 = prompt('Does Anna like to procrastinate?' , 'Type yes or no').toLowerCase();
// console.log('the user answers the fifth question' + answer5);

// if (answer5 === 'yes' || answer5 === 'y') {
//   userPoints++;
//   alert('I am learning that that\'s exactly what I like to do');
// } else {
//   alert('I am actually learning that that\'s exactly what I like to do');
// }


// var answer6 = 3;
// var notDone = true;
// var guess;
// for (var guesses = 4; guesses > 0 && notDone; guesses--) {
//   guess = prompt('How many siblings does anna have'); // get user input
//   guess = parseInt(guess); // convert user input to number
//   if (guess < 3) { //if the user guesses too low
//     alert('Try again, theres more than that!');
//     console.log('the user guessed too low' , guess);
//   }
//   if (guess > 3) { //if the user guesses too high
//     alert('Not quite that many, try again!');
//     console.log('the user guessed too high' , guess);
//   }
//   if (guess === answer6) { //if the user gets the right answer
//     alert('you got it!');
//     notDone = false;
//     userPoints++;
//     console.log('the user got the right answer' , guess);
//   } else if (guesses === 1) { //this had to be the last statement so that this is the last alert
//     alert ('you are out of guesses');
//   }
// }
// console.log('the user answered question 6' , guess);

// alert('I have 3 sisters!');

var answer7 = ['Iceland' , 'London' , 'Loch Ness' , 'Lake Hillier' , 'Equador'];
var guessAgain = true;
var question7;

for (var tries = 6; tries > 0 && guessAgain; tries --) {
  question7 = prompt('What top five places does Anna want to visit?' , 'you have 6 guesses').toLowerCase();
  console.log('places i want to visit' , answer7);
  if (question7 !== answer7['']) {
    alert('Nope, try another place!');
    console.log('the user guessed a favorite place' , question7);
  } 
  if (question7 === answer7['']) {
    alert('you got one!');
    guessAgain = false;
    userPoints++;
    console.log('the user guessed a place' , question7);
  }
}



alert('Congratulations ' + userName + '! You have ' + userPoints + ' points!');

alert('Thank you for taking your time to play!');








