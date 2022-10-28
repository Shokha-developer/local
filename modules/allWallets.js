import { createHeader } from "./layout.js"
import { cards } from "./cards.js";
import { fetchAll } from "./useHttp.js";
let user = JSON.parse(localStorage.getItem('user'))




let email = document.querySelector("a")
let div = document.querySelector(".div")
email.innerHTML = user.email

fetchAll('cards?userid=' + user.id)
    .then(res => cards(res, div))

createHeader()