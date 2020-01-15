/**
 * Author: Aline Vetrov
 * Date: Jan 15, 2020
 * Title: Data Ex
 */

let birthDate = new Date(1985,2,29);
console.log(`my birth date: ${birthDate}`);
console.log("What is the date 1 billion seconds from my birthday and how old am I or will be that year.");

let millis = 1000000000 * 1000;

let billionMillisDate = new Date(millis);

let newDate = new Date(birthDate.getTime() + billionMillisDate.getTime());

console.log(`new date: ${newDate}`);

