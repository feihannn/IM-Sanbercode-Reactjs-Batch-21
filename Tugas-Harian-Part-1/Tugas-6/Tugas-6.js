//SOAL 1
console.log("----SOAL 1----");
const luaslingkaran=(r,phi=3.14)=>{
    return phi*r*r;
}
const kelilinglingkaran=(r,phi=3.14)=>{
    return 2*phi*r;
}
const jari2=7;
let luas=luaslingkaran(jari2);
let keliling=kelilinglingkaran(jari2);
console.log("Luas Lingkaran: "+luas);
console.log("Keliling Lingkaran: "+keliling);
//SOAL 2
console.log("----SOAL 2----");
const tambahkata=(awal,tambah)=>{
    if (awal==""){
        return `${tambah}`;
    }
    else{
        return `${awal} ${tambah}`;
    } 
}
let kalimat="";
kalimat=tambahkata(kalimat,"saya");
kalimat=tambahkata(kalimat,"adalah");
kalimat=tambahkata(kalimat,"seorang");
kalimat=tambahkata(kalimat,"frontend");
kalimat=tambahkata(kalimat,"developer");
console.log(kalimat);
//SOAL 3
console.log("----SOAL 3----");
const newFunction=function literal(firstName,lastName){
    return{
        firstName,
        lastName,
        fullName(){
            console.log(`${firstName} ${lastName}`);
        }
    }
}
//Driver Code 
newFunction("William", "Imoh").fullName() ;
//SOAL 4
console.log("----SOAL 4----");
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName,lastName,destination,occupation,spell}=newObject;
// Driver code
console.log(firstName, lastName, destination, occupation,spell);
//SOAL 5
console.log("----SOAL 5----");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east];
//Driver Code
console.log(combined)