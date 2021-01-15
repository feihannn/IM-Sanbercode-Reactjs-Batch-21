//soal 1
console.log("----SOAL 1----");
function halo(){
    return "Halo Sanbers!";
}
console.log(halo());
//soal 2
console.log("----SOAL 2----");
function kalikan(per,ked){
    return per*ked;
}
var num1=12;
var num2=4;
var hasilKali=kalikan(num1,num2);
console.log(hasilKali);
//soal 3
console.log("----SOAL 3----");
function introduce(nama,umur,alamat,hobi){
    return "Nama saya "+nama+", umur saya "+umur+" tahun, alamat saya di "+alamat+", dan saya punya hobby yaitu "+hobi+"!";
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)
//soal 4
console.log("----SOAL 4----");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objdaftarpeserta={};
objdaftarpeserta.Nama=arrayDaftarPeserta[0];
objdaftarpeserta.JenisKelamin=arrayDaftarPeserta[1];
objdaftarpeserta.hobi=arrayDaftarPeserta[2];
objdaftarpeserta.tahunLahir=arrayDaftarPeserta[3];
console.log(objdaftarpeserta);
//soal 5
console.log("----SOAL 5----");
var buah={};
var stroberi={nama:"strawberry",warna:'merah','adaBijinya':false,harga:9000};
var jeruk={nama:"jeruk",warna:'orange','adaBijinya':true,harga:8000};
var semangka={nama:"Semangka",warna:'Hijau&Merah','adaBijinya':true,harga:10000};
var pisang={nama:"Pisang",warna:'Kuning','adaBijinya':false,harga:5000};
buah.pertama=stroberi;
buah.kedua=jeruk;
buah.ketiga=semangka;
buah.keempat=pisang;
console.log(buah.pertama);
//soal 6
console.log("----SOAL 6----");
function tambahkanobject(tujuan,sumber){
    tujuan.push(sumber);
}
var LOTR={nama:'LOTR',durasi:'2 jam',genre:'action',tahun:'1999'};
var avenger={nama:'avenger',durasi:'2 jam',genre:'action',tahun:'2019'};
var spiderman={nama:'spiderman',durasi:'2 jam',genre:'action',tahun:'2004'};
var juon={nama:'juon',durasi:'2 jam',genre:'horror',tahun:'2004'};
var dataFilm = [];
tambahkanobject(dataFilm,LOTR);
tambahkanobject(dataFilm,avenger);
tambahkanobject(dataFilm,spiderman);
tambahkanobject(dataFilm,juon);
console.log(dataFilm);
