let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (+(n) >= 1 && +(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, i) {
    if (i.indexOf(+(n)) != - 1) {
        return true
    } else {
        return false
   }
}
function Adicionar() {
    if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(+(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionando.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERROR]Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} Números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor infomrado foi  ${maior}.</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media entre os valores são ${media}.<p>`
        
    }
}