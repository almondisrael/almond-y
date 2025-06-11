 // Function to calculate transaction fees with minimum and maximum limits

function estimateTransactionFee(amountToSend) {

  // Calculate fee as 1.5% of the transaction amount

  const percentageFee = amountToSend * 0.015;
  
  // Apply fee limits: minimum KES 10, maximum KES 70

  const fee = Math.min(Math.max(percentageFee, 10), 70);
  
  // Calculate total amount to be deducted (amount + fee)
  
  const totalDebited = amountToSend + fee;

  // Display transaction details to user

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log("Send Money Securely!");
}

// Get user input in Kenyan Shillings (KES)

const input = prompt("Unatuma Ngapi? (KES):");  // "How much are you sending?" in Swahili

// Convert input to number (handles decimal values)

const amountToSend = Number(input);

// Validate input: must be a positive number

if (!isNaN(amountToSend) && amountToSend > 0) {
    
  // Process transaction if valid

  estimateTransactionFee(amountToSend);
} else {
  // Show error message in Swahili: "Please enter a valid amount to send"
  console.log("Tafadhali andika kiasi sahihi cha kutuma.");
}