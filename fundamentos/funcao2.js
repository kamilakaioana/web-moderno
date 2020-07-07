//armazenando uma funcao em uma variavel
const printSum = function (a, b) {
    console.log(a + b);
};

printSum(2, 3);

//Armazenando u ma funcao arrow em uma variavel
const sum = (a, b) => {
    return a + b;
};

console.log(sum(2, 3));

//retorno implícito
const subtraction = (a, b) => a - b;
console.log(subtraction(2, 3));

const print2 = a => console.log(a)
print2('Cool!!!')

