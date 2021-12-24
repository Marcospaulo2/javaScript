let num = [5, 3, 4, 5]
num.push(1)
num.sort()
console.log(num)
console.log(`Nossso vetor é o ${num.length}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`O vaor 8 esta na posição ${pos}`)
}

