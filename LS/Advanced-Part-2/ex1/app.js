hoursAndMinutes(200)

function hoursAndMinutes(num) {
    let m = num%60
    let h = (num-num%60)/60

    console.log(`${h} hour(s) and ${m} minute(s).`)
}