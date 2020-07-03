const weightl = 1.0;
const weight2 = Number ('2.0');

console.log(weightl, weight2);
console.log(Number.isInteger(weightl));

const testResult1 = 9.871;
const testResult2 = 6.871;

const total = testResult1 * weightl + testResult2 * weight2;
const average = total / (weightl + weight2);

console.log(average.toFixed(2));
console.log(average.toString(2)); //em binário
console.log(typeof average);
console.log(typeof Number);