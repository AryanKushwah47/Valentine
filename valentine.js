// Apply body styles
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.backgroundColor = "#ffe6f2";
document.body.style.color = "#d63384";
document.body.style.padding = "50px";

// Create heading
const heading = document.createElement("h1");
heading.innerText = "Will you be my Valentine?";
document.body.appendChild(heading);

// Buttons container
const buttonDiv = document.createElement("div");
buttonDiv.style.marginTop = "20px";
document.body.appendChild(buttonDiv);

// YES button
const yesBtn = document.createElement("button");
yesBtn.innerText = "Yes";
yesBtn.style.padding = "10px 20px";
yesBtn.style.fontSize = "1.2em";
yesBtn.style.margin = "10px";
yesBtn.style.border = "none";
yesBtn.style.borderRadius = "5px";
yesBtn.style.cursor = "pointer";
yesBtn.style.backgroundColor = "#ff69b4";
yesBtn.style.color = "white";

// NO button
const noBtn = document.createElement("button");
noBtn.innerText = "No";
noBtn.style.padding = "10px 20px";
noBtn.style.fontSize = "1.2em";
noBtn.style.margin = "10px";
noBtn.style.border = "none";
noBtn.style.borderRadius = "5px";
noBtn.style.cursor = "pointer";
noBtn.style.backgroundColor = "#ccc";
noBtn.style.color = "black";
noBtn.style.position = "relative";

// Message div
const messageDiv = document.createElement("div");
messageDiv.style.fontSize = "1.5em";
messageDiv.style.marginTop = "20px";
messageDiv.style.display = "none";

// Append elements
buttonDiv.appendChild(yesBtn);
buttonDiv.appendChild(noBtn);
document.body.appendChild(messageDiv);

// Logic
let noClickCount = 0;

yesBtn.addEventListener("click", () => {
    messageDiv.innerText =
        "Thank you thank you so much 'To phir shuru kare internet wala love☺️'";
    messageDiv.style.display = "block";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
    noClickCount++;

    if (noClickCount === 1) {
        messageDiv.innerText = "Please na";
    } else if (noClickCount === 2) {
        messageDiv.innerText = "Please click on yes";
    } else if (noClickCount === 3) {
        messageDiv.innerText = "Man jao na";
    } else {
        messageDiv.innerText = "Please, please say yes! ❤️";
    }

    messageDiv.style.display = "block";
    moveNoButton();
});

// Move NO button randomly
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}