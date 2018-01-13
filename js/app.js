'use strict';

var userPoints = 0;

console.log('Guessing game about me!');

alert('Let\'s play a guessing game!');

var userName = prompt('But first, what\'s your name?');
alert('Welcome ' + userName + '! This is a fun game, I promise.');

var answer1 = prompt('Does Anna like hiking?' , 'Type yes or no').toLowerCase();
console.log(answer1);

//both of the answers are correct so do i even need an if statement?
//maybe for the points
//toLowerCase
//use a confirm box to show the score

if (answer1 === 'yes' || answer1 === 'y') {
    userPoints++;
    alert('Correct! I love the nature and the views, but I also hate the walking up a mountain part.');
}

if (answer1 === 'no' || answer1 === 'n') {
    userPoints++;
    alert('Correct! I hate the process of walking up mountains, but I also really love the nature and the views');
}

alert('Those were both right, you\'re welcome.')
alert('You have ' + userPoints + ' points!');

var answer2 = prompt('Does Anna like to read books?' , 'Type yes or no').toLowerCase();
console.log(answer2);

if (answer2 === 'yes' || 'y') {
    userPoints++;
    alert('I love books! Sadly though, I haven\'t had much time for reading') 
} else {
    //nothing happens if the answer is no
}

alert('Update: you have ' + userPoints + ' points.');

var answer3 = prompt('Does Anna have a pet tiger?' , 'Type yes or no').toLowerCase();
console.log(answer3);

if (answer3 === 'no' || "n") {
    userPoints++;
} else {
    alert('Not at the moment, but maybe one day.');
}

alert(userName +'! You have ' + userPoints + ' points!');









