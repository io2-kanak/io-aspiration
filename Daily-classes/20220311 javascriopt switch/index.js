// Write a program that recieves month and  date of birth a input and prints the corresponding zodiac sign based on the following table

// conditions
// 1. if-else
//      a.if
//      b.if-else
//      c.condition chaining (if -> if -> if) / (if-else -> if -> if)
//      d.nested if
// 2. Tirnary operator
//      'Ravi' == 'ravi' ? console.log('Hello ravi') : console.log('Bye Ravi')
// 3. Switch

const m = prompt("Enter any month in between Jan-Dec");

switch (m) {
  case "Jan":
    console.log("January");
    console.log("Jan");
    break;

  case "Feb":
    console.log("February");
    break;

  case "Mar":
    console.log("March");
    break;

  case "Apr":
    console.log("April");
    break;

  case "May":
    console.log("May");
    break;

  case "Jun":
    console.log("June");
    break;

  case "Jul":
    console.log("July");
    break;

  case "Aug":
    console.log("August");
    break;

  case "Sep":
    console.log("September");
    break;

  case "Oct":
    console.log("October");
    break;

  case "Nov":
    console.log("November");
    break;

  case "Dec":
    console.log("December");
    break;

  default:
    console.log("Not a valid month");
    break;
}
