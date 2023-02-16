// DOM - Document Object Model

// const pValue = document.querySelector("p")
// console.log(pValue.innerText);
// // pValue.innerText = "Hello World!"
// // console.log(pValue.innerText);

// const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs.innerText);

// for (let index = 0; index < paragraphs.length; index++) {
//     console.log(paragraphs[index]);
   
// }

// const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs.innerText);

// for (let index = 0; index < paragraphs.length; index++) {
//     const p = paragraphs[index]
//     console.log(p.innerText);
    
// }

// const pValue = document.querySelector(".main info_1")
// pValue.innerText = "Hello World!"
// console.log(pValue.innerText);

// const p = document.querySelectorAll(".info_1")
// //Объявляем новый пустой массив
// const arr = []
// // сохраняем

// for (let index = 0; index < p.length; index++) {
//     arr.push(p[index].innerText)
    
// }
// console.log(arr)

//=====Атрибуты элементов, картинок===========

// const img =document.querySelector("img")
// console.log(img.src);
// console.log(img.alt);
// img.setAttribute("src", "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403")
// console.log(img.src);
// img.setAttribute("alt", "panda")
// img.setAttribute("data-content", "Hello World!")

// const imgs = document.querySelectorAll(".main img")


//  for (let index = 0; index < 5; index++) {
//     imgs[index].setAttribute("src", "https://catassist.org.au/images/stories/2012/2022by-lawcampaign.jpg");
    
//  }

// const div = document.querySelector(".main")
// const p = document.createElement("p")
// p.innerText = "Hello World!"
// div.append(p) //обращаемся к дочернему элементу, в который хотим добавить другой элемент в конце
// div.prepend(p) //...вначале

const paragraphsText = ["Day 1", "Day 2", "Day 3", "Day 4"]
// проитерировать массив paragraphs создать для каждого элемента массива тег параграф, добавить туда содержимое элемента и потом этот элемент добавить в div с классом main

//Пройтись циклом по массиву, забрать каждый элемент, создать для каждого Day 1 .....
const div = document.querySelector(".main")
// for (let index = 0; index < paragraphsText.length; index++) { //проитерировать 
//     const p = document.createElement("p") //создаем новый параграф? результат - <p></p>
//     p.innerText = paragraphsText[index] //обращаемся по индексу и присваивем инертекст
//     div.append(p) //добавляем с классом мейн
    
// }

//Написать отдельную функцию, которая принимает текст как аргумент, создает параграф с этим текстом и возвращает этот параграф и в цикле сделать сделать div.append(p)

function d (p) {
    const p = document.createElement("p")
    p.innerText = paragraphsText[index]
    div.append(p)
    
}



 