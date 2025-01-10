
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

//dialog 
const dialogues = [
    //intro
    { name: "DCI James Ward", text: "Ah, Detective Graves, how fortunate we are to have you here."},
    { name: "DCI James Ward", text: "The department’s stretched thin after last week’s murder—an absolutely dreadful state of affairs."},
    { name: "DCI James Ward", text: "But let me introduce you to the four suspects you’ll want to question."},
    //clara intro 4
    { name: "DCI James Ward", text: "First, there’s Clara Belle, a regular here and known for charming the staff, particularly Frank. "},
    { name: "DCI James Ward", text:  "She’s a flirt, but when Frank rejected her advances a fortnight ago—quite publicly, mind you—it caused a bit of a scene."},
    { name: "DCI James Ward", text: "Still, I don’t imagine she’d dwell on it."},
    { name: "DCI James Ward", text: "She’s likely moved her attentions elsewhere, perhaps to the bartender, which brings us to..."},
    //charlie intro 8
    { name: "DCI James Ward", text: "Charlie Finch, the long-standing barman."},
    { name: "DCI James Ward", text: "There’s talk that Frank intended to replace him with someone older and more experienced."},
    { name: "DCI James Ward", text: "I can’t imagine why; Charlie’s cocktails are widely praised, especially his fruit drinks. "},
    { name: "DCI James Ward", text: "Frank, however, had no patience for anything too sweet though he seemed to approve of the idea to shake things up for the club’s anniversary."},
    
    { name: "Detective Graves", text: "You seem well-acquainted with these people. Are you a regular yourself?"},
   
    { name: "DCI James Ward", text: "Oh, quite. Many of us local officers stop by after our shifts."},
    { name: "DCI James Ward", text: "Frank was a familiar figure in the area."},
    //edward intro 15
    { name: "DCI James Ward", text: "Next, there’s Edward Doyle, Frank’s business partner. "},
    { name: "DCI James Ward", text: "He’s a shifty sort, nothing criminal exactly, but I’ve seen him slipping women out the back door more than once."},
    { name: "DCI James Ward", text: "It’s no wonder Frank wanted to cut ties with him after the anniversary. "},
    { name: "DCI James Ward", text: "Doyle likely thinks himself entitled to the club after all he’s invested."},
    //evelyn intro 19
    { name: "DCI James Ward", text: "Lastly, Evelyn Carter—Frank’s wife and the club’s lead singer."},
    { name: "DCI James Ward", text: "She’s a darling, truly. It was Evelyn who discovered the body. "},
    { name: "DCI James Ward", text: "Word has it Frank wasn’t the upstanding man he seemed; there are rumours of dalliances with Miss Belle."},
    { name: "DCI James Ward", text: "Poor Evelyn was shattered, but I can’t see her committing such an act. "},
    { name: "DCI James Ward", text: "She’s far too kind-hearted for that."},
    //first question 24
    { name: "DCI James Ward", text: "Who would you like to speak to first?"},

    //clara belle interview1 25
    { name: "Clara Belle", text: "..."},
    //clara question1 26
    { name: "Clara Belle", text: "Oh hello, you must be the detective…Care for a sip?", options: [
        { text: "No, thank you. I'm working.", nextIndex: 27},
        { text: "Yes please.", nextIndex: 30}
    ]},
    
    //no thx 27
    { name: "Detective Graves", text: "No, thank you. I'm working."},
    { name: "Clara Belle", text: "Suit yourself. Gosh, is that something tropical I taste? Charlie knows his stuff."},
    { name: "Clara Belle", text: "...", nextIndex: 36},

    //yes please 30
    { name: "Detective Graves", text: "Yes please."},
    { name: "Detective Graves", text: "sips"},
    { name: "Detective Graves", text: "It tastes fruity. I thought Mr. Carter wasn’t fond of fruit drinks?"},

    { name: "Clara Belle", text: "Oh, well... Charlie, the bartender, switched things up for the evening, you see, what with it being the anniversary."},
    { name: "Clara Belle", text: "I rather like it, in fact. I adore tropical fruits." },
    { name: "Clara Belle", text: "...", nextIndex: 36},

    //clara question2 36
    { name: "Clara Belle", text: "Anyway, don’t you have any questions for me?", options: [
        { text: "Where were you around midnight?", nextIndex: 37},
        { text: "Did you see anything suspicious?", nextIndex: 43}
    ]},

    //where? 37 
    { name: "Detective Graves", text: "Where were you around midnight?"},
    { name: "Clara Belle", text: "Why, I was on the dance floor, leading the lot of them, you should’ve seen me!"},
    { name: "Clara Belle", text: "Or perhaps I was at the bar, it’s all a bit blurry. "},
    { name: "Clara Belle", text: "I had a few of Charlie’s drinks, you know. "},
    { name: "Clara Belle", text: "He was rather close, nearly kissed me—quite forward of him, I must say."},

    //clara question3 42
    { name: "Clara Belle", text: "Did you have any more questions?", options: [
        { text: "Where were you around midnight?", nextIndex: 37},
        { text: "Did you see anything suspicious?", nextIndex: 43},
        { text: "That was all", nextIndex: 48}
    ]},

    //sus? 43
    { name: "Detective Graves", text: "Did you see anything suspicious?"},
    { name: "Clara Belle", text: "I did, in fact. I saw Edward slip something into one of the glasses."},
    { name: "Clara Belle", text: "Around 11 o’clock, I reckon."},
    { name: "Clara Belle", text: "But it’s Edward, always up to something."},
    { name: "Clara Belle", text: " I imagine it was just his usual game, getting the girls to follow him out of the bar.", nextIndex: 42},
    
    //thats all 48
    { name: "Detective Graves", text: "I’ll come back to you."},
    { name: "Clara Belle", text: "Anytime, handsome. smiles", options: [
        { text: "Return", nextIndex: 50}
    ]},

    //nestemann 50
    { name: "DCI James Ward", text: "Who would you like to speak to next?"},
    
    //charlie finch interview1 51
    { name: "Charlie Finch", text: "..."},
    { name: "Charlie Finch", text: "Ah, good, you’re here. We’ve all been waiting for the detective."},
    //charlie question1 53
    { name: "Charlie Finch", text: "Care for a drink?", options: [
        { text: "No, thank you. I'm working.", nextIndex: 54},
        { text: "Yes please."}
    ]},
    //no thx 54
    { name: "Detective Graves", text: "No, thank you. I'm working."},
    { name: "Charlie Finch", text: "Ah, you're a proper man. Good on ya."},

    //yah 56
    { name: "Detective Graves", text: "Yes please."},
    { name: "Charlie Finch", text: "It tastes fruity. I thought Mr. Carter wasn’t fond of fruit drinks?"},
    { name: "Charlie Finch", text: "*Chuckles* Well, yes, but I thought I’d mix things up for the anniversary."},
    { name: "Charlie Finch", text: "Frank usually drinks anything, once he's had enough."},

    //charlie question2 60
    { name: "Charlie Finch", text: "Did you have any questions for me?", options : [
        { text: "Where were you around midnight?", nextIndex: 61},
        { text: "Did you see anything suspicious?", nextIndex: 64}
    ]},
    //where? 61
    { name: "Detective Graves", text: "Where were you around midnight?"},
    { name: "Charlie Finch", text: "I was at the bar all evening, making the drink of the night. Ask anyone, they’ll tell you."},

    //charlie questions3 63
    { name: "Charlie Finch", text: "Was there anything else?", options : [
        { text: "Where were you around midnight?", nextIndex: 61},
        { text: "Did you see anything suspicious?", nextIndex: 64},
        { text: "That was all", nextIndex: 68}
    ]},

    //sus? 64
    { name: "Detective Graves", text: "Did you see anything suspicious?"},
    { name: "Charlie Finch", text: "Only Edward, up to his usual tricks. Nothing to make me think he’d go as far as murder."},
    { name: "Charlie Finch", text: "Now Clara, she’s a different story. "},
    { name: "Charlie Finch", text: "She didn’t show it, but she was humiliated when Frank rejected her. That might’ve stung."},
    { name: "Charlie Finch", text: "No one expects her to do anything so she's got both motive and opportunity.", nextIndex: 63},

    //thats all 68
    { name: "Detective Graves", text: "I’ll come back to you if I have more questions."},
    { name: "Charlie Finch", text: "Happy to help. Good luck with the investigation, Detective.", options : [
        { text: "Return", nextIndex: 50}
    ]},

    //edward doyle interview1 70
    { name: "Edward Doyle", text: "..."},
    { name: "Edward Doyle", text: "Oh, it’s you. Sorry about the mess..."},
    { name: "Edward Doyle", text: "Don’t tell the others, I just... I don’t know what to do."},
    { name: "Edward Doyle", text: "I know I shouldn’t drink, but you would too, if your best mate just died."},
    { name: "Detective Graves", text: "I understand, though it makes my job a tad more difficult."},

    //edward question1 75
    { name: "Edward Doyle", text: "Don’t worry, I’ll answer all your questions. Can’t lie to the police, especially in this state.", options : [
        { text: "Where were you around midnight?", nextIndex: 76},
        { text: "Did you see anything suspicious?", nextIndex: 83}
    ]},
    //where? 76
    { name: "Detective Graves", text: "Where were you around midnight?"},
    { name: "Edward Doyle", text: "I was with some lovely ladies near the dance floor."},
    { name: "Edward Doyle", text: "Bought them drinks—thought it might be my last time with the staff discount, since Frank was planning on kicking me out. "},
    { name: "Edward Doyle", text: "It’s not what people think, though"},
    { name: "Edward Doyle", text: "He wanted me to open a sister club, but for the publicity."},
    { name: "Edward Doyle", text: "Drama’s good for business, you know?"},

    //edward question2 82
    { name: "Edward Doyle", text: "Anything more?", options : [
        { text: "Where were you around midnight?", nextIndex: 76},
        { text: "Did you see anything suspicious?", nextIndex: 83},
        { text: "That was all", nextIndex: 68}
    ]},

    //sus? 83
    { name: "Detective Graves", text: "Did you see anything suspicious?"},
    { name: "Edward Doyle", text: "..."},
    { name: "Edward Doyle", text: "..."},

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

const interview = document.getElementById('interview')
const graves = document.getElementById('graves')
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
                interview.style.backgroundImage = "url(bilder/claBack.JPG)"
                interview.style.backgroundRepeat = "no-repeat"
                interview.style.backgroundSize = "cover"
                currentDialogueIndex = 24
                graves.style.display = "block"
            });
            charlieProfile.addEventListener("click", function() {
                claraProfile.style.display = "none"
                charlieProfile.style.display = "none"
                edwardProfile.style.display = "none"
                evelynProfile.style.display = "none"
                optionWait = false
                switchCharacter('james', 'charlie')
                interview.style.backgroundImage = "url(bilder/chaBack.JPG)"
                interview.style.backgroundRepeat = "no-repeat"
                interview.style.backgroundSize = "cover"
                currentDialogueIndex = 25
                graves.style.display = "block"
            });
            edwardProfile.addEventListener("click", function() {
                claraProfile.style.display = "none"
                charlieProfile.style.display = "none"
                edwardProfile.style.display = "none"
                evelynProfile.style.display = "none"
                optionWait = false
                switchCharacter('james', 'edward')
                interview.style.backgroundImage = "url(bilder/edBack.JPG)"
                interview.style.backgroundRepeat = "no-repeat"
                interview.style.backgroundSize = "cover"
                currentDialogueIndex = 25
                graves.style.display = "block"
            });
            evelynProfile.addEventListener("click", function() {
                claraProfile.style.display = "none"
                charlieProfile.style.display = "none"
                edwardProfile.style.display = "none"
                evelynProfile.style.display = "none"
                optionWait = false
                switchCharacter('james', 'evelyn')
                interview.style.backgroundImage = "url(bilder/eveBack.JPG)"
                interview.style.backgroundRepeat = "no-repeat"
                interview.style.backgroundSize = "cover"
                currentDialogueIndex = 25
                graves.style.display = "block"
            });
        } 
        else if (currentDialogueIndex == 49) {
            claraInt1 = true
        }
        else if (currentDialogueIndex == 50) {
            evelynProfile.style.display = "block"
            edwardProfile.style.display = "block"
            charlieProfile.style.display = "block"
            claraProfile.style.display = "block"
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
