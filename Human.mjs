class Animal{
    constructor(eyes, legs, isRunning, isChewing){
        this.eyes = eyes;
        this.legs = legs;
        this.isRunning = isRunning;
        this.isChewing = isChewing;

    }
    walk(){
        this.isRunning = false;
    }
    run(){
        this.isRunning = true;   
     }
     fasting(){
        this.isChewing = false;

     }
     eat(){
        this.isChewing = true;
     }
     speak(sound){
        console.log(sound);
     }
     toString(animal = 'Animal'){
        return `This${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isRunning ? 'is' : 'is not'} running, and ${this.isChewing ? 'is' : 'is not'} chewing.`;
       
     }
    
}
//Human Class
class Human extends Animal {
   constructor(hair, isMoving, isAwake, firstName, lastName, age, city, state, zip, occupation){
     super(2, 2, isAwake, isMoving)
    this.hair = hair,
    this.name = {
     first: firstName,
     last: lastName
    },
    this.age = age,
    this.location = {
     city: city,
     state: state,
     zip: zip
    },
    this.occupation = occupation
   }
   introduce() {
     console.log(
       `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
     );
   }
 }