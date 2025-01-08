//musica
const music = document.getElementById("backgroundMusic");

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "m") {
        music.play();
    }
});

//neste scene, vi får se om det funker videre og
function switchScreen(hideId, showId) {
    const hideElement = document.getElementById(hideId);
    if (hideElement) hideElement.style.display = 'none';

    const showElement = document.getElementById(showId);
    if (showElement) showElement.style.display = 'grid';
}


//dialogen, jeg må finne ut av en letter måte å gjøre det her på as
const dialogueBox = document.querySelector(".yapBox .yap p");
const nameBox = document.querySelector(".yapBox .name h2");
const nextButton = document.querySelector(".next");

//hadde også vært gøy med forskjellige fonter til hver av karakterene??
//kanskje han fulle kan ha random bokstaver som blir caps

const dialogues = [
    { name: "Sergeant James Ward", text: "Ah, Detective Graves, how fortunate we are to have you here."},
    { name: "Sergeant James Ward", text: "The department’s stretched thin after last week’s murder—an absolutely dreadful state of affairs."},
    { name: "Sergeant James Ward", text: "But let me introduce you to the four suspects you’ll want to question."},
    { name: "Sergeant James Ward", text: "First, there’s Clara Belle, a regular here and known for charming the staff, particularly Frank. "},
    { name: "Sergeant James Ward", text:  "She’s a flirt, but when Frank rejected her advances a fortnight ago—quite publicly, mind you—it caused a bit of a scene."},
    { name: "Sergeant James Ward", text: "Still, I don’t imagine she’d dwell on it."},
    { name: "Sergeant James Ward", text: "She’s likely moved her attentions elsewhere, perhaps to the bartender, which brings us to..."},
    { name: "Sergeant James Ward", text: "Charlie Finch, the long-standing barman."},
    { name: "Sergeant James Ward", text: "There’s talk that Frank intended to replace him with someone older and more experienced."},
    { name: "Sergeant James Ward", text: "I can’t imagine why; Charlie’s cocktails are widely praised, especially his fruit drinks. "},
    { name: "Sergeant James Ward", text: "Frank, however, had no patience for anything too sweet though he seemed to approve of the idea to shake things up for the club’s anniversary."},
    { name: "Sergeant James Ward", text: "Ah, Detective Graves, how fortunate we are to have you here."},
    { name: "Sergeant James Ward", text: "Ah, Detective Graves, how fortunate we are to have you here."},
    { name: "Sergeant James Ward", text: "Ah, Detective Graves, how fortunate we are to have you here."}
];

let currentDialogueIndex = 0;
let isTyping = false;
let typingInterval;
let currentText = "";

//typing effekten
function typeText(element, text, callback) {
    let index = 0;
    isTyping = true;
    currentText = text;

    typingInterval = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(typingInterval);
            isTyping = false;
            if (callback) callback();
        }
    }, 20);
}

//typisk visuell novel greie
function completeTyping() {
    if (isTyping) {
        clearInterval(typingInterval);
        dialogueBox.textContent = currentText;
        isTyping = false;
    }
}


function showNextDialogue() {
    if (currentDialogueIndex < dialogues.length) {
        const currentDialogue = dialogues[currentDialogueIndex];
        nameBox.textContent = currentDialogue.name; // Update character name
        dialogueBox.textContent = ""; // Clear previous text
        typeText(dialogueBox, currentDialogue.text, () => {
            console.log("Finished typing dialogue");
        });
        currentDialogueIndex++;
    } else {
   //må se hva jeg gjør med dette senere
        nextButton.style.display = "none";
        console.log("Dialogue finished");
    }
}


nextButton.addEventListener("click", () => {
    if (isTyping) {
        completeTyping();
    } else {
        showNextDialogue();
    }
});


document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        if (isTyping) {
            completeTyping();
        } else {
            showNextDialogue();
        }
    }
});

