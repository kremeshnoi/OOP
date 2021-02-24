// Create parent class Animal
class Animal {
  constructor(species, sound, num_of_legs) {
    this.sound = sound
    this.species = species
    this.num_of_legs = num_of_legs
  }

  // Add shared method
  speak() {
    return this.sound
  }
}

// Create Dog child class and let it inherit from Animal class
class Dog extends Animal {
  // Add some code specific for Dog class
  constructor(species, num_of_legs, sound, can_retrieve) {
    super(species, num_of_legs, sound)
    this.can_retrieve = can_retrieve
  }
}

// Create Cat child class and let it inherit from Animal class
class Cat extends Animal {
  // Add some code specific for Cat class
  constructor(species, num_of_legs, sound, can_climb_trees) {
    super(species, num_of_legs, sound)
    this.can_climb_trees = can_climb_trees
  }
}

// Create instance of Dog class
const dog = new Dog("Dog", 4, "Woof", true)

// Create instance of Cat class
const cat = new Cat("Cat", 4, "Mew", true)

// Let dog speak
dog.speak()

// Can dog retrieve a ball?
dog.can_retrieve

// Can dog climb trees?
dog.can_climb_trees

// Let cat speak
cat.speak()

// Can cat retrieve a ball?
cat.can_retrieve

// Can cat climb trees?
cat.can_climb_trees