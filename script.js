// 1.
for (i = 1; i <= 7; i++){
    console.log(i);
}
// 2.
for (i = 5; i <= 25; i+= 4){
    console.log(i);
}
// 3a.
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];
// 3b.
for (i = 0; i < wizards.length; i++){
    console.log(wizards[i]);
}
// 4a.
let harryPotterMovies = 0;
// 4b.
while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
}
// 4c.
console.log(`${harryPotterMovies - 1}`)