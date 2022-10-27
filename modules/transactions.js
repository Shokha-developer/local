export function reload() {
    let tbody = document.querySelector('tbody')
    let arr = [1, 2, 3, 4, 5, 6, 7]
    for (let item of arr) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')

        td1.innerHTML = '123'
        td2.innerHTML = 'VISA'
        td3.innerHTML = 'Автомобиль'
        td4.innerHTML = '414,000,000'
        td5.innerHTML = '4 дня назад'

        tr.append(td1, td2, td3, td4, td5)
        tbody.append(tr)
    }

}