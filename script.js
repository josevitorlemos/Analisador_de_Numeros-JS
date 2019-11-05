let array = []
let numero = document.getElementById('txtadd')
let lista = document.getElementById('listnum')


function adicionar() {
    if (numero.value == 0) {
        alert('Digite um numero!')

    } else if (Number(numero.value) > 100 || Number(numero.value) <= 0) {
        alert('O número precisa estar entre 1 e 100')

    } else if (array.indexOf(Number(numero.value)) == -1) {
        let num = Number(numero.value)
        array.push(num)
        let item = document.createElement('option')
        item.text = `Você adicionou \u{1F449} (${num})`
        lista.appendChild(item)

    } else {
        alert('Você não pode inserir o mesmo número!')
    }
    numero.value = ''
    numero.focus()
}

let ul = document.querySelector('ul')

function analisar() {
    ul.innerHTML = null

    if (array.length == 0) {
        alert('Precisa ter números adicionados para analisar!')
    } else {
        function organizarNum(a, b) {
            return a - b
        }
        let pos = Number(array.length)
        array.sort(organizarNum)
        let posicoes = Number(array.length)
        let maior = pos - 1
        let total = 0

        for (let i = 0; i <= maior; i++) {
            total = total + array[i]
        }

        let media = total / posicoes

        let item1 = `<br><li>Quantidade de valores adicionados, ${posicoes}.</li>`
        let item2 = `<br><li>O maior número que você adicionou, ${array[maior]}.</li>`
        let item3 = `<br><li>O menor número que você adicionou, ${array[0]}.</li>`
        let item4 = `<br><li>Somando todos os valores, temos ${total}.</li>`
        let item5 = `<br><li>A média dos valores adicionados foi: ${media}.</li>`

        ul.innerHTML += item1
        ul.innerHTML += item2
        ul.innerHTML += item3
        ul.innerHTML += item4
        ul.innerHTML += item5
    }
}

