let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

let arrayName = [22, "string", true, null];
console.log(arrayName[0]);
console.log(arrayName[1]);
console.log(arrayName[2]);
console.log(arrayName[3]);

let div=function(a,b){
    return a/b;
};
console.log(div(10,2));
let greet = function() {
  console.log("Hello");
};
greet();

let greet2 = (name) => {
  console.log("Hello, " + name + "!");
};
greet2("Yashasvi");

let greet3 = (name) => {
  console.log(`Hello, ${name}!`);
};
greet3("karan");