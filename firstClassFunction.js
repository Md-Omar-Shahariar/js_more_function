//pass function as an argument
function myInfo(name, ageInfo){
    let age = 20
    ageInfo(age)
    console.log(`My Name is ${name}`);

}

function ageInfo(myAge){
    console.log(`My Age is ${myAge}`);
}

myInfo('Afridi', ageInfo)
//return a function from function
function myMessage(name){
    console.log(`My name is ${name}`);
    return function age(myAge){
        console.log(`my Age is ${myAge}`);
    }
}


myMessage('afridi')(30)

//set function as a variable
function aFunc(name) {
    console.log('I am Simply a function and my name is ' + name);
}

var anothervar = aFunc;
anothervar('Zonayed Ahmed');


aFunc()
function aFunc(){
    var a =10
    var b =20
    var sum = a + b
    console.log('Sum' + sum);
}


