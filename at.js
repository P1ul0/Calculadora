const conteiner = document.createElement("div")
document.body.appendChild(conteiner)

const login = document.createElement("input")
conteiner.appendChild(login)
const senha = document.createElement("input")
conteiner.appendChild(senha)
const button = document.createElement("button")
conteiner.appendChild(button)
button.textContent ="Entrar"

const button1 = document.createElement("button")
conteiner.appendChild(button1)
button1.textContent ="Cadastrar"

document.body.style = (`
width : 90vh;
display : flex;
`)

conteiner.style =(`
display : flex;
flex-direction : column;
`) 

