// 1). Написать программу, которая через prompt считывает число и выводит в консоль
// число равное 10% от введенного числа

let value = +prompt("Write a number")
console.log(`10% is equal to ${value * 0.1}`);

// 2). Написать программу, которая получает два числа и выводит наименьшее

let value1 = +prompt("Enter the first number")
let value2 = +prompt("Enter the second number")

if (value1 >= value2){
    console.log(value2);
} else {
    console.log(value1);
}

// 3). Написать программу, которая считывает через prompt число и выводит одно из 
//следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

let value3 = +prompt("Enter a number")
if (value3 < 100) {
    console.log(`Число ${value3} меньше 100`);
    
} else if (value3 === 100) {
    console.log(`Число ${value3} равно 100`);
    
} else {
    console.log(`Число ${value3} больше 100`);
}

// 4). Написать программу, которая запрашивает у пользователя его имя и возраст (в годах)
// и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, 
//или ‘Hi, ’, если пользователь несовершеннолетний.

let messageName = prompt ("Write your name")
let messegeAge = prompt ("Write your full age")

if (messegeAge > 16) {
    console.log(`Hello, ${messageName}`);
} else {
    console.log(`Hi, ${messageName}`);    
}

//Дополнительные задания
// Создайте массив из строк, чисел, NaN и объектов. 
//Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]

const arr = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
// Задача 1
// Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент 
// массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).

for (let index = 0; index < arr.length; index++) {
    console.log(`elemet ${index} is ${typeof(arr[index])}`);
    
}

// Задача 2
// Просуммируйте все числа в массиве и выведите результат в консоли. 
// Игнорируйте нечисловые элементы.

let sum = 0
for (let index = 0; index < arr.length; index++) {
    if (!isNaN(arr[index])) {
       sum = sum + arr[index]; 
    }
    
}
console.log(`Sum numbers is: ${sum}`);