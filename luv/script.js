document.getElementById("yes-button").addEventListener("click", handleYesButtonClick);
document.getElementById("no-button").addEventListener("click", handleNoButtonClick);

function handleYesButtonClick() {
    // Hide the "YES" and "NO" buttons
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";

    // Display "I love you"
    var p = document.querySelector("p");
    p.textContent = "S + S = ❤";

    // Display the GIF
    var gifContainer = document.getElementById("gif-container");
    gifContainer.style.display = "block";

    // Perform fireworks animation
    performFireworks();

    // Store response in the database (you'll need to update the database credentials)
    storeResponse("YES");
}

function handleNoButtonClick() {
    // Move the "NO" button to a random position within the container
    var container = document.querySelector(".container");
    var containerRect = container.getBoundingClientRect();
    var noButton = document.getElementById("no-button");
    var buttonRect = noButton.getBoundingClientRect();

    var randomX = Math.floor(
        Math.random() * (containerRect.width - buttonRect.width)
    );
    var randomY = Math.floor(
        Math.random() * (containerRect.height - buttonRect.height)
    );

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Store response in the database (you'll need to update the database credentials)
    storeResponse("NO");
}

function performFireworks() {
    // Implement fireworks animation here
}

function storeResponse(response) {
    // Implement storing response in the database here
}
