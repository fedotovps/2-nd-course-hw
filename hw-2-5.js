
// Задание 1

function smallNum(a, b) {
    if (a >= b) {
        return b;
    } else if (a < b) {
        return a;
    }
}

console.log(smallNum(8, 4));

// Задание 2

function evenNum(a) {
    if (a % 2 == 0) {
        return console.log('Число четное');
    } else {
        return console.log('Число нечетное');
    }
 }

 evenNum(21);

// Задание 3.1

let square1 = (a) => console.log(a*a);

square1(4);

// Задание 3.2

function square2(a) {
    return a*a;
}

alert('Функция возвращает ' + square2(4));

// Задание 4

function howManyYears(years) {
    if (years < 0) {
        alert('Ты ввел неправильное значение');
    } else if (years <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Доброе пожаловать!');
    }
}

howManyYears(prompt('Сколько тебе лет?'));

// Задание 5

function multInt(a, b) {
    if (isNaN(a) == true || isNaN(b) == true) {
        alert('Одно или оба значения не являются числом');
    } else {
        alert(a * b);
    }
}

multInt('привет', 4);

// Задание 6

function cubeNum(int) {
    if (!isNaN(int)) {
        result = int ** 3;
        console.log(`${int} в кубе равняется ${result}`);
    } else {
        console.log('Переданный параметр не является числом');
    }
}

cubeNum('test');

// Задание 7

function getAreaCircle() {
    let area = 3.14 * this.radius ** 2;
    console.log(`Площадь круга составляет ${area}`);
}

function getPerimetrCircle() {
    let perimetr = 2 * 3.14 * this.radius;
    console.log(`Периметр круга составляет ${perimetr}`);
}

let circle1 = {
    radius: 3,
    getArea: getAreaCircle,
    getPerimetr: getPerimetrCircle
}

let circle2 = {
    radius: 4,
    getArea: getAreaCircle,
    getPerimetr: getPerimetrCircle
}

circle1.getArea();
circle1.getPerimetr();

circle2.getArea();
circle2.getPerimetr();

// Задание 8

function seasonsGames(num) {
    if (!isNaN(num)) {
        if (num == 12 || num == 1 || num == 2) {
            console.log('Зима');
        } else if (num == 3 || num == 4 || num == 5) {
            console.log('Весна');
        } else if (num == 6 || num == 7 || num == 8) {
            console.log('Лето');
        } else if (num == 9 || num == 10 || num == 11) {
            console.log('Осень');
        } else {
            console.log('какая то дичь');
        }
    } else {
        console.log('Нужно ввести именно число');
    }
}