import { createHeader } from "./layout.js";
createHeader()
import { reload } from "./transactions.js";
import { fetchAll } from "./useHttp.js"
let user = JSON.parse(localStorage.getItem('user'))


let email = document.querySelector("a")
let tbody = document.querySelector('tbody')
email.innerHTML = user.email

fetchAll('transactions?userid=' + user.id)
    .then(res => reload(res, tbody))
