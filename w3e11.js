/*var arr = [1, 2, 3, 4, 7, 9];
var first = arr[1] - arr[0];


for(var i = 0; i < arr.length -1; i++){
  var min = arr[i+1] - arr[i];
}

  if(min === first){
  console.log('true')
  } else {
  console.log('false')
  }
*/

function tentukanDeretAritmatika(arr) {
    var selisih = arr[1] - arr[0];

    for(var i = 0; i < arr.length-1; i++){
    var min = arr[i+1] - arr[i];
    }
        if(min === selisih){
        var aritmatika = true;
        } else {
        var aritmatika = false;
        } 

    return aritmatika;
}
  
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));