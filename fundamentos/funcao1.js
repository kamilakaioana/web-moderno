//funcao sem retorno
function printSum(a, b) {
    console.log(a + b);
}

printSum(2, 3);
printSum(2);
printSum(2, 10, 4, 5, 6, 7, 8);
printSum();

//funcao com retorno
function sum(a, b = 1) {
    return a + b
}

console.log(sum(2, 3));
console.log(sum(2));
console.log(sum());