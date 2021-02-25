// Create parent class Animal
class Animal {
  constructor(species, sound, numOfLegs) {
    this.sound = sound
    this.species = species
    this.numOfLegs = numOfLegs
  }

  // Add shared method
  speak() {
    return this.sound
  }
}

// Create Dog child class and let it inherit from Animal class
class Dog extends Animal {
  // Add some code specific for Dog class
  constructor(species, numOfLegs, sound, canRetrieve) {
    super(species, numOfLegs, sound)
    this.canRetrieve = canRetrieve
  }
}

// Create Cat child class and let it inherit from Animal class
class Cat extends Animal {
  // Add some code specific for Cat class
  constructor(species, numOfLegs, sound, canClimbTrees) {
    super(species, numOfLegs, sound)
    this.canClimbTrees = canClimbTrees
  }
}

// Create instance of Dog class
const dog = new Dog("Dog", 4, "Woof", true)

// Create instance of Cat class
const cat = new Cat("Cat", 4, "Mew", true)

// Let dog speak
dog.speak()

// Can dog retrieve a ball?
dog.canRetrieve

// Can dog climb trees?
dog.canClimbTrees

// Let cat speak
cat.speak()

// Can cat retrieve a ball?
cat.canRetrieve

// Can cat climb trees?
cat.canClimbTrees