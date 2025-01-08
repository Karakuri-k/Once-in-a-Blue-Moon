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

const dialogues = [
    "...",
  "Ah, Detective Graves. How lucky we are to have you here.",
  "We’re certainly in a bit of a bind, as you can imagine.",
  "The whole department’s at a standstill, stretched thin after last week’s murder.",
  "It’s just dreadful, I tell you.",
  "But, let me get down to business and introduce you to our four main suspects, the ones you'll want to speak with shortly.",
];

let currentDialogueIndex = 0;
let charIndex = 0; // Keeps track of the current character being displayed
let isTyping = false; // Tracks if the text is currently being typed
let typingInterval;

// Function to start typing the current dialogue
function typeDialogue(text) {
  charIndex = 0; // Reset character index
  dialogueParagraph.textContent = ""; // Clear previous text
  isTyping = true;

  typingInterval = setInterval(() => {
    if (charIndex < text.length) {
      dialogueParagraph.textContent += text.charAt(charIndex); // Add one character
      charIndex++;
    } else {
      clearInterval(typingInterval); // Stop typing when done
      isTyping = false; // Allow moving to the next dialogue
    }
  }, 20); // Adjust speed by changing the delay in milliseconds
}

// Function to handle skipping or continuing dialogue
function handleDialogue() {
  if (isTyping) {
    // If typing, complete the current text immediately
    clearInterval(typingInterval);
    dialogueParagraph.textContent = dialogues[currentDialogueIndex];
    isTyping = false;
  } else {
    // If not typing, move to the next dialogue
    currentDialogueIndex++;
    if (currentDialogueIndex < dialogues.length) {
      typeDialogue(dialogues[currentDialogueIndex]);
    } else {
      nextButton.style.display = "none"; // Optional: Hide button when dialogue ends
      console.log("Dialogue finished");
    }
  }
}

// Event listener for the next button
nextButton.addEventListener("click", handleDialogue);

// Event listener for the spacebar
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // Prevent default scrolling behavior
    handleDialogue();
  }
});

// Initialize with the first dialogue
typeDialogue(dialogues[currentDialogueIndex]);
