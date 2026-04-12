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









// ----------------------------PNOTIFY------------------------

import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

// const myNotice = notice({

// text: "I'm a notice.",

// });

// const myInfo = info({

// text: "I'm an info message.",

// });

const subRef = document.querySelector(".Sub")
const unsubRef = document.querySelector(".UnSub")

subRef.addEventListener("click" ,() => {
const mySuccess = success({

text: "Thanks for the Sub!",
delay: 1000

});
})

unsubRef.addEventListener("click" ,() => {
    const myError = error({
        text: "Please sub back :d",
        delay: 1000
    })
})



// const myError = error({

// text: "I'm an error message.",

// });