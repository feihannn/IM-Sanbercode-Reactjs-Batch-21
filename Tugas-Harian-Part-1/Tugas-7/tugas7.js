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
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
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
        this.hours = date.getHours();
        this.mins = date.getMinutes();
        this.secs = date.getSeconds();
        var output = this.template
            .replace('h', this.hours)
            .replace('m', this.mins)
            .replace('s', this.secs);
        if (this.hours < 10) this.hours = '0' + this.hours;
        if (this.mins < 10) this.mins = '0' + this.mins;
        if (this.secs < 10) this.secs = '0' + this.secs;
        
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