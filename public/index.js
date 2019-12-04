function addToScreen (value) {
    if(!isStarted) {
        screen.innerHTML = null
        isStarted = true
    }
    screen.innerHTML += value
}
function deleteToScreen (lenght = -1) {
    screen.innerHTML = screen.innerHTML.slice(0, lenght)
    if (!screen.innerHTML) {
        screen.innerHTML = 0
        isStarted = false
    }
}

const screen = document.getElementById ('screen')
const buttons = document.querySelectorAll ('.btn')

let isStarted = false

buttons.forEach(element => {
    element.addEventListener ('click', function () {

        let value = this.textContent

        if (value === 'ce') {
            deleteToScreen()
        } else {
            addToScreen (value)
        }
    })
})
