import {number} from "./anotherFile";

var person = {
	name: "Dani",
	height: "4"
};

var name = person.name;
var {name, height} = person;  //destructuriong es6

console.log(name, height);