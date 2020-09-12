for (var i = 0; i < 200; i++) {
    console.log("\n");
}

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Callbacks 1
var namesLengthMoreThanThree = names.filter(name => name.length >= 3);
function printElements(item, index) {
    console.log(index + ": " + item);
}

names.forEach(printElements);
console.log("\n");
namesLengthMoreThanThree.forEach(printElements);
console.log("\n");

//Callbacks 2
var allNamesUpperCase = names.map(arr => arr.toUpperCase());
allNamesUpperCase.forEach(printElements);

//Callbacks 3
var namesToHtmlList = "<ul>" + names.map(function (name) {
	return "<li>" + name + "</li>";
}).join("") + "</ul>";
console.log(namesToHtmlList);