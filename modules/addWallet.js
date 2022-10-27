import { createHeader } from "./layout.js"
createHeader()
import { cards } from "./cards.js";
let form = document.forms.addWallet
let name1 = form.inp4
let currency = form.inp5


form.onsubmit = (e) => {
    e.preventDefault()
    
    cards(name1, currency)
    window.location = "../pages/allWallets.html"
    
    
}



