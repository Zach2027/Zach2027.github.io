console.log("Task 1")
for (var i = 1; i <= 10; i++) {
    console.log(i * i);
}


console.log("Task 2")
for (var i = 5; i > 0; i--) {
    console.log(i);
    if (i == 1) {
        console.log("blastoff")
    }
}
console.log("Task 3")
for (var i = 0; i <= 50; i += 2) {
    console.log(i)
}
console.log("Task 4")
let sum = 0;
for (var i = 1; i <= 100; i += 1)
    sum += i;
{
    console.log(sum)
}


console.log("Task 5")

let fact = 1;
for (var i = 1; i <= 10; i += 1)
    fact = fact * i
{
    console.log(fact)
}

let arr = [3, 1, 4, 1, 5];

console.log("Task 6")

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}




console.log("Task 7")
for (let i = 1; i <= arr.length; i++) {
    console.log(arr.at(-i));
}


console.log("Task 8")
let array = [];
for (let p = 1; p <= 10; p++) {
    array.push(p ** 3)

}
console.log(array)

let ray = [];
console.log("Task 9")
let x = 0;
let y = 1;

for (let z = 0; z <= 5; z++) {
    x = x + y;
    y = x + y;
    ray.push(x)
    ray.push(y)
}
console.log(ray)


console.log("Task 10")
let ray_1 = [];
for (let t = 0; t <= 4; t++) {
    ray_1.push(arr.pop())
}
console.log(ray_1)
