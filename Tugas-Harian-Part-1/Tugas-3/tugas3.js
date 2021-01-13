//soal 1
console.log("SOAL PERTAMA")
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var kedua=kataKedua.toUpperCase().charAt(0)+kataKedua.toLowerCase().slice(1);
var blank=" ";
console.log(kataPertama.concat(blank.concat(kedua.concat(blank.concat(kataKetiga.concat(blank.concat(kataKeempat.toUpperCase())))))))
console.log("--------------------------------------------------")
//soal 2
console.log("SOAL KEDUA")
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var angkapertama=parseInt(kataPertama);
var angkakedua=parseInt(kataKedua);
var angkaketiga=parseInt(kataKetiga);
var angkakeempat=parseInt(kataKeempat);
var total=angkapertama+angkakedua+angkaketiga+angkakeempat;
console.log(total.toString())
console.log("--------------------------------------------------")
//soal 3
console.log("SOAL KETIGA")
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua=kalimat.substring(4,14); // do your own! 
var kataKetiga=kalimat.substring(15,18); // do your own! 
var kataKeempat=kalimat.substring(19,24); // do your own! 
var kataKelima=kalimat.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log("--------------------------------------------------")
//soal 4
console.log("SOAL KEEMPAT")
var nilai=67;
if(nilai>=80){
    console.log("A");
}
else if(nilai>=70&&nilai<80){
    console.log("B");
}
else if(nilai>=60&&nilai<70){
    console.log("C");
}
else if(nilai>=50&&nilai<60){
    console.log("D");
}
else if(nilai<50){
    console.log("E");
}
console.log("--------------------------------------------------")
//soal 5
console.log("SOAL KELIMA")
var tanggal = 30;
var bulan = 1;
var tahun = 2001;

switch(bulan) {
    case bulan=1:
        console.log(tanggal.toString().concat(blank.concat("Januari".concat(blank.concat(tahun)))));
        break;
    case bulan=2:
        console.log(tanggal.toString().concat(blank.concat("Februari".concat(blank.concat(tahun)))));
        break;
    case bulan=3:
        console.log(tanggal.toString().concat(blank.concat("Maret".concat(blank.concat(tahun)))));
        break;
    case bulan=4:
        console.log(tanggal.toString().concat(blank.concat("April".concat(blank.concat(tahun)))));
        break;
    case bulan=5:
        console.log(tanggal.toString().concat(blank.concat("Mei".concat(blank.concat(tahun)))));
        break;
    case bulan=6:
        console.log(tanggal.toString().concat(blank.concat("Juni".concat(blank.concat(tahun)))));
        break;
    case bulan=7:
        console.log(tanggal.toString().concat(blank.concat("Juli".concat(blank.concat(tahun)))));
        break;
    case bulan=8:
        console.log(tanggal.toString().concat(blank.concat("Agustus".concat(blank.concat(tahun)))));
        break;
    case bulan=9:
        console.log(tanggal.toString().concat(blank.concat("September".concat(blank.concat(tahun)))));
        break;
    case bulan=10:
        console.log(tanggal.toString().concat(blank.concat("Oktober".concat(blank.concat(tahun)))));
        break;
    case bulan=11:
        console.log(tanggal.toString().concat(blank.concat("November".concat(blank.concat(tahun)))));
        break;
    case bulan=12:
        console.log(tanggal.toString().concat(blank.concat("Desember".concat(blank.concat(tahun)))));
        break;
    default:
        console.log("Bulan tidak valid");
  }
  