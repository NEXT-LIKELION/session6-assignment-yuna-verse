const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const even = numbers.filter((num) => num % 2 === 0);

const square = even.map((num) => num ** 2);

const sum = square.reduce((acc, num) => acc + num, 0);

console.log(sum);
