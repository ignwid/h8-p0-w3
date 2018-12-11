function cariMean(arr) {
  var result = 0
  for(var i = 0; i < arr.length; i++ ){
    result = result + arr[i]
  }

  var mean = result/ arr.length

  return Math.round(mean)
  
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7


/*var arr = [3, 5, 7, 5, 3]
var hasil = 0

for(var i = 0; i < arr.length; i++){
  hasil = hasil + arr[i]
}

var mean = hasil / arr.length
var realMean = Math.round(mean)
console.log(realMean)*/