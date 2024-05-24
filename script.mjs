// // const person = {
// //     name: {
// //       first: 'Elyan',
// //       last: 'Kemble',
// //     },
// //     age: 32,
// //     location: {
// //       city: 'Garland',
// //       state: 'Texas',
// //       zip: 75040
// //     },
// //     occupation: 'Front-End Developer',
// //     introduce() {
// //       console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
// //     }
// //   }
  
// //   person.introduce();

//   class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 	this.eyes = eyes,
//     this.legs = legs,
//     this.isAwake = isAwake,
//     this.isMoving = isMoving,
//     console.log(Animal);
	  
// 	}
//     sleep(){
//         this.isawaike = false;

//     }
//     wake(){
//         this.isAwake = true;
//     }
//     sit(){
//         this.MOving = false;
//     }
//     walk(){

//     }
//     speak(sound){
//         console.log(sound);
//     }
//     toString(){
//         return`This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;

//     }
    
// };


// const cat1 = new Animal(2, 4, true, false);
// console.log(cat1);
// let Zuchinni = new Animal(2, 4, true, false)

// Zuchinni.isMoving = "mybe";
// console.log(Zuchinni);
// Zuchinni.speak("bork, bork");
// Zuchinni.sleep(Zuchinni)
// console,log(toString)

class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
	this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}
let Zuke = new Dog("red and Wolly", true, true);
    console.log(Zuke)


class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}
let Bear = new Cow("Red", true, true);
console.log(Bear);
Dylan.speak();

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