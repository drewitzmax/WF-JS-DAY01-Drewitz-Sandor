genBg()

function genBg() {
    let r = Math.floor(Math.random() * 255 + 1)
    let g = Math.floor(Math.random() * 255 + 1)
    let b = Math.floor(Math.random() * 255 + 1)

    document.body.style.backgroundColor = 
    `rgb(${r}, ${g}, ${b})`
    
}