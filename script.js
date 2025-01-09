
//musica
const music = document.getElementById("backgroundMusic")

//passepå at dialogen ikke fortsetter
let optionWait = false 

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "m") {
        music.play()
    }
    if (event.code === "Space") {
        event.preventDefault()
        if (isTyping) {
            completeTyping()
        } else if (!optionWait) {
            showNextDialogue()
        }
    }
})

//neste scene, vi får se om det funker videre og
function switchScreen(hideId, showId) {
    const hideElement = document.getElementById(hideId)
    if (hideElement) hideElement.style.display = 'none'

    const showElement = document.getElementById(showId)
    if (showElement) showElement.style.display = 'grid'
}


//dialogen, jeg må finne ut av en letter måte å gjøre det her på as
const dialogueBox = document.querySelector(".yapBox .yap p")
const nameBox = document.querySelector(".yapBox .name h2")
const nextButton = document.querySelector(".next")

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
    { name: "Detective Graves", text: "You seem well-acquainted with these people. Are you a regular yourself?"},
    { name: "Sergeant James Ward", text: "Oh, quite. Many of us local officers stop by after our shifts."},
    { name: "Sergeant James Ward", text: "Frank was a familiar figure in the area."},
    { name: "Sergeant James Ward", text: "Next, there’s Edward Doyle, Frank’s business partner. "},
    { name: "Sergeant James Ward", text: "He’s a shifty sort, nothing criminal exactly, but I’ve seen him slipping women out the back door more than once."},
    { name: "Sergeant James Ward", text: "It’s no wonder Frank wanted to cut ties with him after the anniversary. "},
    { name: "Sergeant James Ward", text: "Doyle likely thinks himself entitled to the club after all he’s invested."},
    { name: "Sergeant James Ward", text: "Lastly, Evelyn Carter—Frank’s wife and the club’s lead singer."},
    { name: "Sergeant James Ward", text: "She’s a darling, truly. It was Evelyn who discovered the body. "},
    { name: "Sergeant James Ward", text: "Word has it Frank wasn’t the upstanding man he seemed; there are rumours of dalliances with Miss Belle."},
    { name: "Sergeant James Ward", text: "Poor Evelyn was shattered, but I can’t see her committing such an act. "},
    { name: "Sergeant James Ward", text: "She’s far too kind-hearted for that."},
    { name: "Sergeant James Ward", text: "Who would you like to speak to first?"},
    { name: "Clara Belle", text: "..."},
    { name: "Clara Belle", text: "Oh hello, you must be the detective…Care for a sip?", options: [
        { text: "No, thank you. I'm working.", nextIndex: 30},
        { text: "Yes please.", nextIndex: 27}
    ]},
    
    { name: "Detective Graves", text: "It tastes fruity. I thought Mr. Carter wasn’t fond of fruit drinks?"},
    { name: "Clara Belle", text: "Oh, well... Charlie, the bartender, switched things up for the evening, you see, what with it being the anniversary."},
    { name: "Clara Belle", text: "I rather like it, in fact. I adore tropical fruits." },
    { name: "Clara Belle", text: "Suit yourself. Gosh, is that something tropical I taste? Charlie knows his stuff."},
    { name: "Clara Belle", text: "..."},
    { name: "Clara Belle", text: "Anyway, don’t you have any questions for me?", options: [
        { text: "Where were you around midnight?", nextIndex: 60},
        { text: "Did you see anything suspicious?", nextIndex: 65}
    ]},
    { name: "Detective Graves", text: "Where were you around midnight?"},
    { name: "Clara Belle", text: "Why, I was on the dance floor, leading the lot of them, you should’ve seen me!"},
    { name: "Clara Belle", text: "Or perhaps I was at the bar, it’s all a bit blurry. "},
    { name: "Clara Belle", text: "I had a few of Charlie’s drinks, you know. "},
    { name: "Clara Belle", text: "He was rather close, nearly kissed me—quite forward of him, I must say."},
    { name: "Clara Belle", text: "Did you have any more questions?", options: [
        { text: "Where were you around midnight?", nextIndex: 60},
        { text: "Did you see anything suspicious?", nextIndex: 65},
        { text: "That was all", nextIndex: 70}
    ]},

    { name: "Detective Graves", text: "Did you see anything suspicious?"},
    { name: "Clara Belle", text: "I did, in fact. I saw Edward slip something into one of the glasses."},
    { name: "Clara Belle", text: "Around 11 o’clock, I reckon."},
    { name: "Clara Belle", text: "But it’s Edward, always up to something."},
    { name: "Clara Belle", text: " I imagine it was just his usual game, getting the girls to follow him out of the bar."},
    { name: "Detective Graves", text: "I’ll come back to you."},
    { name: "Clara Belle", text: "Anytime, handsome. smiles", options: [
        { text: "Return", nextIndex: 24}
    ]},
    { name: "Charlie Finch", text: "..."},
    { name: "Charlie Finch", text: "Ah, good, you’re here. We’ve all been waiting for the detective."},
    { name: "Charlie Finch", text: "Care for a drink?", options: [
        { text: "No, thank you. I'm working.", nextIndex: 75},
        { text: "Yes please."}
    ]},
    { name: "Detective Graves", text: "No, thank you. I'm working."},
    { name: "Charlie Finch", text: "Ah, you're a proper man. Good on ya."},

    { name: "Charlie Finch", text: "*Chuckles* Well, yes, but I thought I’d mix things up for the anniversary."},
    { name: "Charlie Finch", text: "Frank usually drinks anything, once he's had enough."},
    { name: "Charlie Finch", text: "Did you have any questions for me?"},
    { name: "Charlie Finch", text: "..."},
    { name: "Charlie Finch", text: "..."},
    { name: "Charlie Finch", text: "..."},
]

