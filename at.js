const body = document.body;
// input para receber os valores
const i1 = document.createElement("input");
i1.placeholder = "Digite seu valor"
const i2 = document.createElement("input");
i2.placeholder = "Digite seu valor"

// botão para decidir as quatros operações
//positivo
const posi = document.createElement("button");
posi.textContent = "+"

//negativo
const neg = document.createElement("button");
neg.textContent = "-"

//divisão
const divi = document.createElement("button");
divi.textContent = "/"

//multiplicação
const multi = document.createElement("button");
multi.textContent = "*"


// criando as div
const div = document.createElement("div")
body.appendChild(div);
const div2 = document.createElement("div")
body.appendChild(div2);
const div3 = document.createElement("div")
body.appendChild(div3)

// saida do resultado
const p = document.createElement("p")
p.textContent = "resultado"
body.appendChild(p)

// colocando os input dentro da (div)
div.appendChild(i1);
div.appendChild(i2);

// colocando as quatros operações dentro da (div2)
div2.appendChild(posi);
div2.appendChild(neg);
div2.appendChild(divi);
div2.appendChild(multi);

//colocando as div's dentro de uma div(unica)
div3.appendChild(div)
div3.appendChild(div2)
div3.appendChild(p)

// js

function somar(){
    const num = Number(i1.value);
    const num1 = Number(i2.value);
    const soma = num + num1
    p.textContent = soma
}

function subtrair(){
    const num = Number(i1.value);
    const num1 = Number(i2.value);
    const subtrair = num - num1
    p.textContent = subtrair
}

function dividir(){
    const num = Number(i1.value);
    const num1 = Number(i2.value);
    const dividir = num / num1
    p.textContent = dividir
}

function multiplicar (){
    const num = Number(i1.value);
    const num1 = Number(i2.value);
    const multiplicar = num * num1
    p.textContent = multiplicar
}


//chamando as funções
posi.addEventListener("click",somar)
neg.addEventListener("click",subtrair)
divi.addEventListener("click",dividir)
multi.addEventListener("click",multiplicar)

//css

// estilizando o body
body.style.height = "90vh"
body.style.display = "flex"
body.style.flexDirection ="column"
body.style.backgroundColor="#f2e3c6"
body.style.justifyContent="center"
body.style.alignItems = "center"

//estilizando o  1 input
i1.style.margin = "5px"
i1.style.backgroundColor ="#f2e3c6"
i1.style.color = "#2b2b2b"
i1.style.borderRadius = "8px"

//estilizando o  2 input
i2.style.margin = "5px"
i2.style.backgroundColor ="#f2e3c6"
i2.style.borderRadius = "8px"

//estilazando a div dos input
div.style.padding ="5px 10px"
div.style.backgroundColor="#ffc6a5"
div.style.borderRadius = "100px"


//estilizando os botões
posi.style.margin = "5px"
neg.style.margin = "10px"
div.style.margin = "10px"
multi.style.margin = "10px"

//estilizando a div dos botões
div2.style.padding = "5px 10px"
div2.style.backgroundColor = "#ffc6a5"
div2.style.borderRadius = "15px"

//estilizando a div central
div3.style.display = "flex"
div3.style.flexDirection = "column"
div3.style.justifyContent = "flex-end"
div3.style.alignItems = "center"
div3.style.height = "200px"
div3.style.width = "500px"
div3.style.backgroundColor = "#ffc6a5"
div3.style.borderRadius ="200px"

//estilizando o resultado
p.style.padding = "5px 10px"
p.style.backgroundColor = "#ffc6a5"
p.style.borderRadius = "15px"
