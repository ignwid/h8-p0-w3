function dataHandling(informasi) {
   
    var dataDiri = [];
    for(var i = 0; i < informasi.length; i++) { 
        dataDiri.push(informasi[i]);
        console.log('Nomor ID : ' + dataDiri[i][0]);
        console.log('Nama Lengkap : ' + dataDiri[i][1]);
        console.log('TTL : ' + dataDiri[i][2] + ', ' + dataDiri[i][3] );
        console.log('Hobi : ' + dataDiri[i][4]);
        console.log('');
        
    }
    
    return ''
}



var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));