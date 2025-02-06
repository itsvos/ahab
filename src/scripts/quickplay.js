export function startQuickPlay() {
    const guestName = "Guest" + Math.floor(Math.random() * 10000);
    localStorage.setItem("guest_user", guestName); // Store guest username in localStorage
    console.log("Stored guest_user in localStorage:", guestName); // Debugging log
    window.location.href = "src/pages/game.html"; // Redirect to the game page
}
