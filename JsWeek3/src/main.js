console.log("Hej med dig");

console.log("");

//a)
var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];

//b)
var all = boys.concat(girls);

//c)
console.log(all.join(', '));

console.log("");

console.log(all.join(' - '))

//d)
all.push('Lone', 'Gitte');
console.log("");
console.log(all);

//e)
all.unshift('Hans', 'Kurt');
console.log("");
console.log(all);

//f)
all.shift('Hans');

//g)
all.pop('Gitte');
console.log("");
console.log(all);

//h)
all.splice(3,2);
console.log("");
console.log(all);

//i)
all.reverse();
console.log("");
console.log(all);

//j)
all.sort();
console.log("");
console.log(all);

//k)
var newAll = all.map(function(num){
    return num.toString().toLocaleLowerCase();
});
console.log("");
console.log(newAll);

//l)
var newAll2 = all.map(function(num){
    return num.toString().toLocaleUpperCase();
});
console.log("");
console.log(newAll2);

//m)
all = all.filter(e => e.startsWith("L") || e.startsWith("l"));
console.log("");
console.log(all);
