let array = []
let numero = document.getElementById('txtadd')
let lista = document.getElementById('listnum')

function adicionar() {
    if (numero.value.length == 0) {
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
}

let ul = document.querySelector('ul')

function analisar() {
    ul.innerHTML = null

    function organizarNum(a, b) {
        return a - b
    }

    array.sort(organizarNum)
    let posicoes = Number(array.length)
    let maior = posicoes - 1

    let item1 = `<li>Quantidade de valores adicionados, ${posicoes}.</li>`
    let item2 = `<li>O maior número que você adicionou, ${array[maior]}.</li>`
    let item3 = `<li>O menor número que você adicionou, ${array[0]}.</li>`

    ul.innerHTML = ul.innerHTML + item1
    ul.innerHTML = ul.innerHTML + item2
    ul.innerHTML = ul.innerHTML + item3

    for (let i = 0; i <= maior; i++) {
        res = array[i]
        var total = res + array[i]
        var media = total / posicoes
    }

    if (array.length == 1) {
        total = array[0]
        media = array[0]
    }

    let item4 = `<li>Somando todos os valores, temos ${total}.</li>`
    let item5 = `<li>A média dos valores adicionados foi, ${media}.</li>`
    ul.innerHTML = ul.innerHTML + item4
    ul.innerHTML = ul.innerHTML + item5


}

