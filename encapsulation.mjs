// class Learner {
//     #grades = [];
//     #name = {
//       first: '',
//       last: '',
//     }
//     #age;
  
//       constructor(firstName, lastName, age) {
//           this.#name.first = firstName;
//       this.#name.last = lastName;
//       this.#age = age;
//       }
//     get name() {
//       return this.#name.first + ' ' + this.#name.last; 
//     }
//     get age() {
//       return this.#age;
//     }
//     set age(){
//         age = Number(age);
//         f (age >= 0 && age <= 100) {
//             this.#age.push(age);
//           }
//     }
//     set grades(grade) {
//       // change the grade to a Number, in case it was provided as a String
//       grade = Number(grade);
//       // Only accept values between 0 and 100
//       if (grade >= 0 && grade <= 100) {
//         this.#grades.push(grade);
//       }
//     }
//   }
  
//   const learner1 = new Learner('Leeroy', 'Jenkins', 18);
//   console.log(learner1.name)
// //   console.log(learner1.age)
//   console.log(learner1.grades)
//   learner1.grades = [1000, 90, "80", 77, 23]
//   console.log(learner1.name)

//   addGrades(...grades) {
//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         this.#grades.push(grade);
//       }
//     });
//   }
//   get grades(){
//     return this.grades;

//   }

class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const cat1 = new SpottedTabby();
let object = cat1;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);