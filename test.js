/* Задание 1
Создайте объект car с различными свойствами, такими как model, year, color, 
и добавьте новое свойство, представляющее объем двигателя. Затем измените одно из существующих 
свойств и удалите другое. Выведите информацию об объекте в консоль.
*/

let car = {
    model: 'Mazda',
    year: '2018',
    color: 'red'
}

console.log(car);

car.volume = 2.5;
car.year = '2019';

console.log(car);

delete car.volume;

console.log(car);

/* Задание 2
Создайте объект student с свойствами name, age, grades (массив оценок). 
Добавьте метод averageGrade, который вычисляет среднюю оценку студента, и метод addGrade, 
который добавляет новую оценку в массив. Выведите результаты вызова методов в консоль.
 */

let student = {
    name: 'Pavel',
    age: 31,
    grades: [5, 4, 3, 5, 4, 5],
    averageGrade: function getAverageGrade() {
        let averGradResult = 0;
        for (let index = 0; index < this.grades.length; index++) {
            averGradResult = averGradResult + this.grades[index];
        }
        averGradResult = averGradResult / this.grades.length;
        console.log(averGradResult);
    },
    addGrade: function getAddGrade(newGrade) {
        this.grades.push(newGrade);
        console.log(student);
    }
}

student.averageGrade();
student.addGrade(6);


/* Задание 3
Создайте объект book с различными свойствами, такими как title, author, year, и добавьте 
метод displayInfo, который выводит информацию о книге в формате "Название книги, автор, 
год издания". Выведите результат вызова метода в консоль.
*/

let book = {
    title: 'Nazvanie knigi',
    author: 'Fedotov',
    year: 2020,
    displayInfo: getDisplayInfo
}

function getDisplayInfo() {
    return this.title + ', ' + this.author + ', ' + this.year;
}

console.log(book.displayInfo());

/* Задание 4
Создайте объект movie с различными свойствами, такими как title, director, year, genres 
(массив жанров). Добавьте метод addGenre, который позволяет добавить новый жанр к фильму. 
Выведите результат добавления в консоль.*/

let movie = {
    title: 'Gladiator',
    director: 'Pashka',
    year: '2010',
    genres: ['Action', 'Comedi', 'Triller'],
    addGenre: addNewGenre
}

function addNewGenre(newGenre) {
    return this.genres.push(newGenre);
}
console.log(movie);

movie.addGenre('Drama');
console.log(movie);


/* Задание 5
Создайте объект computer с различными свойствами, такими как brand, processor, ram, storage. 
Создайте метод upgradeRam, который позволяет улучшить объем оперативной памяти. Выведите информацию 
о компьютере до и после апгрейда в консоль.*/

computer = {
    brand: 'Apple',
    processor: 'Intel',
    ram: 32,
    storage: 1200,
    upgradeRam: addRam
}

function addRam(addCountRam) {
    return this.ram = this.ram + addCountRam;
}

console.log(computer);
computer.upgradeRam(32);
console.log(computer);


/*
Задание 6
Создайте объект musicPlayer с различными свойствами, такими как brand, model, storageCapacity, 
currentTrack. Добавьте метод playNextTrack, который переключает на следующий трек. 
Выведите информацию о текущем треке до и после вызова метода в консоль.
*/

let musicPlayer = {
    brand: 'Apple',
    model: 'iPod 3',
    storageCapacity: 16,
    currentTrack: 'Now 2048',
    playNextTrack: nextTrack
}

function nextTrack(titleTrack) {
    return this.currentTrack = titleTrack;
}

console.log(musicPlayer);

musicPlayer.playNextTrack('Where is my mind?');

console.log(musicPlayer);

/*Задание 7
Создайте объект animal с свойствами name, type, sound. Добавьте метод makeSound, который выводит в консоль звук, издаваемый животным. Выведите результат вызова метода в консоль.
 */

const animal = {
    name: 'cat',
    type: 'domashnyi',
    sound: 'mua',
    makeSound: golos
}

function golos() {
    console.log(this.sound);
}

animal.makeSound();