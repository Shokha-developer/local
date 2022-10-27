import { fetchAll } from "./useHttp.js"

let form = document.forms.login


form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    if(user.email || user.password) {
        fetchAll('users?email=' + user.email)
            .then(res => {
                if(res[0]?.password === user?.password) {
                    errmsg.style.opacity = "0"
                    localStorage.setItem('user', JSON.stringify(res[0]))
                    window.location = "../pages/home.html"
                } else {
                    errmsg.innerHTML = "Не верный пароль"
                    errmsg.style.opacity = "1"
                }
            })
    } else {
        errmsg.innerHTML = "Ваш аккаунт не был найден! Зарегистрируйтесь"
        errmsg.style.opacity = "1"
    }
}