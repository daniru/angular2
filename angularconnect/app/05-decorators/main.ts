function MyDecorator(){
    return function(){
        return "a";
    }
    
}

@MyDecorator
class Person{}


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