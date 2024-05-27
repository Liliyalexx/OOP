// // //Classes & OOP
// const person = {
//   name: {
//     first: 'Elyan',
//     last: 'Kemble',
//   },
//   age: 32,
//   location: {
//     city: 'Garland',
//     state: 'Texas',
//     zip: 75040,
//   },
//   occupation: 'Front-End Developer',
//   introduce() {
//     console.log(
//       `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
//     );
//   },
// };

// person.introduce();


// // //Creating Classes
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    (this.eyes = eyes),
      (this.legs = legs),
      (this.isAwake = isAwake),
      (this.isMoving = isMoving);
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
  toString() {
    return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? 'is' : 'is not'
    } awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}
Animal.walk();

// // //Creating Extended Classes
// // class Cat extends Animal {
// //   constructor(fur, isAwake, isMoving) {
// //     super(2, 4, isAwake, isMoving);
// //     this.fur = fur;
// //   }
// //   speak() {
// //     super.speak('Meow...');
// //   }
// //   toString() {
// //     return super.toString('Cat');
// //   }
// // }

// // class Dog extends Animal {
// //   constructor(fur, isAwake, isMoving) {
// //     super(2, 4, isAwake, isMoving);
// //     this.fur = fur;
// //   }
// //   speak() {
// //     super.speak('Woof Wooferson!!');
// //   }
// //   toString() {
// //     return super.toString('Dog');
// //   }
// // }

// // class Cow extends Animal {
// //   constructor(hair, isAwake, isMoving) {
// //     super(2, 4, isAwake, isMoving);
// //     this.hair = hair;
// //   }
// //   speak() {
// //     super.speak(
// //       'Mooooooooooooooooooooooooooooooooooooooooooooooooooooooooo - Dojo Cat'
// //     );
// //   }
// //   toString() {
// //     return super.toString('Cow');
// //   }
// // }

// // //Human Class
// // class Human extends Animal {
// //   constructor(
// //     hair,
// //     isMoving,
// //     isAwake,
// //     firstName,
// //     lastName,
// //     age,
// //     city,
// //     state,
// //     zip,
// //     occupation
// //   ) {
// //     super(2, 2, isAwake, isMoving);
// //     (this.hair = hair),
// //       (this.name = {
// //         first: firstName,
// //         last: lastName,
// //       }),
// //       (this.age = age),
// //       (this.location = {
// //         city: city,
// //         state: state,
// //         zip: zip,
// //       }),
// //       (this.occupation = occupation);
// //   }
// //   introduce() {
// //     console.log(
// //       `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
// //     );
// //   }
// // }

// // let Dylan = new Human(
// //   'Blonde-ish',
// //   false,
// //   true,
// //   'Dylan',
// //   'ThatGuy',
// //   30,
// //   'PVD',
// //   'Rhode Island',
// //   20709,
// //   'Educating the World'
// // );

// // // console.log(Dylan)

// // let Dinner = new Cow(
// //   'Long and Lucious locks like he just got a perm',
// //   true,
// //   false
// // );
// // let Zuke = new Dog('Blonde and Wooly', true, true);
// // let bandit = new Cat('Black & WHite Tux', false, false);

// // // Dylan.introduce()

// // // Dylan.speak("Talking all day")

// // //Encapsulation
// // class Learner {
// //   #grades = [];
// //   #name = {
// //     first: '',
// //     last: '',
// //   };
// //   #age;

// //   constructor(firstName, lastName, age) {
// //     this.#name.first = firstName;
// //     this.#name.last = lastName;
// //     this.#age = age;
// //   }
// //   get name() {
// //     return this.#name.first + ' ' + this.#name.last;
// //   }
// //   get age() {
// //     return this.#age;
// //   }
// //   addGrades(...grades) {
// //     grades = grades.flat(2);

// //     grades.forEach((grade) => {
// //       grade = Number(grade);

// //       if (grade >= 0 && grade <= 100) {
// //         this.#grades.push(grade);
// //       }
// //     });
// //   }
// //   get grades() {
// //     return this.#grades;
// //   }
// //   get average() {
// //     const arr = [...this.#grades];
// //     arr.sort((a, b) => a - b).shift();

// //     return arr.reduce((a, b) => a + b) / arr.length;
// //   }
// // }

// // const learner1 = new Learner('Leeroy', 'Jenkins', 18);

// // // learner1.grades = 100
// // // learner1.grades = "80"
// // // learner1.grades = 75
// // // let nums = [75, 80, "80", 95, 60]
// // // learner1.addGrades(nums)
// // // console.log(learner1.grades)
// // // console.log(learner1.average)

// // //Instantiate new learner
// // const learner2 = new Learner('Percy', 'Jackson', 14);
// // //Log New leeaners name and age
// // console.log(learner2.name);
// // console.log(learner2.age);

// // //Add grades to learner2 object
// // let gradesToAdd = [[95, 87, 66], '98', '100', -60, 88, 89, [100, 76, 88], 105];
// // learner2.addGrades(gradesToAdd);

// // // Log out our current grades
// // console.log(learner2.grades);

// // //Calculate ouyr average 91.22222
// // console.log(learner2.name)

// class Animal {
//   static speak(sound) {
//     console.log(sound);
//   }
// }

// class Cat extends Animal {
//   static speak() {
//     super.speak("Meow...");
//   }
// }

// class Dog extends Animal {
//   static speak() {
//     super.speak("Woof!");
//   }
// }

// class Cow extends Animal {
//   static speak() {
//     super.speak("Moo.");
//   }
//   static name = "Cheese"
// }

// Cat.speak()
// Cow.speak()
// Dog.speak()
// Animal.speak("What animals can talk!?!?!")

// console.log(Cow.name)

// class Animal {}
// class Cat extends Animal {}
// class Tabby extends Cat {}
// class SpottedTabby extends Tabby {}

// const cat1 = new SpottedTabby();
// let object = cat1;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);
