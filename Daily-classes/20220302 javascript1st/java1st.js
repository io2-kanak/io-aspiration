// console.time("your code took");

// console.log("hello console");
// console.log(4 + 34);
// console.log(true);
// console.log([34, 2, 1, 2]);
// console.log({ kanak: "this", marks: 34 });
// console.table({ kanak: "this", marks: 34 });
// console.warn("This is warning");
// console.timeEnd("your code took");
// console.error("This is an error");

// let basic = 15000;
// console.dir(basic);
// var da = 0.4 * basic;
// var hra = 0.2 * basic;

// console.log("gross salary", basic + hra + da);

// const temp = prompt("Enter the Temprature:");
// const distance = prompt("enter the distance:");
// var kilometers = parseInt(prompt("Please enter kilometers:"));

// const number = prompt("Enter the the value");
// var a = 3;
// var b = a;
// console.log(a);

/**
Ramesh's basic salary is input through the keyboard. His dearness allownance is 40% of basic salary, and house rent allowance is 20% of basic salary. Write a program to calculate his gross salary
*/

// // To get value from key-board
// const salary = prompt("Enter the salary in amount:");
// const da = (salary * 40) / 100;
// const ra = (salary * 20) / 100;
// const gs = Number(salary) + Number(da) + Number(ra);

// console.log("The dearness Allowance is:", da);
// console.log("The Rent Allowance is:", ra);
// console.log("The gross Salary is: ", gs);

// // -2- /-----------------------------------------------------
// /**
// The distance between two cities (in km) entered through key board. write a program to calculate distance in meters, feets and centimeter
// */

// const distance = prompt("Enter the distance in km");

// const distanceInMtr = distance * 1000;
// // Formula to calculate feet from km === km * 3280.84
// const distanceInFeet = distance * 3280.84;

// // formula to calculate inch from km == 1ft * 12inch * km
// const distanceInInches = distance * (3280.84 * 12);

// // formula to calculate km to mtr == km(1) * mtr(1000) * cm(100)
// const distanceInCm = distance * 1000 * 100;

// console.log("Distance in Meter:", distanceInMtr);
// console.log("Distance in Feet:", distanceInFeet);
// console.log("Distance in Inches:", distanceInInches.tofixed(2));
// console.log("Distance in Ceti-meter:", distanceInCm);

// -3- /-----------------------------------------------------
/*
Enter the mark of 5 subject of student, and find the aggregate and percentage of all. Mark should not be greater than 100. 
*/

const math = prompt("Enter the marks of Math:");
const english = prompt("Enter the marks of English:");
const javaScript = prompt("Enter the marks of JavaScript:");
const react = prompt("Enter the marks of React:");
const redux = prompt("Enter the marks of Redux:");

// total marks
const totalMarks =
  Number(math) +
  Number(english) +
  Number(javaScript) +
  Number(react) +
  Number(redux);

// aggregate
const aggregate = totalMarks / 5;

// percentage
const percentage = (totalMarks / 500) * 100;

console.log("Total Marks:", totalMarks);
console.log("Aggregate/Average", aggregate);
console.log("Percentage", percentage);

// -4- /-----------------------------------------------------
/*
temprature of a city in farhenheit degrees is input through the keyboard. write a program to convert the temprature into centigrde and centrigrade to farhenheit
*/

const temp = prompt("Enter the temprature:");

// Celsius to Fahrenheit: (9/5 × °C) + 32
// Fahrenheit to Celsius: 5/9(°F - 32)
// Kelvin to Celsius: K - 273

const celcius = (5 / 9) * (temp - 32);
const farhenheit = (9 / 5) * temp + 32;
const kelvin = temp + 273;

console.log("Temprature in celcius:", celcius);
console.log("Temprature in farhenheit:", farhenheit);
console.log("Temprature in kelvin:", kelvin);

// ---5..--------------------------------------------------
/*
Enter length bredth of rectangle and find the area, perimeter.
Enter the radius of Circle and find the circumtance and are of circle
*/

const length = prompt("Enter the length of rectanle:");
const width = prompt("Enter the width of rectanle:");
const radius = prompt("Enter the radius of Cirle:");

// Formula of Rectanle Area == length * width
const areaOfRec = length * width;

// Formula of permeter of Reactangle == 2(length + width)
const periOfRec = 2 * (length + width);

// Formula of circle Area == pie * r * r
const pie = 3.14;
const areaOfCir = pie * radius * radius;

// Formula of circle perimeter == 2 * pie * radius
const cirOfCir = 2 * pie * radius;

console.log("Area of Rectangle:", areaOfRec + "cm");
console.log("Perimeter of Rectangle:", periOfRec + "cm");
console.log("Area of Circle:", areaOfCir + "mtr");
console.log("Circumference of Circle:", cirOfCir + "mtr");

// ---6..--------------------------------------------------
