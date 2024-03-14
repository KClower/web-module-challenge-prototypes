// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
this.name = name;
this.age = age;
this.stomach = []
}
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}
Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person("Kevin", 42);
const personTwo = new Person("Lee", 43);
const personThree = new Person("Oscar", 57);


console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

personThree.eat("tacos")
personThree.eat("pizza")
personThree.eat("ramen")

console.log(personThree.stomach);

personThree.poop();

console.log(personThree.stomach);
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon,) {
this.model = model;
this.milesPerGallon = milesPerGallon;
this.tank = 0
this.odometer = 0
}

Car.prototype.fill = function(gallons){
 this.tank = this.tank + gallons
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy; 
  }
  Baby.prototype = Object.create(Person.prototype); 

  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
  }

const baby = new Baby("Kyle", 2, "trains")
 


 console.log(baby)
 console.log(baby.play())
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:

  1. The value of this is determined by the execution context of the code. This means that the value of this can change depending on where the code is being executed.

  2. In an object method, this refers to the object itself. This allows you to access the object's properties and methods from within the method.

  3. In a function, this refers to the global object. This means that you can access global variables and functions from within the function.

  4. In strict mode, this is undefined in a function. This means that you must explicitly bind the this keyword to an object before using it in a function.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
