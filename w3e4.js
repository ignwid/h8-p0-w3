function dataHandling2(data){
    
    //var arr = ["Roman Alamsyah Elsharawy","Provinsi Bandar Lampung","Pria", "SMA Internasional Metro"]
    data.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
    data.splice(4,1,"Pria", "SMA Internasional Metro");
    var information = data;
    console.log(information);
    
    var birthdate = information[3].split('/');
    var month = birthdate[1];
  
    switch(month) {
        case birthdate[1] = "01" : {console.log('Januari');break;}
        case birthdate[1] = "02" : {console.log('Februari');break;}
        case birthdate[1] = "03" : {console.log('Maret');break;}
        case birthdate[1] = "04" : {console.log('April');break;}
        case birthdate[1] = "05" : {console.log('Mei');break;}
        case birthdate[1] = "06" : {console.log('Juni');break;}
        case birthdate[1] = "07" : {console.log('Juli');break;}
        case birthdate[1] = "08" : {console.log('Agustus');break;}
        case birthdate[1] = "09" : {console.log('September');break;}
        case birthdate[1] = "10" : {console.log('Oktober');break;}
        case birthdate[1] = "11" : {console.log('November');break;}
        case birthdate[1] = "12" : {console.log('Desember');break;}
    }
    
    var sorted = birthdate.sort(function(a,b){ return b-a })
    var shortname = information[1].slice(0,15);
    console.log(sorted);
    console.log(birthdate[1]+'-'+birthdate[2]+'-'+birthdate[0]);
    console.log(shortname);

  return ''
}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log(dataHandling2(input));