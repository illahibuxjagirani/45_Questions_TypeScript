/*
Start with a copy of your program from Question / Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicianNames = ["Ayaz", "Fayaz", "Tariq", "Madad"];

function show_magicians(greet: string){

    for(let item of magicianNames){
        console.log(greet, item);
    }
};

show_magicians("Hello, How are you Mr.");
show_magicians("Hello, ");      //2nd time calling