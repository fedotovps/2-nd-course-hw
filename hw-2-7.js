// Задание 1

let str = 'тестовая строка';
console.log(str.toUpperCase());


// Задание 2

function searchStart(array, stroka) {
    const newArray2 = [];
    array.forEach(element => {
        if (element.toLowerCase().startsWith(stroka.toLowerCase())) {
            newArray2.push(element.toLowerCase());
        }
    });
    console.log(newArray2);
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');


// Задание 3

let num3 = 32.58884;
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));


// Задание 4

console.log('Максимальное число: ' + Math.max(52, 53, 49, 77, 21, 32));
console.log('Минимальное число: ' + Math.min(52, 53, 49, 77, 21, 32));


// Задание 5

function randomNum(minNum, maxNum) {
    return Math.round(Math.random() * (maxNum - minNum)) + minNum;
}

console.log(randomNum(1, 10));


// Задание 6

function getRandomArrNumbers(maxNum) {
    let randomArrNum = [];
    for (let index = 1; index <= Math.floor(maxNum / 2); index++) {
        randomArrNum.push(randomNum(0, maxNum));
    }
    return randomArrNum;
}

console.log(getRandomArrNumbers(12));


// Задание 7

let randomInt = (minNum, maxNum) => console.log(randomNum(minNum, maxNum));
randomInt(1, 5);


// Задание 8

const nowDate = new Date()
console.log(nowDate);

 
// Задание 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let myDate = new Date();

function getCurrentDate(currentDate) {
    return "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + "; Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}

console.log(getCurrentDate(myDate));


// Задание 11
let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function getFruit() {
    list = list.sort(() => Math.random() - 0.5);
    alert(list);

    let firstElArr = prompt('Чему равнялся первый элемент массива?');
    let lastElArr = prompt('Чему равнялся последний элемент массива?');

    if (list[0].toLowerCase() == firstElArr.toLowerCase() && list[6].toLowerCase() == lastElArr.toLowerCase()) {
        alert('Поздравляю, ты ответил правильно на оба вопроса');
    } else if (list[0].toLowerCase() == firstElArr.toLowerCase() || list[6].toLowerCase() == lastElArr.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Ты ответил неверно');
    }

}