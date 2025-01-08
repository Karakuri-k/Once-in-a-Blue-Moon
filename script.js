const startscreen = document.getElementById('startscreen')
const desk = document.getElementById('desk')
const wardbutton = document.getElementById('wardbutton')
const ward = document.getElementById('ward')

function none() {
    startscreen.style.display = 'none'
    console.log("game started")
    desk.style.display = 'grid'
}

function toWard() {
    desk.style.display = 'none'
    ward.style.display = 'grid'
}


const dialogueParagraph = document.querySelector(".yapBox .yap p"); // Targets the <p> element
const nextButton = document.querySelector(".next");

// Dialogue array for Sergeant James Ward
const dialogues = [
  "Ah, Detective Graves. How lucky we are to have you here.",
  "We’re certainly in a bit of a bind, as you can imagine.",
  "The whole department’s at a standstill, stretched thin after last week’s murder.",
  "It’s just dreadful, I tell you.",
  "But, let me get down to business and introduce you to our four main suspects, the ones you'll want to speak with shortly.",
  "But, let me get down to business and introduce you to our four main suspects, the ones you'll want to speaktyfvvjhgfvyjthgfiyjughfijuyghf with shortly."
];

let currentDialogueIndex = 0;

// Function to show the next dialogue
function showNextDialogue() {
  if (currentDialogueIndex < dialogues.length) {
    dialogueParagraph.textContent = dialogues[currentDialogueIndex]; // Updates only the <p> element
    currentDialogueIndex++;
  } else {
    // Optional: Hide the next button or take another action when dialogue ends
    nextButton.style.display = "none";
    console.log("Dialogue finished");
  }
}

// Event listener for the next button
nextButton.addEventListener("click", showNextDialogue);

// Event listener for the spacebar
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // Prevent default scrolling behavior
    showNextDialogue();
  }
});

// Initialize with the first dialogue
showNextDialogue();
