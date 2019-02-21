function groupAnimals(animals) {
    
    //animals.sort()
    var animals2 = []
    for(var x = 0; x < animals.length; x++){    // copy array animals
        animals2.push(animals[x])
    }
    animals.sort()
    var result = []
    var abjadHewan = ''

    abjadHewan += animals[0][0]                 //cek abjad terdepan tiap hewan
    for(var i = 0; i < animals.length - 1; i++ ){
        if(animals[i+1][0] !== animals[i][0]){
            abjadHewan += animals[i+1][0]
        }
    }

    var sortedAnimals = []                  //sorting manual
    for(var k = 0; k < abjadHewan.length; k++){
        for(var l = 0; l < animals2.length; l++){
            if(abjadHewan[k] === animals2[l][0]){
                sortedAnimals.push(animals2[l])
            }
        }
    }

    for(var j = 0; j < abjadHewan.length; j++){
        var temp = []
        for(var k = 0; k < sortedAnimals.length; k++){
            if(sortedAnimals[k][0] === abjadHewan[j][0]){
                temp.push(sortedAnimals[k])
            }
            
        }
        result.push(temp)
    }
    

    return result
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]