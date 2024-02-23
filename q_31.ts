/*
Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let userNames2: string[] = ["Ali", "Madad", "Fayaz", "Admin", "Ayaz", "Tariq"];

// to remove all members
userNames2 = [];
// console.log(userNames2);

if(userNames2.length > 0){

    for(let i = 0; i < userNames2.length; i++){

        if(userNames2[i] == "Admin"){
            console.log(`\n Hello ${userNames2[i]} would you like to see a status report?\n`);
        }else{
            console.log(`Hello ${userNames2[i]} thank you for logging in again!`)  
        }
    }

}else{
    console.log(`We need to find some users!`)
}
