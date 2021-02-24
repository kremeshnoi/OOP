// Create parent class Animal
class Animal {
  // Add shared speak method
  speak() {
    return "Grrr"
  }
}

// Create class Dog, child class of Animal
class Dog extends Animal {
  // Create new implementation of speak() method
  // This is polymorphism
  speak() {
    return "Woof"
  }
}

// Create class Cat, child class of Animal
class Cat extends Animal {
  // Create new implementation of speak() method
  // This is polymorphism
  speak() {
    return "Meow"
  }
}

// Create instance of Dog class
const dog = new Dog()

// Call the speak method on Dog instance
dog.speak()

// Create instance of Cat class
const cat = new Cat()

// Call the speak method on Cat instance
cat.speak()