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

function listofArray()