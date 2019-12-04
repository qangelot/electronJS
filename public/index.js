//verifie si la valeur est un symbole//
function isSymbol(value) {
    return ['/', '*', '-', '+'].indexOf (value) !== -1
}

function getLastChar() {
    return screen.innerHTML.substr (-1)
}

function addToScreen (value) {
    if(!isStarted) {
        if (!isSymbol(value))
            screen.innerHTML = null   //retour au zero
        isStarted = true
    }
    if (isSymbol(getLastChar()) && isSymbol(value)) {
        deleteToScreen()
    }
    screen.innerHTML += value   //valeur tapé dans l'écran//
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
        } else if (value === '=') {

            const resultat = eval(screen.innerHTML)
            screen.innerHTML = resultat
        } else {
            addToScreen (value)
        }

    })
})
