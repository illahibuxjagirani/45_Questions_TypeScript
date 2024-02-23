/*
Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/


// function make_shirt(size: number, label: string){
//     // return size + label;
//     return `My shirt size is ${size} and label is ${label}`;
// }

// let myFun = make_shirt(36, " The Sunny Day");

// how to print on console
// console.log(myFun);


let myFun = (size: number, label: string) =>{
    return size + label
}

console.log(myFun(36, " The Cool Day"));



