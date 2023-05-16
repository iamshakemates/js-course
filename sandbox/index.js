class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "06-19-1995");

console.log(person1);

console.log(person1.getFullName());
