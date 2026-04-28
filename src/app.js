// --------------------------NANOID------------------
// import { nanoid } from 'nanoid'



// const users = [
//   {
//     name: "Ivan",
//     age: 15,
//     city: "Kyiv"
//   },
//   {
//     name: "Oleg",
//     age: 16,
//     city: "Lviv"
//   },
//   {
//     name: "Anna",
//     age: 14,
//     city: "Odesa"
//   }
// ];


// const result = users.map((item) => {
//    return {
//     ...item,
//     id: nanoid(5)
//    }
// })

// console.log(result);









// // ----------------------------PNOTIFY------------------------

// import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

// import '@pnotify/core/dist/PNotify.css';

// import '@pnotify/core/dist/BrightTheme.css';

// defaultModules.set(PNotifyMobile, {});

// // const myNotice = notice({

// // text: "I'm a notice.",

// // });

// // const myInfo = info({

// // text: "I'm an info message.",

// // });

// const subRef = document.querySelector(".Sub")
// const unsubRef = document.querySelector(".UnSub")

// subRef.addEventListener("click" ,() => {
// const mySuccess = success({

// text: "Thanks for the Sub!",
// delay: 1000

// });
// })

// unsubRef.addEventListener("click" ,() => {
//     const myError = error({
//         text: "Please sub back :d",
//         delay: 1000
//     })
// })



// const myError = error({

// text: "I'm an error message.",

// });




// ======================================================CHARTJS--------------------------------------------




// import Chart from 'chart.js/auto';


// const ctx = document.getElementById('sales-chart');











// const chartData = {
//   labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
//       backgroundColor: "#2196f3",
//       borderColor: "#2196f3",
//       borderWidth: 1,
//     },
//   ],
// };

// const config = {
//     type:'line',
//     data: chartData,
//     options: {}
// }
// const salesChart = new Chart(ctx, config);






















// Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.

// Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.

// Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.

// Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.

// Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю

// Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку, використовуючи бібліотеку pnotify

// Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.

// Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем та повідомленням, використовуючи бібліотеку pnotify


import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/BrightTheme.css';
import { Title } from 'chart.js';

defaultModules.set(PNotifyMobile, {});

const keyRef = document.getElementById("key")
const btnRef = document.querySelector(".btn")


let keys = ["w","a","s","d","q","e","z","x","c","v"];



let currentKeyIndex = 0;



keyRef.textContent = keys[currentKeyIndex]



    btnRef.addEventListener("click", () =>{
    currentKeyIndex = 0;
    keyRef.textContent = keys[currentKeyIndex]
    notice({
        title: "Гру перезапущено!",
        delay: 2000
    })
})

window.addEventListener("keydown", (elem) => {
    if(elem.key !== keys[currentKeyIndex]){
        error({
            title: "неправильна клавіша :d",
            text: "Схоже, що ви натиснула на неправильну кнопку.",
            delay: 2000

        })  
    }
        else{
        success({
  title: "Ура :D",
  text: "Ви натиснули на правильну кнопку!",
  delay: 2000
});
    };
    

    if(currentKeyIndex !== keys.length-1){
        currentKeyIndex ++
    }
    else if(currentKeyIndex === keys.length-1){
      success({
        title: "Гра пройдена!",
        text: "Ви молодець",
        delay: 2000
      })
          keyRef.textContent = keys[currentKeyIndex];
      
    }

    })


