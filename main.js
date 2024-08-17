const values = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

let result = 0;

function addition(a = 0, b = 0) {
  return a + b;
}

function main() {
  document.getElementById("1").addEventListener("click", (e) => {
    result += addition(parseInt(values.one));
    console.log("result: ", result);
  });

  document.getElementById("2").addEventListener("click", (e) => {
    result = result + addition(values.two);
    console.log("Result: ", result);
  });

  document.getElementById("3").addEventListener("click", (e) => {
    result = result + addition(values.three);
    console.log("Result: ", result);
  });

  document.getElementById("4").addEventListener("click", (e) => {
    result = result + addition(values.four);
    console.log("Result: ", result);
  });
}

main(); // function calling or executing

console.log("Hello world");
