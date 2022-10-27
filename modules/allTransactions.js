import { createHeader } from "./layout.js";
createHeader()
import { reload } from "./transactions.js";
let user = JSON.parse(localStorage.getItem('user'))


let email = document.querySelector("a")
email.innerHTML = user.email

reload()