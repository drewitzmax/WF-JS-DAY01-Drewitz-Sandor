Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

let arr = ['apple', 'banana', 'kiwi']

arr.insert(2, "orange")
arr.insert(3, "strawberry")
console.log(arr)