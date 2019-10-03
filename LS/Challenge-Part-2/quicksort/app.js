let arr = [123, 7, 2, 4, 5, 6, 7, 8, 9, 10]

console.log(quickSort(arr))

function quickSort(arr) {
    if(arr.length <= 1) return arr

    let pivot = arr[arr.length -1]
    let left = []
    let right = []

    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        }
        else right.push([arr[i]])
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}