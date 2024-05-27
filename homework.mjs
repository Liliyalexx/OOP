//Part 1:

const adventurer = {
  name: 'Robin',
  health: 10,
  inventory: ['sword', 'potion', 'artifact'],
  companion: {
    name: 'Leo',
    type: 'Cat',
    companion: {
      name: 'Frank',
      type: 'Flea',
      inventory: ['small hat', 'sunglasses'],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
 adventurer.roll()

 // Step 2: Log each item in Robin's inventory
for (const item of adventurer.inventory) {
  console.log(item);
}

// Step 3: Test the roll method
adventurer.roll();
adventurer.roll(2);

//Part 2
    //step1
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
    //step2
    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) +1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    
  }
}

    //step3

const robin = new Character('Robin');
robin.inventory = ['sword', 'potion', 'artifact'];
robin.companion = new Character('Leo');
robin.companion.type = 'Cat';
robin.companion.companion = new Character('Frank');
robin.companion.companion.type = 'Flea';
robin.companion.companion.inventory = ['small hat', 'sunglasses'];

//Part 3

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