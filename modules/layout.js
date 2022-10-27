let user = JSON.parse(localStorage.getItem('user'))
let sth = [{
    home: 'Главная',
    cards: 'Мои кошельки',
    transition: 'Мои транзации',
    link: user.email

}]



export function createHeader() {
    
    for (let item of sth) {
        let header = document.createElement('header')
        let left_div = document.createElement('div')
        let home = document.createElement('p')
        let cards = document.createElement('p')
        let transition = document.createElement('p')
        let right_div = document.createElement('div')
        let link = document.createElement('p')
        let img = document.createElement('img')

        left_div.classList.add('left-side')
        home.classList.add('header-desc')
        cards.classList.add('header-desc')
        transition.classList.add('header-desc')
        right_div.classList.add('right-side')
        link.classList.add('link')
        img.classList.add('img')

        home.innerHTML = item.home
        cards.innerHTML = item.cards
        transition.innerHTML = item.transition
        link.innerHTML = item.link

        img.src = "../img/Vector (2).png"

        right_div.append(link, img)
        left_div.append(home, cards, transition)
        header.append(left_div, right_div)
        document.body.prepend(header)

        home.onclick = () => {
            window.location = "../pages/home.html"
        }
        
        cards.onclick = () => {
            window.location = "../pages/allWallets.html"

        }
        transition.onclick = () => {
            window.location = "../pages/allTransactions.html"
        }
    }
}
