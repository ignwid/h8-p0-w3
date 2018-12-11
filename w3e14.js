function mengelompokkanAngka(arr) {

    var numbers = []
    for(var i = 0; i < 3; i++) {
        numbers.push([])
    }   
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] % 2 === 0) {
            numbers[0].push(arr[j])
        } else if (arr[j] % 2 === 1) {
            if(arr[j] % 3 === 0) {
                numbers[2].push(arr[j])
            } else {
                numbers[1].push(arr[j])
            }
        }
    }
    return numbers
}

console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]))