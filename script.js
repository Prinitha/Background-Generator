// var h3 = document.querySelector("h3");
// var input1 = document.querySelector("input[name=color1]");
// var input2 = document.querySelector("input[name=color2]");
// var body = document.querySelector("body");
// console.log(body.style.background);

// setGradient();

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ input1.value 
// 	+ ", " 
// 	+ input2.value 
// 	+ ")";
// 	h3.textContent = body.style.background + ";";
// }

// input1.addEventListener("input", setGradient);

// input2.addEventListener("input", setGradient);

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const usernames = []
const myArray = array.forEach(name => {
	usernames.push(name.username+"!");
})
console.log(usernames, array);


//Create an array using map that has all the usernames with a "? to each of the usernames
const map_usernames = array.map(name => { return name.username+"?"});


//Filter the array to only include users who are on team red
const filter_users = array.filter(name => {name.team === "red"});

//Find out the total score of all users using reduce`
// let score;
const total_score1 = array.reduce((accumulator,name) => accumulator+name.score,0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum.map((num, i) => {
	return num * 2;
})

const duplicateArray = array.map(values => {return values});
const newArray = duplicateArray.map(entity => {
	entity.items = entity.items.map(itemElements => {
		return itemElements+"!";
	})
	return entity;
})


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;
// object1.a = 4
// object2.a = 4
// object3.a = 4
// object4.a = 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal{
	constructor(name, type, color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
}
class Mamal extends Animal{
	constructor(name, type, color){
		super(name, type, color);
	}
	sound(){
		console.log(this.name, this.type, this.color);
	}
}

let cow = new Mamal("a","b","c");
cow.sound();

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
var checkJohn = dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const inCludeJohnList = dragons.filter(entity => {
	return entity.includes('John');
})


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
var calculatePower = (number) => {
	return number**100
}

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//infinity


// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);



// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//'🐢======='


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

// to this:
'my name is Rudolf the raindeer'



var represent = Object.entries(obj).map(value => value.join(" ")).join(" "); 



const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
	// var temp = -Infinity;
	// for (var i=0; i<arr.length;i++){
	// 	for(var j=0; j<arr.length;j++){
	// 		if(arr[i]>arr[j]){
	// 			if(temp < arr[i]){
	// 				temp = arr[i];
	// 			}
	// 		}
	// 	}
	// }
	// console.log(temp);
	var temp = -Infinity;
	for (var i=1; i<arr.length;i++){
		if(!isNaN(arr[i]) && temp<arr[i]){
			temp = arr[i];
		}
	}
	console.log(temp);
}

function biggestNumberInArray2(arr) {
	
}		


function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
	for (thing in basket){
		if(thing === lookingFor)
			return lookingFor+" is present";
	}
	return lookingFor+" is not present";
}

function foo(){
	foo()
}

foo();













