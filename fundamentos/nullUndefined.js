let value; // não inicializada
console.log(value);

value = null; // ausência de valor
console.log(value);
// console.log(value.toString());  // Erro!

const product = {};
console.log(product.price);
console.log(product);

product.price = 3.50;
console.log(product);

product.price = undefined; //evite atribuir undefined
console.log(!!product.price);
// delete produto.preco
console.log(product);

product.price = null; // sem preço
console.log(!!product.price);
console.log(product);



