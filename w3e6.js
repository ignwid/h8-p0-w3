function angkaPalindrome(num) {
    var angka = num
    if (angka < 10) {
        angka += 1
        var stringAngka = angka.toString()
        var pisahAngka = stringAngka.split('')
    } else if (angka >= 10) {
        var stringAngka = angka.toString()
        var pisahAngka = stringAngka.split('')
        if (pisahAngka[0] !== pisahAngka[pisahAngka.length-1]){
            while (pisahAngka[0] !== pisahAngka[pisahAngka.length-1]) {
                angka += 1
                var stringAngka = angka.toString()
                var pisahAngka = stringAngka.split('')
            }
        } 
    }
    
    return angka
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001






/* var angka = 11;
  //var arr = []; && pisah[0] !== pisah[pisah.length-1
  //arr.push(angka);
  if(angka < 10){
      angka += 1
      var str = angka.toString()
      var pisah = str.split('')
  } else if(angka >= 10){
      var str = angka.toString()
      var pisah = str.split('')
      if(pisah[0] !== pisah[pisah.length-1]){
         while(pisah[0] !== pisah[pisah.length-1]) {
          angka += 1
          var str = angka.toString()
          var pisah = str.split('')
         }  
      }
  }
  
  console.log(angka)*/




