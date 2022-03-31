/**
 * 12. Write a program to find the absolute value of a number entered through the keyboard
 */

// const num = prompt("Enter any number:");
// // Nested Ifs

// if (num >= 0 || num <= 0) {
//   console.log(num, "is a valid number");

//   if (num == 0) {
//     console.log("This is zero and zero has no absolute value");
//   }

//   if (num > 0) {
//     console.log("The absolute value of ", num, "is", num * 1);
//   }

//   if (num < 0) {
//     console.log("The absolute value of ", num, "is", num * -1);
//   }
// } else {
//   console.log(num, "is not a valid number");
// }

// condition chaining

// if( num == 0){
//   console.log('THis zero and zero has no absolute value')
// }
// else if(num > 0){
//   console.log("The absolute value of ", num, "is", num * 1 )
// }
// else if(num < 0){
//  console.log("The absolute value of ", num, "is", num * -1 )
// } else{
//   console.log(num , " is not a valid number" )
// }

// // new exercise :
// const weight = prompt("Enter the Weight in pounds:");
// if (weight < 115) {
//   console.log(
//     "The weight category is FLYWEIGHT and the weight is",
//     weight + "-lbs"
//   );
// } else if (weight >= 115 && weight <= 121) {
//   console.log(
//     "The weight category is BANTAMWEIGHT and the weight is",
//     weight + "-lbs"
//   );
// } else if (weight >= 122 && weight <= 153) {
//   console.log(
//     "The weight category is FEATHERWEIGHT and the weight is",
//     weight + "-lbs"
//   );
// } else if (weight >= 154 && weight <= 189) {
//   console.log(
//     "The weight category is MIDDLEWEIGHT and the weight is",
//     weight + "-lbs"
//   );
// } else if (weight >= 190) {
//   console.log(
//     "The weight category is HEAVYWEIGHT and the weight is",
//     weight + "-lbs"
//   );
// } else {
//   console.log(
//     weight,
//     "is not a valid weight, Kindly enter a valid weight in -lbs"
//   );
// }

// Write a program that recieves month and  date of birth a input and prints the corresponding zodiac sign based on the following table

const month = prompt("enter any month:");
const date = prompt("enter any date:");
//for capricorn
if (
  (month == 12 && day >= 22 && day <= 31) ||
  (month == 1 && day <= 19 && day > 0)
) {
  console.log("Zodiac sign is acapricorn");
} else if (
  (month == 1 && day >= 20 && day <= 31) ||
  (month == 2 && day <= 17 && day > 0)
) {
  console.log("Zodiac sign aquarius");
} else if (
  (month == 2 && day >= 18 && day <= 29) ||
  (month == 3 && day <= 19 && day > 0)
) {
  console.log("Zodiac sign aquarius");
}
1;
