function balikString(kata) {
    var tampungKata = '';
    for(var i = kata.length-1; i >= 0; i-- ) {
        tampungKata += kata[i];
    }
    return tampungKata;
}
var kalimat = balikString('Hello World');
console.log(kalimat);