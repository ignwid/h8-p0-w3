function targetTerdekat(arr) {
    var posisiX = []
    var posisiO = []
    var result = []

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'x'){
            posisiX.push(i)
        }
        else if(arr[i] === 'o'){
            posisiO.push(i)
        }
    }

    for(var j = 0; j < posisiX.length; j++){
        var angka = posisiO[0] - posisiX[j]
            if(angka < 0){
                angka = angka * -1
            }
        result.push(angka)    
    }

    result.sort()
    if(result.length === 0){
        return 0
    } else {
        return result[0] 
    }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

