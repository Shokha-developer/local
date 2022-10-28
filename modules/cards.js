export function cards(arr, place) {
    place.innerHTML = ""

    if(arr.length === 0) {
        place.innerHTML = "У вас нет карточек"
        return
    }
    
    for (let item of arr) {
        let wallet = document.createElement("div")
        let walletType = document.createElement("span")
        let currency = document.createElement("span")
        
        wallet.classList.add("wallet")
        walletType.classList.add("walletType")
        currency.classList.add("currency")
        
        
        walletType.innerHTML = item.name
        currency.innerHTML = item.currency

        wallet.append(walletType, currency)
        place.append(wallet)
    }
}