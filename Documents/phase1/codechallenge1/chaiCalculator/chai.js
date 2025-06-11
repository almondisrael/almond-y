// Function to calculate and display ingredients for Kenyan Chai (Chai Bora)

function calculateChaiIngredients(numberOfCups) {

  // Define constants for ingredients per cup (in milliliters/tablespoons)

  const waterPerCup = 200;    // ml of water per cup
  const milkPerCup = 50;      // ml of milk per cup
  const teaLeavesPerCup = 1;  // tablespoons of tea leaves per cup
  const sugarPerCup = 2;      // teaspoons of sugar per cup

  // Calculate total ingredients based on number of cups

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Display formatted results to the user

  console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon(s)\n`);
  console.log("Enjoy your Chai Bora!");
}

// Get user input (browser environment)

const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");

// Convert input to number (handles decimal inputs too)

const numberOfCups = Number(input);

// Validate input: must be a positive number

if (!isNaN(numberOfCups) && numberOfCups > 0) {

  // Proceed with calculation if valid

  calculateChaiIngredients(numberOfCups);
} else {
  // Show error for invalid input
  
  console.log("Please enter a valid number of cups.");
}