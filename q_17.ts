/*
17. Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// */
const myFriends: string [] = ["Ali", "Ahmed", "Hussain", "Manthar", "Ayaz", "Tariq"];
console.log(`There is only space for 2 person\n`);
console.log(`Now I can invite only two friends\n`);


// remove elements
let removeFriend1 = myFriends.pop();
console.log(`Sorry ${removeFriend1} you are not invited`);


let removeFriend2 = myFriends.pop();
console.log(`Sorry ${removeFriend2} you are not invited`);

let removeFriend3 = myFriends.pop();
console.log(`Sorry ${removeFriend3} you are not invited`);

let removeFriend4 = myFriends.pop();
console.log(`Sorry ${removeFriend4} you are not invited\n`);


myFriends.map((ib)=>{
    console.log(`Mr. ${ib} you are still invited`);
});

myFriends.pop();
myFriends.pop();

console.log(myFriends);
