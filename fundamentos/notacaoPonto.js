console.log(Math.ceil(6.1));

const obj1 = {}
obj1.name ='Ball';
//obj1.['name'] ='Ball2'
console.log(obj1.name);

function Obj(name) {
    this.name = name;
    this.exec = function() {
        console.log('Exec...');
    }
}
const obj2 = new Obj('chair');
const obj3 = new Obj('table');
console.log(obj2.name);
console.log(obj3.name);
obj3.exec();