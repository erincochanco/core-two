// const characters=document.querySelectorAll(".grid-container div") 
// characters.forEach(character=>{
    
//     character.addEventListener("click",function(_click1){
//         console.log(this);
//         this.innerHTML = ".";
//     });
//     character.addEventListener("click",function(_click2){
//         this.innerHTML = "(";
//     })
// })

// onload = "initial";

// function initial() {
//     var onclick = clickUpdates();
//     const characters = document.querySelectorAll(".grid-container div") 
//     characters.forEach(character => {
//     character.addEventListener("click", onclick, false);
//     },

//     function clickUpdates() {
//         var count = 0;
//         var next = function() {
//             switch(count) {
//                 case 0: 
//                 console.log('first click');
//                 this.innerHTML = ".";
//                 break;
//                 case 1: 
//                 console.log('second click');
//                 this.innerHTML = "/";
//                 break;
//                 case 2: 
//                 this.innerHTML = "l";
//                 break;
//                 case 3: 
//                 this.innerHTML = "(";
//                 break;
//                 case 4: 
//                 this.innerHTML = ")";
//                 break;
//                 case 5: 
//                 this.innerHTML = "~";
//                 break;
//                 case 6: 
//                 this.innerHTML = "•";
//                 break;
//                 case 7: 
//                 this.innerHTML = "-";
//                 break;
//                 case 8: 
//                 this.innerHTML = "_";
//                 break;
//             }
//             count = count<9?count+1:9;
//         }
//         return next;
//     })
// }

let functionArray = [
    function() {
        console.log('function one');
        document.querySelector(".unit").innerHTML = ".";
        document.querySelector(".unit-one").innerHTML = ".";
        document.querySelector(".unit-two").innerHTML = ".";
        document.querySelector(".unit-three").innerHTML = ".";
    },
    function() {
        console.log('function two');
        document.querySelector(".unit").innerHTML = "/";
        document.querySelector(".unit-one").innerHTML = "/";
        document.querySelector(".unit-two").innerHTML = "/";
        document.querySelector(".unit-three").innerHTML = "/";
    },
    function() {
        document.querySelector(".unit").innerHTML =  "&#92";
        document.querySelector(".unit-one").innerHTML =  "&#92";
        document.querySelector(".unit-two").innerHTML =  "&#92";
        document.querySelector(".unit-three").innerHTML =  "&#92"; // u can't use "/" in js as a character, use this - smitee
    },
    function () {
        document.querySelector(".unit").innerHTML = "(";
        document.querySelector(".unit-one").innerHTML = "(";
        document.querySelector(".unit-two").innerHTML = "(";
        document.querySelector(".unit-three").innerHTML = "(";
    },
    function () {
        document.querySelector(".unit").innerHTML = ")";
        document.querySelector(".unit-one").innerHTML = ")";
        document.querySelector(".unit-two").innerHTML = ")";
        document.querySelector(".unit-three").innerHTML = ")";
    },
    function () {
        document.querySelector(".unit").innerHTML = "~";
        document.querySelector(".unit-one").innerHTML = "~";
        document.querySelector(".unit-two").innerHTML = "~";
        document.querySelector(".unit-three").innerHTML = "~";
    },
    function () {
        document.querySelector(".unit").innerHTML = "•";
        document.querySelector(".unit-one").innerHTML = "•";
        document.querySelector(".unit-two").innerHTML = "•";
        document.querySelector(".unit-three").innerHTML = "•";
    },
    function () {
        document.querySelector(".unit").innerHTML = "-";
        document.querySelector(".unit-one").innerHTML = "-";
        document.querySelector(".unit-two").innerHTML = "-";
        document.querySelector(".unit-three").innerHTML = "-";
    },
    function () {
        document.querySelector(".unit").innerHTML = "_";
        document.querySelector(".unit-one").innerHTML = "_";
        document.querySelector(".unit-two").innerHTML = "_";
        document.querySelector(".unit-three").innerHTML = "_";
    }
];

let i = 0;

window.onload = function() {
    const characters = document.getElementsByTagName('span') [0];
       characters.addEventListener("click", function() {
           functionArray[i++ % functionArray.length]();
       })
}


// . / \ () ~ • -_

