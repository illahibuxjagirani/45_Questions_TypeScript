/*
Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/


let favoriteFruits = ["Apple", "Banana", "Orange"];

for(let i = 0; i< favoriteFruits.length; i++){
    if(favoriteFruits[i] == "Apple"){
        console.log(`Hello Admin`)

    }
     if(favoriteFruits[i] !== "Apple"){
        console.log(favoriteFruits[i]);
    }
}

// if(favoriteFruits.includes("Mango")){
//     console.log(`I would like to eat Mango`);

// }else if(favoriteFruits.includes("Apple")){
//     console.log(`I would like to eat Apple`);

// }else{
//     console.log(`fruits are not available!`);
// }

// let fruitAvailable = "Orange";

// if(favoriteFruits.includes(fruitAvailable)){
//     console.log(`I would like to eat ${fruitAvailable}`);

// }else{
//     console.log(`fruits are not available!`);
// }
