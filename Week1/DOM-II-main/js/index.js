// Your code goes here

function func1(event) {
    alert('DIV 1');
    event.stopPropagation();
}

function func2() {
    alert('DIV 2');
}

let firstDiv = document.querySelector('.div1');

console.log('div1', firstDiv);
let div2 = document.querySelector('.div2');

firstDiv.addEventListener('click', () => {
    event.func2();
});

div2.addEventListener('click', (event) => {
    event.func1();
});

// let navHead = document.querySelector('.main-navigation');
// console.log('navHead', navHead);

// navHead.addEventListener('click', () => {
//     console.log('hello');
// });
