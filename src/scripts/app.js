// This file contains the JavaScript code for the golf betting app.
// It handles user interactions and data management.

document.addEventListener('DOMContentLoaded', () => {
    const betForm = document.getElementById('bet-form');
    const betAmountInput = document.getElementById('bet-amount');
    const resultDisplay = document.getElementById('result');

    betForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const betAmount = parseFloat(betAmountInput.value);
        if (isNaN(betAmount) || betAmount <= 0) {
            resultDisplay.textContent = 'Please enter a valid bet amount.';
            return;
        }
        // Logic for processing the bet goes here
        const odds = 2.0; // Example odds
        const potentialWinnings = betAmount * odds;
        resultDisplay.textContent = `You could win $${potentialWinnings.toFixed(2)}!`;
    });
});