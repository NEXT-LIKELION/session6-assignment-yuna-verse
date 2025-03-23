const person = {
    name: "David",
    city: "London",
    age: 30,
};

for (let key in person) {
    if ("" + person[key] === person[key]) {
        person[key] += " (확인됨)";
    }
}

console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];

const longWords = [];

for (let word of words) {
    if (word.length >= 5) {
        longWords.push(word);
    }
}

console.log(longWords);
