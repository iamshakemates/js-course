function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getYear = function () {
  return this.dob.getFullYear();
};

const person1 = new Person("John", "Doe", "06-19-1995");

console.log(person1.getYear());
GIT;
