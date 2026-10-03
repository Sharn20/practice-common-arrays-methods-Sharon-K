const drinks = ["Latte", "Tea", "Espresso"];
const pastries = ["Croissant", "Muffin", "Bagel"];
console.log(drinks.length);
console.log(pastries.length);

console.log(drinks[0]);
console.log(pastries[2]); 
console.log(drinks[2]);

if (drinks.length > 0) {
    console.log("Drinks are available.");
} else {
    console.log("No drinks available.");
}

if (pastries.length > 0 ) {
    console.log("Pastries are available.");
} else {
    console.log("No pastries available.");
}

console.log(drinks[drinks.length - 1]);

drinks[3] = "Flat White";
console.log(drinks);
console.log(drinks.length);

let selectedDrink = drinks[1];
if (selectedDrink !== drinks[1]) {
    console.log("Selected drink is not available.");
} else {
    console.log("Selected drink is available.");
} 