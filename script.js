import { postTo } from "./modules/useHttp.js"

let form = document.forms.reg
let errmsg = document.querySelector('#errmsg')

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {
        id: Math.random(),
    }

    let fm = new FormData(form)


    fm.forEach((value, key) => {
        user[key] = value
    })

    if(user.name || user.email || user.password || user.surname) {
        postTo('users', user)
            .then(res => window.location = "./pages/login.html")
    } else {
        errmsg.style.opacity = "1"
    }
}