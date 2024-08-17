const person = {
  name: "harisiqbal",
  age: 24,
  gender: "M",
  isAdult: true,
  value1: 1,
  value2: 2,
  value3: 3,
  getTotal: () => person.value1 + person.value2 + person.value3,
  // getTotalValue:
  male: {
    name: "Haris iqbal",
  },
};


person = 10;

console.log(person.name);

person.name = "Azeem Javed";

console.log(person.name);

// ((firstName, lastName) => {
//   return firstName + lastName;
// })("haris", "iqbal");
