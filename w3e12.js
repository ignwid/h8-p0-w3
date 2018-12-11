function tentukanDeretGeometri(arr) {
    var selisih = arr[1] / arr[0];

    for(var i = 0; i < arr.length-1; i++){
    var min = arr[i+1] / arr[i];
    }
        if(min === selisih){
        var geometri = true;
        } else {
        var geometri = false;
        } 

    return geometri;
}
  
console.log(tentukanDeretGeometri([2, 4, 6, 8]))