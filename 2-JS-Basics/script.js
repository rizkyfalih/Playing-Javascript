
//Lecture: Variable
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 23;
console.log(age);

var fullAge  = true;
console.log(fullAge);
*/


// Lecture: Variable 2
/*
var name = 'john';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? '+ isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? '+ isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? '+ isMarried + '.');
*/


// Lecture : operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *=2;

console.log(ageJohn);
console.log(ageMark);
*/



//////////////////////////////////
// Lecture : if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes'){
    console.log(name + ' is married!');
}else{
    console.log(name + ' will hopefully marry soon');
}

isMarried = false;

if(isMarried){
    console.log('Yess');
}else{
    console.log('NOO');
}

if(23 == "23"){
    console.log('Something to print');
}
*/



////////////////////////////////////
// Lecture : boolean logic and switch
/*
var age = 25;

if(age <= 20) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30){
    console.log('John is a young man');
} else {
    console.log('John is a man');
}


var job = 'teacher';

job = prompt('What does john do?');

switch (job){
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a car');
        break;
    case 'cop':
        console.log('John fight crime');
        break;
    default:
        console.log('John does something else');
}
*/


//////////////////////////////////////
// Coding Challenge 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/


/*
var heightJohn = 20;
var heightMax = 25;
var heightLin = 23;
var ageJohn = 15;
var ageMax = 10;
var ageLin = 17;
var scoreJohn = heightJohn + (ageJohn * 5 );
var scoreMax = heightMax + (ageMax * 5 );
var scoreLin = heightLin + (ageLin * 5 );

if( scoreJohn > scoreMax && scoreJohn > scoreLin){
    console.log(' The Winner is John');
} else if( scoreJohn < scoreMax && scoreMax > scoreLin){
    console.log('The Winner is Max');
} else {
    console.log(' The Winner is Lin');
}
*/



////////////////////////////////////////////
// Lecture : Functions
/*
function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);

function yearUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement <= 0){
        console.log(name + ' has already retired.');
    } else {
        console.log(name + ' retires in '+ retirement + ' years');
    }
}

yearUntilRetirement('John', 1990);
yearUntilRetirement('Mike', 1969);
yearUntilRetirement('Mary', 1948);
*/



//////////////////////////////////////////
// Lecture: Statements and expressions
/*
function someFun(par){

}

var someFun = function(par) {

}

//Expressions
3 + 4;
var x  = 3;

//Statements
if(x === 5){
    //do something
}
*/



////////////////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990,1969,1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names[1]);


var john = ['John', 'Smith', 1990, 'Teacher', false];

john.push('blue');
john.unshift('Mr.')
john.pop();
john.shift();

console.log(john);

//alert(john.indexOf('Smith'));

if (john.indexOf('Teacher') === -1){
    console.log('John is not a teacher');
} else {

}
*/


///////////////////////////////////////////////////
// Lecture: Objects
/*
var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['Married'] = true;

console.log(jane);
*/


///////////////////////////////////////////////////
// Lecture: Objects
// V1.0
/*
var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);


// V2.0
var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
*/



//////////////////////////////////////////////
// Lecture: Loops
/*
for (var i = 0; i < 10; i++){
    console.log(i);
}

var names = ['John', 'Jane', 'Marry', 'Mark', 'Bob'];

// for loops

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0 ; i--){
    console.log(names[i]);
}


// While loops
var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
} 


for (var i = 1; i <= 5; i++){
    if (i === 3 ){
        break;
    }

    console.log(i);
}

for (var i = 1; i <= 5; i++){
    if (i === 3 ){
        continue;
    }

    console.log(i);
}
*/



//////////////////////////////////////////////////////
// Coding Challange 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

function printFullAge(years){
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++){
        ages[i] = 2016 - years[i];
    }
    
    for (var i = 0; i < ages.length; i++){
        if (ages[i] >= 18){
            console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else{
            console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years old, and is NOT full age.');
            fullAges.push(false);
        }
    }
    return fullAges;
}

var yearOfBirth = [1990, 1970, 1980];
var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2012, 1915, 1999]);