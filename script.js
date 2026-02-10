const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("msg");
const letter = document.getElementById("letter");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("music");
const heartsContainer = document.getElementById("hearts-container");

// ----------------------
// 🔥 Messages NON (à modifier)
// ----------------------
const funnyMessages = [
    "Tu es vraiment sûre ? 😳",
    "Oh non… réfléchis bien 😳",
    "Allez… juste un petit OUI ❤️",
    "Tu me brises le cœur 😭",
    "Je sais que tu veux dire oui 😏",
    "Essaie encore 😭❤️",
    "Arrête non 😭 ?",
    "Donc tu m'aimes pas ? 😳😭",
    "Jure que tu as cliqué sur non ?"
];
let yesSize = 22;
let noSize = 22;
// Événement bouton NON
noBtn.addEventListener("click", () => {
    yesSize += 8;
    noSize -= 4;
    if (noSize < 10) noSize = 10;
    yesBtn.style.fontSize = yesSize + "px";
    noBtn.style.fontSize = noSize + "px";
    msg.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
});
// Événement bouton OUI
yesBtn.addEventListener("click", () => {
    // musique
    music.play();
    // ouverture enveloppe
    letter.classList.remove("closed");
    letter.classList.add("open");
    // disparition question
    document.getElementById("choices").style.display = "none";
    document.querySelector(".question").style.display = "none";
    msg.style.display = "none";
    // afficher texte final
    setTimeout(() => {
        finalMessage.style.display = "block";
    }, 800);
});
// ----------------------
// 💕 CŒURS QUI TOMBENT
// ----------------------
function createHeart() {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);