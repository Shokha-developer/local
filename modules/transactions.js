export function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')

        td1.innerHTML = item.id
        td2.innerHTML = item.name
        td3.innerHTML = item.category
        td4.innerHTML = item.total
        td5.innerHTML = item.date

        tr.append(td1, td2, td3, td4, td5)
        place.append(tr)
    }

}