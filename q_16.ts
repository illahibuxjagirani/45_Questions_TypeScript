/*
16. More Guests: 
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let myFriends = ["Ali", "Hassan", "Ayaz"]; 
console.log("I just found a bigger dinner table, so now more space is available, now three more friends can be invited"); 

myFriends.unshift("Tariq");             // at start
myFriends.splice(3, 0, "Manthar");      // at middle
myFriends.push("Manzoor");              // at end
for (let i of myFriends){ 
    console.log(`Mr. ${i} you are invited at my Dinner`);

    }