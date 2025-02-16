// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';
console.log(s1.length, s2.length, s3.length);

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(s1.toUpperCase());
console.log(s2.toUpperCase());
console.log(s3.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let S1 = 'HELLO WORLD';
let S2 = 'LOREM IPSUM';
let S3 = 'JAVASCRIPT IS COOL';
console.log(S1.toLowerCase());
console.log(S2.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase()); // так теж працює?

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
const s = str.trim(); //trim видаля на початку і в кінці пробіли
console.log(s);
console.log(str.length);
console.log(s.length);

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let STR = 'Ревуть воли як ясла повні';
function stringToarray(str) {
    if (str) {
        let split = str.split(' ');
        return split;
    }
    return [''];
}

let arr = stringToarray(STR);
console.log(arr);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringArr = array.map(String);

console.log(stringArr);

// або другий варіант:
let stringArr2 = array.map(string => string + '');
console.log(stringArr2);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b); //від малого до великого
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a); // від великого до малого
    }
    return array;
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// #yo06d74c1C
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let filteredCourses = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(filteredCourses);






