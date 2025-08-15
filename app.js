console.log("JavaScript Connected")


// Step 1: Welcome Alert
alert("🎉 Welcome to the Number Guessing Game!");

// Step 2: Set secret number (between 1 and 10)
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Step 3: Prompt user to guess
var userGuess = prompt("Guess a number between 1 and 10:");

// Step 4: Check condition
if (isNaN(userGuess) || userGuess === "") {
    alert("❌ Invalid input! Please enter a number.");
} else {
    userGuess = Number(userGuess); // Convert to number

    if (userGuess === secretNumber) {
        alert("✅ You win! 🎉 The secret number was " + secretNumber);
    } else {
        alert("😢 Better luck next time! The secret number was " + secretNumber);
    }
}