let currentDialogueIndex = 0
let isTyping = false
let typingInterval
let currentText = ""

//typing effekten
function typeText(element, text, callback) {
    let index = 0
    isTyping = true
    currentText = text

    typingInterval = setInterval(function() {
        element.textContent += text[index]
        index++
        if (index >= text.length) {
            clearInterval(typingInterval)
            isTyping = false
            if (callback) {
                callback()
            }
        }
    }, 20)
}


//typisk visuell novel greie
function completeTyping() {
    if (isTyping) {
        clearInterval(typingInterval)
        dialogueBox.textContent = currentText
        isTyping = false
    }
}

//options
const claraProfile = document.getElementById('claraProfile')
const charlieProfile = document.getElementById('charlieProfile')
const edwardProfile = document.getElementById('edwardProfile')
const evelynProfile = document.getElementById('evelynProfile')

let claraInt1 = false
let charlieInt1 = false
let edwardInt1 = false
let evelynInt1 = false

function switchCharacter(hideId, showId) {
    const hideElement = document.getElementById(hideId)
    if (hideElement) hideElement.style.display = 'none'

    const showElement = document.getElementById(showId)
    if (showElement) showElement.style.display = 'block'
}

//dialogen
function showNextDialogue() {
    if (currentDialogueIndex < dialogues.length) {
        const currentDialogue = dialogues[currentDialogueIndex]
        nameBox.textContent = currentDialogue.name
        dialogueBox.textContent = ""
        typeText(dialogueBox, currentDialogue.text, function() {
        })
        currentDialogueIndex++
        //show Clara
        if (currentDialogueIndex == 4) {
            claraProfile.style.display = "block"
        } //show Charlie
        else if (currentDialogueIndex == 8) {
            charlieProfile.style.display = "block"
        } //show Edward
        else if (currentDialogueIndex == 15) {
            edwardProfile.style.display = "block"
        } //show Evelyn
        else if (currentDialogueIndex == 19) {
            evelynProfile.style.display = "block"
        } //show options
        else if (currentDialogueIndex == 24) {
            optionWait = true
            nextButton.style.display = "none"
            claraProfile.addEventListener("click", function() {
                claraProfile.style.display = "none"
                charlieProfile.style.display = "none"
                edwardProfile.style.display = "none"
                evelynProfile.style.display = "none"
                optionWait = false
                switchCharacter('james', 'clara')
                let currentDialogueIndex = 25
            });
            charlieProfile.addEventListener("click", function() {
                claraProfile.style.display = "none"
                charlieProfile.style.display = "none"
                edwardProfile.style.display = "none"
                evelynProfile.style.display = "none"
                optionWait = false
                switchCharacter('james', 'charlie')
                let currentDialogueIndex = 25
            });
        } 
        else if (currentDialogueIndex == 71) {
            claraInt1 = true
        }
    }
}


nextButton.addEventListener("click", function() {
    if (isTyping) {
        completeTyping()
    } else {
        showNextDialogue()
    }
});
