console.log("This is a sctipt file");

let name0 = "Supriyo";
let name1 = "Roni";
let name2 = "Gopal";
let name3 = "Bappa";
let greetText = "Good Morning";

function greet(name, greetText = "greetings from JavaScript"){
    console.log(greetText + " " + name + ".")
    console.log(name + " is a good boy");
}

greet(name0, greetText);
greet(name1, greetText);
greet(name2);
greet(name3, greetText);

let a = 34;
let b = 97;
let c = 45;

function sum(a, b, c){
    let d = a + b + c;
    return d;
}

console.log("Sum of a, b, c is : " + sum(a, b, c));