// par nome/valor
const salutation = 'oops' // contexto léxico 1

function exec() {
    const salutation = 'speak' //contexto léxico 2
    return salutation
}

// Objetos são grupos aninhados de pares nome/valor
const client = {
    name:'Pedro',
    age: 32,
    weight: 90,
    address: {
        logradouro: 'very coll street', 
        number: 123
    }
}

console.log(salutation);
console.log(exec());
console.log(client)