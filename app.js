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
} else {
    userPoints++;
    alert('Correct! I hate the process of walking up mountains, but I also really love the nature and the views');
}

alert('Those were both right, you\'re welcome.');
alert('You have ' + userPoints + ' points!');

var answer2 = prompt('Does Anna like to read books?' , 'Type yes or no').toLowerCase();
console.log(answer2);

if (answer2 === 'yes' || answer2 === 'y') {
    userPoints++;
    alert('I love books! Sadly though, I haven\'t had much time for reading'); 
} else {
    alert('I love books! Sadly though, I haven\'t had much time for reading');
}

alert('Update: you have ' + userPoints + ' points.');

var answer3 = prompt('Does Anna have a pet tiger?' , 'Type yes or no').toLowerCase();
console.log(answer3);

if (answer3 === 'no' || answer3 === "n") {
    userPoints++;
    alert('You got it, that would be dangerous.');
} else {
    alert('Not at the moment, but maybe one day.');
}

alert(userName +'! You have ' + userPoints + ' points!');

var answer4 = prompt('Does Anna want to go to Iceland?' , 'Type yes or no').toLowerCase();
console.log(answer4);

if (answer4 === 'yes' || answer4 === 'y') {
    userPoints++;
    alert('Thats my number 1 traveling goal.');
} else {
    alert('Who wouldn\'t want to go see it?');
}

alert('You\'re up to ' + userPoints + ' points!');

var answer5 = prompt('Does Anna like to procrastinate?' , 'Type yes or no').toLowerCase();
console.log(answer5);

if (answer5 === 'yes' || answer5 === 'y') {
    userPoints++;
    alert('I am learning that that\'s exactly what I like to do');
} else {
    alert('I am actually learning that that\'s exactly what I like to do');
}

alert('Congratulations ' + userName + '! You have ' + userPoints + ' points!');

alert('Thank you for taking your time to play!');








