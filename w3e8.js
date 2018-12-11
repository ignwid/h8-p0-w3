function pasanganTerbesar(number) {
  //berubah ke string, kemudian masuk ke dalam array
  var ubah = number.toString();
  var potong = ubah.split(''); 
  var arr = [];

  //angka berpasangan
  for(var i= 0; i < ubah.length-1; i++){
    arr.push(potong[i] + potong[i+1]);
   }

  var max = Math.max.apply(null, arr);

  return max;

}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99