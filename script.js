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