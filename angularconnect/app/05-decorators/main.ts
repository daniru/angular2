import {Component} from "angular2/angular2"

function ClassDecorator(target){
    target.isSuperhero = true;
    target.power = 'flight';
}

function MethodDecorator(target){
    
}

function PropertyDecorator(target, key, descriptor){
    descriptor.writable = false;
    return descriptor;
}

function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    var originalMethod = descriptor.value; // save a reference to the original method
    // NOTE: Do not use arrow syntax here. Use a function expression in order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function(...args: any[]) {
        console.log("The method args are: " + JSON.stringify(args)); // pre
        var result = originalMethod.apply(this, args);               // run and store the result
        console.log("The return value is: " + result);               // post
        return result;                                               // return the result of the original method
    };

    return descriptor;
}

@Controller({
    selector: "person",
    
})
class Person{
    onClick($event){
        console.log("Something clicked on me");
    } 
    
}


// 
// function go(){
//     console.log ("going");
// }
// 
// let originalFunction = go;
// go = function(){
//     console.log("Start");
//     originalFunction();
//     console.log("End");    
// }