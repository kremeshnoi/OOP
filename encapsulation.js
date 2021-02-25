class User {
  // Create private class properties/fields
  // NOTE: Private fields was added to JavaScript in ES2015
  #_username
  #_email

  // Create getter method to get username property
  get username() {
    return this.#_username
  }

  // Create setter method to set, or change, username property
  set username(newUsername) {
    if (newUsername && newUsername.length === 0) {
      throw new Error("username must contain more than 0 characters")
    }

    this.#_username = newUsername
  }

  // Create getter method to get email property
  get email() {
    return this.#_email
  }

  // Create setter method to set, or change, email property
  set email(newEmail) {
    if (newEmail && newEmail.length === 0) {
      throw new Error("email must contain more than 0 characters")
    }

    this.#_email = newEmail
  }
}

// Create new instance of User class
const alexander = new User()

// Set username
alexander.username = "Alexander"

// Set email
alexander.email = "alexander@gmail.com"
