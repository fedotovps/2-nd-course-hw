// Задание 1

let password = 'qwe123';

let userPassword = String(prompt('Введите пароль'));

if (password === userPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2

let c = Number(prompt('Введите число'));

(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');

// Задание 3

let d = Number(prompt('Введите снова число'));
let e = Number(prompt('Введите еще одно число'));

(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

// Задание 5

let monthNumber = prompt('Укажите какой сейчас месяц');

monthNumber = monthNumber.toLocaleLowerCase();

switch (monthNumber) {
    case 'декабрь':
        console.log('Это зимний месяц');
        break;
    case 'январь':
        console.log('Это зимний месяц');
        break;
    case 'февраль':
        console.log('Это зимний месяц');
        break;
    case 'март':
        console.log('Это весенний месяц');
        break;
    case 'апрель':
        console.log('Это весенний месяц');
        break;
    case 'май':
        console.log('Это весенний месяц');
        break;
    case 'июнь':
        console.log('Это летний месяц');
        break;
    case 'июль':
        console.log('Это летний месяц');
        break;
    case 'август':
        console.log('Это летний месяц');
        break;
    case 'сентябрь':
        console.log('Это осенний месяц');
        break;
    case 'октябрь':
        console.log('Это осенний месяц');
        break;
    case 'ноябрь':
        console.log('Это осенний месяц');
        break;

    default: console.log('Похоже ты ввел не месяц');
        break;
}

// Задание 7

let evenNumber = prompt('Пожалуйста, введите любое число');

if (isNaN(evenNumber)) {
    alert('Нужно ввести именно число');
} else {
    if (evenNumber % 2 == 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

// Задание 8

let clientOS = prompt('Какую ОС вы используете?');

if (isNaN(clientOS)) {
    if (clientOS.toLowerCase().trim() == 'ios') {
        alert('Установите версию приложения для iOS по ссылке');
    } else if (clientOS.toLowerCase().trim() == 'android') {
        alert('Установите версию приложения для Android по ссылке');
    } else {
        alert('Поддерживаются только такие ОС как iOS и Android');
    }
} else {
    if (clientOS == 0) {
        alert('Установите версию приложения для iOS по ссылке');
    } else if (clientOS == 1) {
        alert('Установите версию приложения для Android по ссылке');
    } else {
        alert('Поддерживаются только такие ОС как iOS и Android');
    }
}

