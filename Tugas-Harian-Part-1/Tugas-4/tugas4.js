//soal 1
var angkaawal=2;
var angkaakhir=20;
console.log("LOOPING PERTAMA");
while(angkaawal<=20){
    console.log(angkaawal+" - I love coding");
    angkaawal+=2;
}
console.log("LOOPING KEDUA");
while(angkaakhir>=2){
    console.log(angkaakhir+" - I will become a frontend developer");
    angkaakhir-=2;
}
console.log("-----------------------------------")
//soal 2
for(i=1;i<=20;i++){
    if (i%3==0&&i%2==1){
        console.log(i+" - I Love Coding");
    }
    else if(i%2==1){
        console.log(i+" - Santai");
    }
    else if(i%2==0){
        console.log(i+" - Berkualitas");
    }
}
console.log("-----------------------------------")
//soal 3
for (i=0;i<7;i++){
    for(j=0;j<i+1;j++){
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
console.log("-----------------------------------")
//soal 4
var kalimat="saya sangat senang belajar javascript"
var pisah=kalimat.split(" ");
console.log(pisah);
console.log("-----------------------------------")
//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urut=daftarBuah.sort();
for (i=0;i<urut.length;i++){
    console.log(urut[i]);
}