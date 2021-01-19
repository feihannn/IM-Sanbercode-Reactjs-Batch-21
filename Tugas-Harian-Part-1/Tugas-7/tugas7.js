//soal 1
console.log("----SOAL 1----");
//release 0
console.log("----RELEASE 0----");
class Animal {
    constructor(nama){
        this.legs=4;
        this.cold_blooded=false;
        this.name=nama;
    }
    set kaki(jumlah){
        this.legs=jumlah;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs=3;//mencoba set
console.log(sheep.legs);
//release 1
console.log("----RELEASE 1----");

class Ape extends Animal{
    constructor(nama){
        super(nama);
        this.legs=2;
    }
    yell(){
        console.log("Auooo");
    }
}

class Frog extends Animal{
    constructor(nama){
        super(nama);
    }   
    jump(){
        console.log("hop hop");
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);
//soal 2
console.log("----SOAL 2----");
class Clock{
    constructor({template}){
        this.template=template;
    }
    render(){
        var date = new Date();
        var hours = date.getHours();
        var mins = date.getMinutes();
        var secs = date.getSeconds();
        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        if (hours < 10) this.hours = '0' + hours;
        if (mins < 10) this.mins = '0' + mins;
        if (secs < 10) this.secs = '0' + secs;
        
        console.log(output);
    }
    start(){
        this.render();
        this.timer = setInterval(()=>this.render(), 1000);
    }
    stop(){
        clearInterval(this.timer);
    }
  }
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 