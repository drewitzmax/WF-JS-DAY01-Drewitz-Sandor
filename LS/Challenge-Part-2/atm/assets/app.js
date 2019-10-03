// SELECTORS
let balance = parseInt(document.getElementById('balance').textContent)
const cashoutBtn = document.getElementById('cashoutBtn')
let display = document.getElementById('display')

console.log(balance)

let buttons = document.querySelectorAll('.btn')

cashoutBtn.addEventListener('click', (e) => {
    display.style.display = "grid"
})

for (btn of buttons) {
    
    btn.addEventListener('click', (e) => {
        switch(e.target.textContent) {
        
            case "10":
                balance -= 10
                document.getElementById('balance').textContent = `${balance}$`
                break
    
            case "20":
                balance -= 20
                document.getElementById('balance').textContent = `${balance}$`
                break
    
            case "50":
                balance -= 50
                document.getElementById('balance').textContent = `${balance}$`
                break
    
            case "100":
                balance -= 100
                document.getElementById('balance').textContent = `${balance}$`
                break
        }
    })

}