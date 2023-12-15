


// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort(function (a, b) {
    return a.age - b.age;
 }));



 // Задание 2

function isPositive(num) {
    if (num > 0) {return num}
    }

function isMale(str) {
    if (str.gender == 'male') {return str}
    }

function filter(arr, ruleFun) {
    const newArr = [];
    
    arr.forEach(element => {
        if(ruleFun(element)) {
            newArr.push(element);
        }
    });

    // for (let index = 0; index < arr.length; index++) {
    //     newArr.push(ruleFun(arr[index]));
    // } 

    return newArr;
    }
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


// Задание 3

const timer3 = (deadline3) => {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000)

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, deadline3 * 1000);
}

timer3(30);


// Задание 4

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000)
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})


// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда2');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
setTimeout(() => {
    delayForSecond(sayHi('Глеб2'))
}, 1000);