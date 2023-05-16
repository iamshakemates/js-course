const todos = [
  {
    id: 1,
    task: "Throw the trash",
    isDone: true,
  },
  {
    id: 2,
    task: "Code for 30 min",
    isDone: true,
  },
  {
    id: 3,
    task: "Order food",
    isDone: false,
  },
];

// const todoText = todos.map(function (todo) {
//   return todo.task;
// });

// console.log(todoText);

let todoCompleted = todos
  .filter(function (todo) {
    return todo.isDone === true;
  })
  .map(function (todo) {
    return todo.task;
  });

console.log(todoCompleted);

// for-each
// todos.forEach(function (todo) {
//   console.log(todo.task);
// });

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);

// const shoes = ["nike", "jordan", "reebok"];

// // while loop
// let i = 0;
// while (i < 3) {
//   console.log(shoes[i]);
//   i++;
// }

// // for loop
// for (let i = 0; i < 3; i++) {
//   console.log(shoes[i]);
// }

// //  for-of loop
// for (let shoe of shoes) {
//   console.log(shoe);
// }
