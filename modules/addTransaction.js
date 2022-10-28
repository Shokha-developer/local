import { postTo } from "./useHttp.js"

let form = document.forms.addTransaction


let user = JSON.parse(localStorage.getItem('user'))






form.onsubmit = (e) => {
    e.preventDefault()

    let newTransaction = {
        id: Math.random(),
        userid: user.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        newTransaction[key] = value
        newTransaction["date"] = new Date().toJSON().slice(0,10).replace(/-/g,'.');

    })

    postTo('transactions', newTransaction) 
        .then(() => window.location = "../pages/allTransactions.html")
}