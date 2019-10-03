let string = "Feb 23, 2017"

yesterday(string)

function yesterday(str) {
    
    let date = new Date(str)

    date.setDate(date.getDate() - 1)

    console.log(date)

    return date
}