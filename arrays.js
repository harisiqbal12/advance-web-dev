const data = [
  {
    name: "haris iqbal",
    age: 24,
  },
  {
    name: "azeem",
    age: 40,
  },
  {
    name: "saqib",
    age: 30,
  },
  0,
  "haris",
];

const value = data.forEach((el, index) => {
  console.log(el);
  console.log(index);
  return 10;
});

console.log(value);
