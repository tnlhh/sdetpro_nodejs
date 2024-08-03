// CRUD: Create Read Update Delete

/**
 *  Literal Declaration
 *  index: start from 0
 *  length
 * 
 * 
 *  */

let myNumArray = [1, 2, 3, 4, 5];

// Delete | splice
myNumArray.splice(0,2);

console.log(myNumArray);

/////


function sayHello(name){
    console.log(`Hello ${name}`);
}
function sayHelloNewStyle(name){
    console.log(`How is going ${name}?`);
}
//Higher order function
function functionCaller(name, callBackFunction){
    callBackFunction(name);
}

function callApi(apiUrl, formatData) {
    try {
    // Get data from api example.com
    // Got data
    formatData();
    } catch (e) {
        console.log('Error', e);
    }
}

// Middleware
// Receive user request -> Log User input -> validate -> Process -> Return result

[receiveRequest, logInput, validate, process, returnResult];
function receiveRequest(next) {
    
    // Original
    // valiate -> logInput

    // validate something 
    next();
}

functionCaller("Teo", sayHello);
functionCaller("Teo", sayHelloNewStyle);