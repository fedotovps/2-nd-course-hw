// Задание 1

let i = 1;

while (i < 3) {
    console.log('привет');
    i++;
}

// Задание 2

for (i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3

for (i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4

let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}

for (let key in obj) {
    alert(`${key} — зарплата ${obj[key]} долларов.`)
}

// Задание 5

let n = 1000;
let num = 0;

do {
    n = n / 2;
    console.log(n);
    num++;
    if (n < 50) {
        console.log('Нужно ' + num + ' итераций');
    }
} while (n > 50)

// Задание 6
// Даты пятниц взял на основе октября 2023 года

let friday = 6;

for (let day = 1; day <= 31; day++) {

    if (day === friday) {
        alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
        friday = friday + 7;
    }
}