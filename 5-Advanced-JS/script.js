// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith'

var john = new Person('John', 1990, 'teacher');
var jane  = new Person('Jane', 1969, 'designer');
var mark  = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jane.lastName);
console.log(john.lastName);
console.log(mark.lastName);
*/




// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane =  Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'Designer'}
});
*/



// Primitives vs Objects
/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'San Fransisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


//////////////////////////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullAge(el){
    return el >=18;
}

function calculateAge(el){
    return 2016 - el;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeartRate);
*/



//////////////////////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job){
    if ( job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if ( job === 'teacher'){
        return function(name){
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');
*/




//////////////////////////////////////////////
// Lecture: IIFE
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

// IIFE
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//console.log(score);
*/




//////////////////////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);

retirementUS(1990);
retirementGermany(1990);

//retirement(66)(1990);


function interviewQuestion(job){
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }else if (job === 'teacher'){
            console.log(name + ', teahcer?');
        } else {
            console.log(name + ', Unemployed?');
        }
    }
}

interviewQuestion('teacher')('John');
*/




//////////////////////////////////////////////
// Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style == 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' amd I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' amd I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.' );
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');





var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullAge(limit, el){
    return el >= limit;
}

function calculateAge(el){
    return 2016 - el;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/





/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++){
        console.log(i + ': ' + this.answer[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if (ans === this.correct){
        console.log('Correct Answer!');
    } else{
        console.log('Wrong Answer, Try Again!');
    }
}

var q1 = new Question(
        'Is Javascript the coolest programming language in the world?',
        ['Yes', 'No'], 
        0);

       
var q2 = new Question(
        'What is the name of this course\'s teacher?',
        ['John', 'Michael', 'Jonas'], 
        2);
 
var q3 = new Question(
        'What does describe coding?',
        ['Boring', 'Hard', 'Fun'], 
        2);


var question = [q1, q2, q3];

var n = Math.floor(Math.random() * question.length);

question[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));

Question[n].checkAnswer(answer);
