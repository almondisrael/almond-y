// Function to calculate Boda Boda (motorcycle taxi) fare in Kenya

function calculateBodaFare(distanceInKm) {

  // Fare structure: base fare + distance-based charge
  const baseFare = 50;      // Fixed base fare in KES (Kenyan Shillings)
  const chargePerKm = 15;   // Per-kilometer charge in KES
  
  // Calculate total fare: base + (distance * per-km rate)

  const totalFare = baseFare + (distanceInKm * chargePerKm);

  // Display fare breakdown in Swahili/English mix

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);  // "Where are you? That's X km"
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);   // "When you sit on the motorcycle: KES 50"
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);  // "Until where you are: KES [calculated]"
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!`);  // "Board the motorcycle!"
}

// Get user input - Swahili prompt: "Where are you going, boss? How many kilometers?"

const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

// Convert input to number (handles decimal values)

const distance = Number(userInput);

// Validate input: must be a positive number

if (!isNaN(distance) && distance > 0) {

  // Calculate and display fare if valid

  calculateBodaFare(distance);
} else {
  // Swahili error message: "Please enter a valid number of kilometers"
  
  console.log("Tafadhali weka nambari sahihi ya kilomita.");
}