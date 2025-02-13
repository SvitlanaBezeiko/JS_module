// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareR(a, b){
    result = a * b;
    return result;
}
let sqr = squareR(13, 2);
console.log (sqr);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function roundSquare (radius){
    let result = 3.14 * radius * radius;
    return result;
}
let RSQR = roundSquare(6);
console.log (RSQR);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare (radius, high){
    let result = 2 * Math.PI * radius * high;
    return result;
}
let Cylinder_Square = cylinderSquare(5, 8);
console.log(Cylinder_Square);

//#SIdMd0hQ
//- створити функцію яка приймає масив та виводить кожен його елемент
function objectsArray (array) {
    for (const item of array) {
        console.log(item);
    }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
];
objectsArray (users);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function writeText(text1, text2){
    document.write(`
<p>${text1} ${text2}</p>
`);
}
writeText(`Hello world1!`, `Hello Okten!`);

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function list(text){
    document.write(
        `
<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>    
</ul>
`
    )
}
list('Hello Okten!')

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
document.write(`<ul>`);
function listofArray(elements){
    for (const element of elements) {
        document.write(
            `
            <li>${element}</li>
`
        )

    }
}
document.write(`</ul>`);

listofArray([5, 10, 20, true, 'apple'])

// #bovDJDTIjt
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function blockofObjects(users){
    for (const user of users) {
        document.write(`
        <div> ${user.id} ${user.name} ${user.age}
        </div>
        `);
    }
}
blockofObjects([
    {id: 1, name: 'olya', age: 27},
    {id:2, name:'Yura', age:35},
    {id:3, name:'Nika', age:20},
    {id:4, name:'Kolya', age:43},
]);

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function arrayMinValue(numbers){
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }

    }
    return min;
}
console.log(arrayMinValue([10, 1, 2, 0, -10, 100]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let total = 0;
    for (let number of arr) {
        total += number; //( += ) добавляет значение правого операнда к переменной и присваивает переменной результат
    }
    return total;
}

console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, i1, i2){
let temp = arr[i1];
arr[i1] = arr[i2];
arr[i2] = temp;

return arr;
}
console.log(swap([11,22,33,44],0,1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues) {
    choosenCurrency
    }
}