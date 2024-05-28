// //Part 1:

// const adventurer = {
//   name: 'Robin',
//   health: 10,
//   inventory: ['sword', 'potion', 'artifact'],
//   companion: {
//     name: 'Leo',
//     type: 'Cat',
//     companion: {
//       name: 'Frank',
//       type: 'Flea',
//       inventory: ['small hat', 'sunglasses'],
//     },
//   },
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   },
// };
//  adventurer.roll()

//  // Step 2: Log each item in Robin's inventory
// for (const item of adventurer.inventory) {
//   console.log(item);
// }

// // Step 3: Test the roll method
// adventurer.roll();
// adventurer.roll(2);

// //Part 2
//     //step1
// class Character {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.inventory = [];
//   }
//     //step2
//     roll(mod = 0){
//         const result = Math.floor(Math.random() * 20) +1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
    
//   }
// }

    //step3

const robin = new Character('Robin');
robin.inventory = ['sword', 'potion', 'artifact'];
robin.companion = new Character('Leo');
robin.companion.type = 'Cat';
robin.companion.companion = new Character('Frank');
robin.companion.companion.type = 'Flea';
robin.companion.companion.inventory = ['small hat', 'sunglasses'];

// //Part 3

    // Step 1: Create the Adventurer class

    // Step 1: Create the Adventurer class
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  // Step 2: Add the scout method
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }
}

    // Step 3: Create a Companion class
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

    // Step 4: Change the declaration of Robin and companions
const robinAdventurer = new Adventurer("Robin", "Fighter");
robinAdventurer.inventory = ["sword", "potion", "artifact"];
robinAdventurer.companion = new Companion("Leo", "Cat");
robinAdventurer.companion.companion = new Companion("Frank", "Flea");
robinAdventurer.companion.companion.inventory = ["small hat", "sunglasses"];

//Part 4 Class Uniforms
   //Step 1: Add static properties to Character class
class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// // Step 2: Add static properties to Adventurer class
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }
}

// Create Companion class remains the same
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

// Change the declaration of Robin and companions
const robinAdventurer2 = new Adventurer("Robin", "Fighter");
robinAdventurer2.inventory = ["sword", "potion", "artifact"];
robinAdventurer2.companion = new Companion("Leo", "Cat");
robinAdventurer2.companion.companion = new Companion("Frank", "Flea");
robinAdventurer2.companion.companion.inventory = ["small hat", "sunglasses"];

// //Part 5

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }

  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }

  findByIndex(index) {
    return this.adventurers[index];
  }

  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory('Healer');
const robinHealer = healers.generate('Robin');
console.log(healers.findByName('Robin'));

//Part 6

class Adventurer extends Character {
  static ROLES = ['Fighter', 'Healer', 'Wizard'];

  constructor(name, role) {
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    super(name);
    this.role = role;
    this.inventory.push('bedroll', '50 gold coins');
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }

  duel(opponent) {
    while (this.health > 50 && opponent.health > 50) {
      const myRoll = this.roll();
      const opponentRoll = opponent.roll();
      if (myRoll > opponentRoll) {
        opponent.health -= 1;
      } else if (opponentRoll > myRoll) {
        this.health -= 1;
      }
      console.log(
        `${this.name} health: ${this.health}, ${opponent.name} health: ${opponent.health}`
      );
    }
    const winner = this.health > 50 ? this.name : opponent.name;
    console.log(`${winner} wins the duel!`);
  }
}

const robinAdventurer3 = new Adventurer('Robin', 'Fighter');
const leoAdventurer = new Adventurer('Leo', 'Fighter');

robinAdventurer3.duel(leoAdventurer);

//Part 7

const fighters = new AdventurerFactory('Fighter');
//const healers = new AdventurerFactory('Healer');
const wizards = new AdventurerFactory('Wizard');

fighters.generate('Robin');
healers.generate('Leo');
wizards.generate('Frank');

const robinFighter = fighters.findByName('Robin');
const leoHealer = healers.findByName('Leo');

robinFighter.duel(leoHealer);