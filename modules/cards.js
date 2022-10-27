export function cards(name1, currency) {
    let arr = [
        {
            name: "Visa",
            cur: "USD"
        },
        {
            name: "Visa",
            cur: "USD"
        },
        {
            name: "Visa",
            cur: "USD"
        },
        {
            name: "Visa",
            cur: "USD"
        }
    ]
    
    arr.push({name: name1, cur: currency })
    
    let main = document.querySelector(".div")
    
    for (let item of arr) {
        
        console.log(item);
        let wallet = document.createElement("div")
        let walletType = document.createElement("span")
        let currency = document.createElement("span")
        
        wallet.append(walletType, currency)
        main.append(wallet)
        
        wallet.classList.add("wallet")
        walletType.classList.add("walletType")
        currency.classList.add("currency")
        
        
        walletType.innerHTML = item.name
        currency.innerHTML = item.cur
        
        
    }
    return arr;

}