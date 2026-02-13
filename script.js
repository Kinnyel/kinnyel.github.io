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
    // faire pousser le buisson de roses 🌹
    document.getElementById("roseBush").classList.add("grow");
}, 800);
});
// ----------------------
// 💕 CŒURS QUI TOMBENT
// ----------------------
function createButterfly() {
   // Conteneur des papillons
const butterfliesContainer = document.getElementById("butterflies-container");

// Deux papillons en SVG encodés en data-URI (aucun téléchargement requis)
const butterflyBlack = `url("data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 48'>
  <path fill='%23000000' d='M32 22c2 0 4-2 6-3 6-3 14-7 20-1 5 5-3 10-8 12-3 1-7 1-10-1 2 3 3 7 1 10-2 3-7 4-9-1-2 5-7 4-9 1-2-3-1-7 1-10-3 2-7 2-10 1-5-2-13-7-8-12 6-6 14-2 20 1 2 1 4 3 6 3z'/>
</svg>")`;

const butterflyPurple = `url("data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 48'>
  <path fill='%238a2be2' d='M32 22c2 0 4-2 6-3 6-3 14-7 20-1 5 5-3 10-8 12-3 1-7 1-10-1 2 3 3 7 1 10-2 3-7 4-9-1-2 5-7 4-9 1-2-3-1-7 1-10-3 2-7 2-10 1-5-2-13-7-8-12 6-6 14-2 20 1 2 1 4 3 6 3z'/>
</svg>")`;

// Crée un papillon à un endroit aléatoire, avec une durée aléatoire
function createButterfly() {
    const b = document.createElement("div");
    b.className = "butterfly";

    // Position horizontale aléatoire
    b.style.left = Math.random() * 100 + "vw";

    // Légère dérive horizontale pour l’ondulation
    b.style.setProperty("--x", (Math.random() * 40 - 20) + "px");

    // Durée d’animation (entre 3s et 6s)
    b.style.animationDuration = (3 + Math.random() * 3).toFixed(2) + "s";

    // Choix aléatoire: noir ou violet (60% violet / 40% noir, ajuste si tu veux)
    const isPurple = Math.random() < 0.6;
    b.style.backgroundImage = isPurple ? butterflyPurple : butterflyBlack;

    butterfliesContainer.appendChild(b);

    // Nettoyage du DOM après l’animation
    setTimeout(() => b.remove(), 7000);
}

// Fréquence d’apparition (toutes les 350 ms)
setInterval(createButterfly, 350);
}
setInterval(createHeart, 300);

