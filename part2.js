let totalDistance = 1500;

let fuelBudget = 175;

let costOFFuel = 3;

const miles55 = 30;
const miles60 = 28;
const miles75 = 23;


// How many gallons of fuel will you need for the entire trip?

const totalFuelForTripAt55Miles = (totalDistance / miles55);
const totalFuelForTripAt60Miles = (totalDistance / miles60);
const totalFuelForTripAt75Miles = (totalDistance / miles75);


console.log(totalFuelForTripAt55Miles + " Gallons of fuel needed at 55 miles per hour");
console.log(totalFuelForTripAt60Miles + " Gallons of fuel needed at 60 miles per hour");
console.log(totalFuelForTripAt75Miles + " Gallons of fuel needed at 75 miles per hour");

// Will your budget be enough to cover the fuel expense?

const budgetCheckAt55Miles = (totalFuelForTripAt55Miles * costOFFuel);
const budgetCheckAt60Miles = (totalFuelForTripAt60Miles * costOFFuel);
const budgetCheckAt75Miles = (totalFuelForTripAt75Miles * costOFFuel);

console.log("$" + budgetCheckAt55Miles + " Dollars of fuel needed for trip at 55 Miles Per Hour" );
console.log("$" + budgetCheckAt60Miles + " Dollars of fuel needed for trip at 60 Miles Per Hour" );
console.log("$" + budgetCheckAt75Miles + " Dollars of fuel needed for trip at 75 Miles Per Hour" );

const canCoverFuelExpenseAt55 = (budgetCheckAt55Miles < fuelBudget) 
const canCoverFuelExpenseAt60 = (budgetCheckAt60Miles < fuelBudget) 
const canCoverFuelExpenseAt75 = (budgetCheckAt75Miles < fuelBudget) 

console.log("Do you have enough money for fuel at 55 miles per hour? " + canCoverFuelExpenseAt55);
console.log("Do you have enough money for fuel at 60 miles per hour? "+ canCoverFuelExpenseAt60);
console.log("Do you have enough money for fuel at 75 miles per hour? "+ canCoverFuelExpenseAt75);


// How long will the trip take, in hours?

const tripTimeAt55Miles = (totalDistance / 55);
const tripTimeAt60Miles = (totalDistance / 60);
const tripTimeAt75Miles = (totalDistance / 75);

console.log(tripTimeAt55Miles + " Hours needed for the trip at 55 Miles Per Hour");
console.log(tripTimeAt60Miles + " Hours needed for the trip at 60 Miles Per Hour");
console.log(tripTimeAt75Miles + " Hours needed for the trip at 75 Miles Per Hour");


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

// Going 60 miles makes the most sense as you save a few hours of time for 10 extra dollars 