import { createHeader } from "./layout.js"
import { cards } from "./cards.js"
import { reload } from "./transactions.js"
import { fetchAll } from "./useHttp.js"


let tbody = document.querySelector('tbody')
let div = document.querySelector('.div')

let user = JSON.parse(localStorage.getItem('user'))

function welcomeTo(name, surname, email) {
    let h2 = document.createElement('h1')
    let a = document.createElement('a')
    let box = document.createElement('div')

    box.classList.add('box')

    h2.innerHTML = `Добро пожаловать, ${name} ${surname}!`
    a.innerHTML = email

    box.append(h2, a)
    document.body.prepend(box)
}
welcomeTo(user.name, user.surname, user.email)



fetchAll('cards?userid=' + user.id)
.then(res => cards(res, div))



fetchAll('transactions?userid=' + user.id)
    .then(res => reload(res, tbody))



createHeader()
