/* 
3. Name Cases: 
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
const personName: string = "iLLahiBux";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());

const firstLetter = personName.charAt(0).toUpperCase();
const restLettes = personName.slice(1).toLowerCase();
const titleCase = firstLetter + restLettes;
console.log(titleCase);