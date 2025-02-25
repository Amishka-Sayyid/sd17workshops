// Object Oriented Programming

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  poop() {
    console.log(`${this.name} poops.`);
  }
}

const animal = new Animal("Dog");
animal.speak(); // Dog makes a noise.
animal.poop(); // Dog poops.

// Classes: Inheritance
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
dog.poop(); // Rex poops.

class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }

  fly() {
    console.log(`${this.name} flies.`);
  }
}

const bird = new Bird("Sparrow");
bird.speak(); // Sparrow chirps.
bird.poop(); // Sparrow poops. (inherited from Animal)
bird.fly(); // Sparrow flies.

// Adding capabilities to different objects can be done with composition,
class FlyingAnimal extends Animal {
  fly() {
    console.log(`${this.name} flies.`);
  }
}
// ⛳️ Create a Pig class that inherits from FlyingAnimal
class Pig extends FlyingAnimal {
  speak() {
    console.log(`${this.name} oinks.`);
  }
}

const pig = new Pig("Porky");
pig.speak(); // Porky oinks.
pig.poop(); // Porky poops. (inherited from Animal)
pig.fly(); // Porky flies. (inherted from FlyingAnimal)

// /*🎯 Implement a hierarchical class system for building a weapon or magic system in a video game. For example, you might need a Weapon class and associated functions, and then create a Sword and Staff with different attack messages. Think about whether you’d need a MeleeWeapon and MagicalWeapon for the hierarchy to create different types of weapon. Perhaps all Weapons inherit from a GameItem class that provides all the functionality of every object in the game. For a magic system you may have a Spell class, and then DefensiveSpells and DamageSpells.*/

class GameItem {
  constructor(name) {
    this.name = name;
  }

  DamageSpells() {
    console.log(`${this.name} inflicts great damage!`);
  }
}

class MeleeWeapon extends GameItem {
  Spell() {
    console.log(`${this.name} best when used for close-quarters combat`);
  }
  DefensiveSpells() {
    console.log(`${this.name} slashing  and defense. `);
  }
}
const meleeWeapon = new MeleeWeapon("Sword");
meleeWeapon.Spell();
meleeWeapon.DamageSpells();
meleeWeapon.DefensiveSpells();

class MagicalWeapon extends GameItem {
  Spell() {
    console.log(`${this.name} best when used for long distance combat`);
  }
  DefensiveSpells() {
    console.log(`${this.name} inflicts magical damage on the target.  `);
  }
}
const magicalWeapon = new MagicalWeapon("Staff");
magicalWeapon.Spell();
magicalWeapon.DefensiveSpells();
magicalWeapon.DamageSpells();
