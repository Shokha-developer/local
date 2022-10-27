import { createHeader } from "./layout.js"
import { cards } from "./cards.js"
import { reload } from "./transactions.js"

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




reload()





// let arr = [1, 2, 3, 4]



cards()
createHeader()
