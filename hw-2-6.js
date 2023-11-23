// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    if (arr[index] == 10) {
        break;
    }
}

// Задание 2

const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

// Задание 3

const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

// Задание 4

const arr4 = [];
for (let index = 0; index <= 2; index++) {
    arr4.push([1, 1, 1]);
}

console.log(arr4);

// Задание 5

const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5, 100];
arr6.sort().pop();
console.log(arr6);

// Задание 7

const arr7 = [9, 8, 7, 6, 5];
function includes(intUser) {
    (arr7.includes(intUser)) ? alert('Угадал') : alert('Не угадал');
}

includes(Number(prompt('Введи число на угад')));

// Задание 8

let str = 'abcdef';

const arr8 = str.split('');
arr8.reverse();
str = arr8.join('');

console.log(str);

// Задание 9

const arr9 = [[1, 2, 3,],[4, 5, 6]];
console.log(arr9.flat());

// Задание 10

const arr10 = [2, 4, 3, 9, 7];

for (let index = 0; index < arr10.length - 1; index++) {
    let result = Number(arr10[index]) + Number(arr10[index + 1]);
    console.log(`Сумма текущего и следующего элмента = ${result}`);    
}

// Задание 11

const arr11 = [2, 4, 5];
const arrSq = arr11.map((square) => square * square);
console.log(arrSq);

// Задание 12 

const arr12 = [];

function getLengthWords(array12) {
    for (let index = 0; index < array12.length; index++) {
        arr12.push(array12[index].length);
    }
    console.log(arr12);
}

getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);

// Задание 13
const arr13 = [];

function filterPositive(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            arr13.push(array[index]);
        }
    }
    console.log(arr13);
}
  
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  //filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

// Задание 14

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr14 = [];
const arrEvenNum = [];

function task14(min, max) {
    for (let index = 0; index < 10; index++) {

        let randNum = getRandomNumber(min, max);
        arr14.push(randNum);
        
        if (arr14[index] % 2 == 0) {
            arrEvenNum.push(arr14[index]);
        }
    }
    console.log(arr14);
    console.log(arrEvenNum);
}

task14(0, 10);

// Задание 15

const arr15 = [];
let sumArr = 0;

function task15(min, max) {
    for (let index = 0; index < 6; index++) {
        let randNum = getRandomNumber(min, max);
        arr15.push(randNum);
        sumArr = sumArr + randNum;
    }
    console.log(arr15);
    console.log(result = sumArr / arr15.length);
}

task15(1, 10);