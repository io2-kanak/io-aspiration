// * 1.
//  * If lenghts of three sides of a triangle are input through the keyboard
//  * write a program to find the area of the triangle using Heron's formula
//  * Formula:
//  *  semi-perimeter = s =(a + b + c)/2
//  * Area = √s(s−a)(s−b)(s−c)
//  */

// const side1 = prompt("Enter side 1:");
// const side2 = prompt("Enter side 2:");
// const side3 = prompt("Enter side 3:");

// const semiperi = (Number(side1) + Number(side2) + Number(side3)) / 2;

// const area = Math.sqrt(
//   semiperi * (semiperi - side1) * (semiperi - side2) * (semiperi - side3)
// );
// console.log("Semiperimeter is: ", semiperi + "cm");
// console.log("Area of Triangle is: ", area + "cm");

/**
 * 2. The current year and the year in which the employee joined
 * the organisation are entered through the keyboard .
 * If the number of years for which the employee has served
 * the organisation is greater than 3 years then the bonus of
 * Rs.2500/- is given to the employee.
 * If the years of service is not greater than 3,
 * then the program should not do anything.
 */

/*const yoj = prompt("enter year of joining:");
const cy = prompt("enter current year:");
const yos = cy - yoj;
if (yos > 3) {
  console.log("bonus:", 2500);
} else {
  console.log("0");
}
// */
// * 3. In a company if an employee is paid as under:
// *
// * If his basic salary is less than Rs. 1500,
// * then HRA=10% of basic salary and DA=90% of basic salary.
// * If his salary is either equal to or above Rs. 1500,
// * then HRA = Rs. 500 and DA = 98% of basic salary.
// * If the employee's salary is input through the keyboard
// *  write a program to find his gross salary.
// */

/*const basic = prompt("enter your basic salary");
if (basic < 1500) {
  console.log("hra:", basic * 0.1);
  console.log("da:", basic * 0.9);
} else {
  console.log("hra:", 500);
  console.log("da:", basic * 0.8);
}

const salary = prompt("Enter Employee's salary:");
const hra = (salary * 10) / 100;
const da = (salary * 20) / 100;
const gs = Number(salary) + Number(hra) + Number(da);

console.log("HRA:", hra);
console.log("DA:", da);
console.log("The gross Salary is: ", gs);

/*if cost price and selling price of an item are input through the keyboard,
 * write a program to determine whether the seller has made profit of incurred loss.
 * Also determine how much profite he made or loss he incurred
 */

/*const CP = prompt("Enter Cost Price:");
const SP = prompt("Enter Selling Price:");
const profit = Number(SP) - Number(CP);
const loss = Number(-SP) + Number(CP);
if (SP > CP) {
  console.log("seller profit:", profit);
} else if (SP < CP) {
  console.log("Seller loss:", loss);
}

/* 5. Any integar is input through the keyboard. Write program to find out
 * whether it is an odd Number or even Number
 */

/*const num = prompt("Enter any Number:");
if (num % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

/* 6. Any year is input through the keyboard. Write a program to determine whether
 * the year is leap year or not.
 */

/*const year = prompt("Enter the year:");

if (year % 4 == 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

/* 7. If the ages of Ram, Shyam and Ajay are input through the keyboard,
 * Write a program to determine the youngest of the three.
 */
const age = prompt("Enter ages of Ram shyam and Ajay:");
const Ram = 8;
const Shyam = 9;
const Ajay = 10;

if (Ram < Shyam && Shyam < Ajay) {
  console.log("youngest of three:");
} else {
  console.log("not yougest of three");
}

/* 8. Write a program to find the triangle is valid or not, when the three angle of a triangle
 * entered through the keyoard. A triangle is valid if all the three angles is equal to 180 degrees.
 */

const angle1 = prompt("enter angles1:");
const angle2 = prompt("enter angles2:");
const angle3 = prompt("enter angles3:");

const sum = angle1 + angle2 + angle3;
console.log(sum, typeof sum);
if (sum == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
  console.log("triangle is valid");
} else {
  console.log("triangle is not valid");
}

/* 9. Write a program to find the absolute value of a number entered through the keyboard.
 */

const month = prompt("enter any  month:");
const date = prompt("enter any date:");
if ((month = December)) if ((date = 22)) com;
