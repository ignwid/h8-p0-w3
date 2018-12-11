function palindrome(kata) {
    var kata1 = kata;
    var kata2 = kata.split('');
    var tampungKata2 = '';
    
    for(var i = kata.length-1; i >= 0; i--){
        tampungKata2 += kata2[i];
    }
      
  
    if(kata1 === tampungKata2){
        var samaKata = true;
    } else {
        var samaKata = false;
    }
    
    return samaKata;

}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false