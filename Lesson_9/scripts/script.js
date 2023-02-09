// console.log("Hello World")

// let name = prompt("Write your name")
// console.log("Hello " + name)
// console.log(`Hello ${name}. How are you?`) // interpolation

// A-Z a-z $ _ 0-9 можно использовать в названии переменной
// можно именовать через _ car_name - snake case
//                         carName - camel case

// нельзя: именовать переменный начиная с чисел, использовать транслитерацию, car-name

//let - используем тогда, когда переменная может изменить значение, const - когда переменная постоянна
// var - использовали раньше, аналог var

//string number
// console.log(5);
// console.log("5");

// console.log(typeof(name));
// console.log(typeof(5));
// console.log(typeofname);
// console.log(typeof5);

// const r = 12;
// const g = 34;
// const b = 14;
// console.log(`rgb(${r}, ${g}, ${b})`);

// console.log("rgb("+ r +" , "+ g +" , "+ b +");");

//"rgb(12, 34, 14);"

// const value_1 = 12
// const value_2 = 4

// console.log(value_1+value_2);
// console.log(value_1-value_2);
// console.log(value_1*value_2);
// console.log(value_1/value_2);
// console.log(value_1%value_2); //взятие остатка от деления
// console.log(value_1**value_2); //возведение в степень

// console.log("===============================");

// const a = 2
// const b = "2"
// console.log(typeof String(a)); //"2"
// console.log(typeof  Number(b)); // 2
// console.log(typeof +b); //унарный оператор из строковой переменной переводит в числовое
// console.log(typeof ("" + a)); //строка + число

// console.log("2" + 2); // числовой тип  - string // "22"
// console.log("2" - 2); // строковый тип - number // 2-2 =0

// console.log(typeof Number("a")); // NaN = Not a Number
// console.log(typeof NaN); // number

// console.log("b" + "a" + Number("c")+ "a");
// console.log("b" + "a" + "c"+ "a");


// Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит
// сколько ему минут
// let age = prompt("Write your age") 

// console.log(`Your age is ${age*365*24*60}`);

//Написать программу, которая считывает через пром число и выводит ее в квадрат

// let value3 = prompt("Write your number") 
// console.log(value3**2)

// const num = prompt("Write a number")
// console.log(`pow of ${num} is ${num**2}`);

// const num_1 = prompt("Write first number")
// const num_2 = prompt("Write second number")

// console.log(`num_1 + num_2 = ${+num_1 + +num_2}`);

const a = "2"
const b = 2

if (a==b) { // 2==2 результат будет true, если ===, то проверятся не только значение. 
    //но и типы переменных и результатом будет false
    console.log("a == b");
  
}else {
    console.log("a не равно b");
}

if (a===b){
    console.log("тип a равно тип b");
}else {
    console.log("тип a не равно b");
}

if (a>b){
    console.log("a больше b");
}else {
    console.log("a меньше b");
}
if (a<b){
    console.log("a меньше b");
}else {
    console.log("a больше b");
}
if (a <= b){
    console.log(a<= b);
}else {
    console.log("a меньше или равно b");
}
if (a >= b){
    console.log(a>=b);
}else {
    console.log("a больше или равно b");
}
if (a != b){
    console.log("a не равно b");
}else {
    console.log("a равно b");
}
if (a !== b){
    console.log("тип a не равно b");
}else {
    console.log("тип a равно b");
}





