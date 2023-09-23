/*file to test javascript basics */


//variables
var a = 24;

//if else statement using Nan
if (isNaN(a)){
    alert("a is not a number");
}else{
    alert("a is number of value" + a);

}

//for loop test
let sum = 0; //classic loop
let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
console.log(sum);

for(let item of arr){sum += item;} //loop over collection

var car = {make:"Ford", model:"Mustang", year:1971};
for(var p in car){
    if(isNaN(car[p])) { //enumerable properties loop
        car[p] = car[p].toUpperCase();
    }
}

//switch case
switch (Math.floor(Math.random()*3)){
    case 1: col = "red";
    break;
    case 2: col = "blue";
    break;
    default: col = "green";

    console.log(col);
}

//do while
do{    //page and len are not initialized in this example
    var j = page.indexOf("=",j);
    if (j != -1){
        s += page.substring(j, j+2);
    }

} while (j != -1 && j < len);


//while loop
var count = 0;
//i and page are also not initialized in this example
while((i = page.indexOf("href=", i)) != -1){
    count++
}


//simple function
var userInput = prompt("Please enter a fruit: ");
function isFruit(userInput){
    if(userInput == "apple" || userInput =="fig" || userInput =="pear" ){
        return true;
    }
    return false;
}
isFruit(userInput);



//simple array
//all valid ways of creating an Array
var cars = new Array();
cars[0] = "Honda Civic";
cars[1] = "Ford Focus";
cars[2] = "Fiat Punto";

cars = new Array("Honda Civic", "Ford Focus", "Fiat Punto"); 
cars = ["Honda Civic", "Ford Focus", "Fiat Punto"];

cars.length 
Array.prototype.make = function(i) {return this[i].split(" ")[0]}
cars.make(0)

//create objects
//2 different ways to create an object
vehicle = { make: "Ford", model: "Focus", year: 2012 };
vehicle = new Object();
vehicle.make = "Ford";
vehicle.model = "Focus";
vehicle.year = 2012;

//this defines the constructor methof for an object instance
function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }

// class example
class Circle {
    constructor(radius, x, y) { this.radius = radius;
    this.x = x; this.y = y; }
    area() { return Math.PI * Math.pow(this.radius, 2); }
    static info() { console.log("I know about circles"); }
    }
//inheritance example
class NiceCircle extends Circle {
    constructor(radius, colour) {
    super(radius, 0, 0);
    this.colour = colour;
    } }