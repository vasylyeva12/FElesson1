//====Ссылочное хранение==================

//==========Функции=======================

// function getName(params) {
//      const name = prompt("Write your name")
//      console.log(name);    
//  }
// getName()

// function check (params) {
//     const value = prompt("Write your number")
//     if (value % 2 === 0) {
//         console.log("Yes");        
//     } else {
//         console.log("No");
//     }    
// }
// // check()

// function print(str) {
//     console.log(str);
    
// }
// // print("Write your name")

// function power(a, b) {
//     console.log(a**b);   
// }

// power(2, 2)
// power(4, 3)
// power(5, 4)
// power(6, 2)

//Создать функцию, которая в качестве аргументов получает два числа и 
//выводит в консоль наибольшее

// function getMax (a, b) {
//     if (a>b) {
//        console.log(a); 
//     } else
//     console.log(b);
    
// }

// getMax(4, 6)
// getMax (6, 4)

// if (1===1) {
//     var a = 123;
//     let b = 123;
// }
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);//error

// function power(a, b) {
//     let result = a**b 

//     return result // функция доходит до return и после больше ничего не будет выполняться
// }
// const num = power (4, 3)
// console.log(num);

//написать процесс используя функцию power, который находит гипотенузу по длине двух катетов.
//Обязательно напомните группе теорему Пифагора

// let a = power (5, 2)
// let b = power (3, 2)
// let c = power(a+b, 0.5)

// console.log(c);
// //2-ой вариант
// console.log(power(power (5, 2) + power(3,2), 0.5));

// function power(a, b = 2) { // сразу возводит в степень
//     let result = a**b 

//     return result 
// }
// let a = power (5)
// let b = power (3)
// let c = power(a+b, 0.5)

// console.log(c);
// //2-ой вариант
// console.log(power(power (5) + power(3), 0.5));

//==============================================================
// Написать функцию, которая получает одно число, и если число четное, то возвращать
// слово "true", а если не четное, то "false"
// function check (a) {
       
//     if (a % 2 === 0) {
//         return true;        
//     } else {
//         return false;
//     }    
// }
// console.log(check(4)); 
// console.log(check(5)); 

//вариант 2

// function check (a) {
//     return a % 2 === 0        
//     }

// console.log(check(4)); 
// console.log(check(5)); 

// Написать функцию, которая получает в качестве аргумента число и возвращает массив из
//чисел от 0 до указанного числа - 1), а результат выполнения вывести в консоли
    
// function getNewArray (a) {
//     let newArray = []
//   for (let index = 0; index < a; index++) {
//     newArray.push(index)
    
//   }  
//   return newArray
// }
// console.log(getNewArray(9));
// console.log(getNewArray(10));
// console.log(getNewArray(52));
// console.log(getNewArray(32));

// const power = function(a) {
//     return a**2
// }

// console.log(power(4));

// const obj = {
//     qwer: function (a) {  //qwer - может быть любое слово - это ключ
//         console.qwer(a);
//     }
// }
// obj.qwer(123)
// obj.qwer(125)
// obj.qwer(22)
// obj.qwer(95)

// const obj = {
//     print: console.log
// }
// obj.print(123)
// obj.print(125)
// obj.print(22)
// obj.print(95)

//Написать функцию, которая получает в качестве аргумента два числа и возвращает массив из

    
 const getNewArray = function (a, b) {
     let newArray = []
   for (let index = a; index <= b; index++) {
     newArray.push(index)
    
   }  
   return newArray
 }

 console.log(getNewArray(9, 15));
