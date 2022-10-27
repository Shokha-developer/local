import { createHeader } from "./layout.js"
import { cards } from "./cards.js";
let user = JSON.parse(localStorage.getItem('user'))




let email = document.querySelector("a")
email.innerHTML = user.email


cards()
createHeader()