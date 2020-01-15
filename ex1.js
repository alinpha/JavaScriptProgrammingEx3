/**
 * Author: Aline Vetrov
 * Date: Jan 15, 2020
 * Title: Data Ex3 Practice
 */


//1. Create a variable called birthDate and using the Date constructor, set it to your birthday
let birthDate = new Date(1985,2,29);

//2. Write your birthDate to the console
console.log(`my birth date: ${birthDate}`);

//3. Console log this string - What is the date 1 billion seconds from my birthday and how old am I or will be that year.
console.log("What is the date 1 billion seconds from my birthday and how old am I or will be that year.");

//4.  Create a variable called seconds and set it to 1000000000
let seconds = 1000000000;

//5. Create a variable called days. Using the seconds variable, convert 1 billion seconds into days
//1 day has 24 hours
//1 hour has 60 minutes
//1 minute has 60 seconds
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;

console.log(days);

//6. Create a new variable called nextDate. 
//   Set it to your birthDate plus the number of days calculated in the days variable
let nextDate = birthDate.getDate() + days;

//7. Create a new variable called newDate. 
//Use the Date constructor to set this variable to your birthDate. 
//Use the date parts from your birthDate variable in the constructor.
let newDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

//8. Set the newDate using the setDate method and using the value calculated in nextDate
newDate.setDate(nextDate);

//9. Console log the newDate variable
console.log(newDate);

//10. Create a varable age and set it by subtracting the newDate year from the birthDate year
let age = newDate.getFullYear() - birthDate.getFullYear();

//11. Display the message 'My age of year ***Show the year of newDate*** is or will be ***Show the age variable***'
console.log(`My age of year ${newDate.getFullYear()} is or will be ${age}`);

//12. Repeat these instructions for 1 billion milliseconds
//1 billion millis = 1 million sec - we can change the vlue of secondds variable to that