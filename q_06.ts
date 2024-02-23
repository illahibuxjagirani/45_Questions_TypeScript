/*
6. Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// */
const personName: string = "   illahbux   ";
console.log(personName);

console.log(personName.trim());

const personName2: string = "\nillahibux";
console.log(personName2);
console.log(personName2.trim());


const personName3: string = "\tillahibux";
console.log(personName3);
console.log(personName3.trim());
