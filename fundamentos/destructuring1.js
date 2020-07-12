// novo recurso do ES2015

const person = {
    name: 'Anne',
    age: 25,
    andress: {
        logradouro: 'ABC Street',
        number: 1000
    }
};

const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;
console.log(n, a);

const { surname, goodHumored = true } = person;
console.log(surname, goodHumored);

const {andress: {logradouro, number, cep } } = person;
console.log(logradouro, number, cep);

const { conta: {ag, num } } = person;
console.log(ag, num);