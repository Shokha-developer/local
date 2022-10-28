import { postTo } from "./useHttp.js"

let form = document.forms.addWallet
let name1 = form.inp4
let currency = form.inp5

let user = JSON.parse(localStorage.getItem('user'))
let select = document.querySelector('datalist')



axios.get("https://api.apilayer.com/fixer/symbols", {
    redirect: 'follow',
    headers: {
        'apikey': 'pmBnK0YNOwlSqR0IiWbl6wxg9ejd1wIP',
    }
})
.then(res => {
    for(let key in res.data.symbols) {
        let opt = new Option(key, key)

        select.append(opt)
    }
})

form.onsubmit = (e) => {
    e.preventDefault()

    let newCard = {
        id: Math.random(),
        userid: user.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        newCard[key] = value
    })

    postTo('cards', newCard) 
        .then(() => window.location = "../pages/allWallets.html")
}