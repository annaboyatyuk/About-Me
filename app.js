'use strict';

var userPoints = 0;
var questionNumber =0;

console.log('Guessing game about me!');

alert('Let\'s play a guessing game!');

var userName = prompt('But first, what\'s your name?');
function updateUser(){
  alert('Welcome ' + userName + '! This is a fun game, I promise.');
}
updateUser();

var answer1 = prompt('Does Anna like hiking?' , 'Type yes or no').toLowerCase();

questionNumber++;

console.log('the user answers the first question:' + answer1);
function firstQuestion() {
  if (answer1 === 'yes' || answer1 === 'y') {
    userPoints++;
    alert('Correct! I love the nature and the views, but I also hate the walking up a mountain part.');
    console.log('the user got the right answer to question 1 ' + answer1);
  } else {
    userPoints++;
    alert('Correct! I hate the process of walking up mountains, but I also really love the nature and the views');
    console.log('the user got the right answer to question 1 ' + answer1);
  }
  alert('Those were both right, you\'re welcome.');
}
//toLowerCase
//use a confirm box to show the score
firstQuestion();


var answer2 = prompt('Does Anna like to read books?' , 'Type yes or no').toLowerCase();
questionNumber++;
console.log('the user answers the second question:' + answer2);
function secondQuestion(){
  if (answer2 === 'yes' || answer2 === 'y') {
    userPoints++;
    alert('I love books! Sadly though, I haven\'t had much time for reading');
    console.log('the user got the right answer to question 2 ' + answer2);
  } else {
    alert('I love books! Sadly though, I haven\'t had much time for reading');
    console.log('the user got the wrong answer to question 2 ' + answer2);
  }
}
secondQuestion();


var answer3 = prompt('Does Anna have a pet tiger?' , 'Type yes or no').toLowerCase();
questionNumber++;
console.log('the user answers the third question:' + answer3);
function thirdQuestion() {
  if (answer3 === 'no' || answer3 === 'n') {
    userPoints++;
    alert('You got it, that would be dangerous.');
    console.log('the user got the right answer to question 3 ' + answer3);
  } else {
    alert('Not at the moment, but maybe one day.');
    console.log('the user got the wrong answer to question 3 ' + answer3);
  }

}
thirdQuestion();

alert(userName + '! You have ' + userPoints + ' points!');
console.log('updates the user on how many points they have');



var answer4 = prompt('Does Anna want to go to Iceland?' , 'Type yes or no').toLowerCase();
questionNumber++;
console.log('the user answers the fourth question:' + answer4);
function fourthQuestion(){
  if (answer4 === 'yes' || answer4 === 'y') {
    userPoints++;
    alert('Thats my number 1 traveling goal.');
    console.log('the user got the right answer to question 4 ' + answer4);
  } else {
    alert('Who wouldn\'t want to go see it?');
    console.log('the user got the wrong answer to question 4 ' + answer4);
  }
}
fourthQuestion();

var answer5 = prompt('Does Anna like to procrastinate?' , 'Type yes or no').toLowerCase();
questionNumber++;
console.log('the user answers the fifth question' + answer5);
function fifthQuestion(){
  if (answer5 === 'yes' || answer5 === 'y') {
    userPoints++;
    alert('I am learning that that\'s exactly what I like to do');
    console.log('the user got the right answer to question 5 ' + answer5);
  } else {
    alert('I am actually learning that that\'s exactly what I like to do');
    console.log('the user got the wrong answer to question 5 ' + answer5);
  }
}
fifthQuestion();


var answer6 = 3;
var notDone = true;
var guess;
function sixthQuestion(){
  for (var guesses = 4; guesses > 0 && notDone; guesses--) {
    guess = prompt('How many siblings does anna have'); // get user input
    guess = parseInt(guess); // convert user input to number
    if (guess < 3) { //if the user guesses too low
      alert('Try again, theres more than that!');
      console.log('the user guessed too low ' , guess);
    }
    if (guess > 3) { //if the user guesses too high
      alert('Not quite that many, try again!');
      console.log('the user guessed too high ' , guess);
    }
    if (guess === answer6) { //if the user gets the right answer
      alert('you got it!');
      notDone = false;
      userPoints++;
      console.log('the user got the right answer to question 6 ' , guess);
    } else if (guesses === 1) { //this had to be the last statement so that this is the last alert
      alert ('you are out of guesses');
    }
  }
}
sixthQuestion();
questionNumber++;
console.log('the user answered question 6' , guess);


alert('I have 3 sisters!');


var answer7 = ['iceland' , 'london' , 'loch ness' , 'lake hillier' , 'equador'];
var guessAgain = true;
var tries = 0;
function seventhQuestion(){
  while (guessAgain && tries < 7) {
    var question7 = prompt('Can you guess one of the top five places that Anna wants to visit?').toLowerCase();
    console.log('question7' + question7);
    for (var x = 0; x < answer7.length; x++)
      if (answer7[x] === question7.toLowerCase()) {
        alert('You got it! I want to go to ' + question7);
        guessAgain = false;
        tries++;
        userPoints++;
        console.log('the user got one of the answers to question 7 correct' + question7);
        break;
      }
    if (answer7[x] !== question7.toLowerCase()) {
      alert('I would probably like to go there but its not my top 5!');
      tries++;
      console.log('the user got the wrong answer to question 7 ' , question7);
    }
    alert('The top 5 places I want to visit are: ' + answer7);
    console.log('the user answered question 7 ' , question7);
  }
}
seventhQuestion();


questionNumber++;




alert('Congratulations ' + userName + '! You have ' + userPoints + ' points out of ' + questionNumber + ' questions!');

alert('Thank you for taking your time to play!');




