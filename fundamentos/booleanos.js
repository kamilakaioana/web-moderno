let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);

console.log('the true...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('the false...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('to finishing...');
console.log('' || null || 0 || ' ');

let name = 'Anne Katherine'

console.log(name || 'unknow')
