// const arr = [5, -6, 8, -1, 53, 56, 89, -3]
// let sumOfElement = 0

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     sumOfElement += element
    
// }

// console.log(sumOfElement);

//Найти сумму всех положительных чисел

// let sumAllPositive = 0

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 0)
//     sumAllPositive += arr[index];
    
// }
// console.log(sumAllPositive);

//=====Найти сумму четных и нечетных чисел из массива и вывести разницу между ними.
// Вычесть из большего меньшее.===================================
// const arr = [5, -6, 8, -1, 53, 56, 89, -3]
// let evenSum = 0
// let oddSum = 0

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element % 2 == 0) evenSum+= element
//     else oddSum += element 
        
//     }
//     let diff = 0
//     if (evenSum > oddSum) {
//         diff = evenSum - oddSum 
//         }else {
//                 diff = oddSum - evenSum
//             } 
//         console.log(`oddSum = ${oddSum}`);
//         console.log(`eveSum = ${evenSum}`);
//         console.log(`diff = ${diff}`);

//  for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 0) {
//      sumAllPositive += arr[index]; 

//      }  else (arr[index] < 0)
//      sumNegativ += arr[index]    
     
    
 
//  console.log(sumAllPositive);
//  console.log(sumNegativ);
//  console.log(sumAllPositive - sumNegativ);

//===========Найти сумму чисел, чей индекс равен значению элемента=======================

// const arr = [5, -6, 8, -1, 4, 2, 6, -3, 9, 13, 10, 22, 12]
// let sum = 0

// for (let index = 0; index < arr.length; index++) {
//     if (index === arr[index]) {
//         sum += arr[index]
//     }
      
// }

// console.log(sum);

//========================Объекты=======================
// const person = ["John", "Smith", 37, 175]
// console.log(`Name ${person[0]}`);
// console.log(`Second Name ${person[1]}`);
// console.log(`Age ${person[2]}`);
// console.log(`Height ${person[3]}`);

// const person = {
//     name: "John",  // чтобы присвоить значение ставится ключ :
//     secondName: "Smith", 
//     age: 37, 
//     height: 175
// } // object
//  console.log(`Name ${person[`name`]}`); // интерполяция
//  console.log("Name" + person[`name`]); // конконтенация
//  console.log(`Second Name ${person[`secondName`]}`);
//  console.log(`Age ${person[`age`]}`);
//  console.log(`Height ${person[`height`]}`);

//  console.log(`Name ${person.name}`);
//  console.log(`Second Name ${person.secondName}`);
//  console.log(`Age ${person.age}`);
//  console.log(`Height ${person.height}`);
// personalbar.name = "Jake" //edit exists key value
// personalbar.proffesion = "programmer" // adit new key = value
// console.log(person.gender); // undefined
// console.log(person);
 
const products = [
{
    name: "President",
    price: 2,
    type: "milkproduct",  
    discount: 12 

},
{
    name: "Borodinskiy",
    price: 3,
    type: "breadproduct",
    discount: 0   
},

{ 
name: "Morshin",
price: 2,
type: "waterproduct",
discount: 17
},
{ 
    name: "A4 Papire",
    price: 20,
    type: "officeproduct",
    discount: 0
    },
{ 
    name: "Table tenice",
    price: 2000,
    type: "sport",
    discount: 18
     }
]

//=======пройдитесь циклом по массиву с продуктами и в новый массив добавьте те продукты
 //у которых type "sport"

 let totalPrice = 0;
 const newProdacts = []

 for (let index = 0; index < products.length; index++) {
    const {type} = products[index]
    if (type ==="sport") {
        newProdacts.push(products[index])
    }   
    
 }

 console.log(`Total price: ${totalPrice}`);
 console.log(newProdacts);

// for (let index = 0; index < products.length; index++) {
//     console.log(products[index].price);
        
// }

// for (let index = 0; index < products.length; index++) {
//     console.log(`Price of products ${products[index].name} is ${products[index].price}`);
// }

//Пройдитесь циклом по массиву объектов и найдите общую сумму товаров

// let totalPrice = 0
// for (let index = 0; index < products.length; index++) {
    
//   console.log(`Price of ${products[index].name} is ${products[index].price}`);
//   totalPrice += products[index].price
    
// }
// console.log(`Total price: ${totalPrice}`);

// let totalPrice = 0

// for (let index = 0; index < products.length; index++) {
//     const {name, price, discoun} = products[index] //деструктуризация
//   console.log(`Price of ${name} is ${price - price / 100}`);
//   totalPrice += price
    
// }
// console.log(`Total price: ${totalPrice}`);


