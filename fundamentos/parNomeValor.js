// par nome/valor
const salutation = 'hey' // contexto léxico 1

function exec() {
    const salutation = `what's up?` //contexto léxico 2
    return salutation
}

// Objetos são grupos aninhados de pares nome/valor
const client = {
    name:'Anne',
    age: 32,
    weight: 70,
    address: {
        logradouro: 'very coll street', 
        number: 123
    }
}

console.log(salutation);
console.log(exec());
console.log(client)