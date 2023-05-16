const person = {
  name: "Shake",
  age: 20,
  hobbies: ["basketball", "coding", "music"],
  address: {
    street: "Macabulos",
    city: "Makati",
  },
};

// destructuring object to create variables
const { name, age } = person;

console.log(name);
