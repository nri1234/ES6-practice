// task 1
const a = "hello";
const b = "world";
const c = `${a} ${b}`;
console.log(c);

//task 2
const multiply = (x, y = 1) => x * y;
console.log(multiply(5));
//task 3
const average = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum / args.length);
};
average(1, 2, 3, 4);
//task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);
//task 5
const name = [1, 4, "Iwona", false, "Nowak"];
const [, , firstname, , lastname] = name;
console.log(firstname, lastname);
