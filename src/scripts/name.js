export function displayGuestName() {
    const guestName = localStorage.getItem("guest_user") || "Guest"; // Retrieve stored guest name
    console.log("Retrieved guest user:", guestName); // Debugging

    const displayElement = document.getElementById("displayGuestName");
    if (displayElement) {
        displayElement.textContent = guestName; // Update the HTML element
    } else {
        console.error("displayGuestName element not found!");
    }
}