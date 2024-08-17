// const names = function main(firstName, lastName) {
//   return firstName + lastName;
// };

// function addition(value1, value2) {
//   value1 + value2;
// }

// ((firstName, lastName) => {
//   return firstName + lastName;
// })("haris", "iqbal");

// console.log(names("Haris", "Iqbal"));
// console.log(main("Haris", "Iqbal"));
// console.log(addition(1, 2));

// this like foreach
// function app(callback) {
//   callback("Haris", "iqbal");
// }

// // this is like map because we are returning the callback/function
// function test(callback) {
//   return callback();
// }

// app((firstName, lastName) => {
//   console.log(firstName, lastName);
// });

// console.log(
//   app(function () {
//     return 10;
//   })
// );

// console.log(app(() => 10));

function main(callback) {
  return callback(10, 20);
}

function callback(val1, val2) {
  return val1 + val2;
}

main(callback);

// CREATE A CALLBACK FUNCTION THAT PERFORM ADDITTION OF 2 NUMBERS
