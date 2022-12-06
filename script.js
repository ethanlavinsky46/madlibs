let questions = 9;

let questionsLeft = ' [' + questions + ' questions left]';
let adjective1 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let verb1 = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let adjective2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let noun1 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let verb2 = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let adjective3 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let noun2 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let adjective4 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let adjective5 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

alert('All done. Ready for the message?');



let sentence = "<h2>Our school cafeteria has really " + adjective1;
sentence += ' food. Just thinking about it makes my stomach ' + verb1;
sentence += ' . The spaghetti is ' + adjective2;
sentence += ' and tastes like ' + noun1;
sentence += ' . One day, I swear one of my meatballs started to ' + verb2;
sentence += ' ! The tacos are totally ' + adjective3;
sentence += ' and look king of like old ' + noun2;
sentence += " . My friend actually likes the pizza, even though it's " + adjective4;
sentence += ' and ' + adjective5 + '.</h2>';
document.write(sentence);
