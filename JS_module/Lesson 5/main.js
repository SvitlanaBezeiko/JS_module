// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (a, b) => a * b;
console.log(square(10, 15));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let roundSquare = (radius) => 3.14 * radius *radius;
console.log(roundSquare(10));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderSquare = (radius, high) => 2 * Math.PI * radius * high;
console.log(cylinderSquare(5, 5));

//#SIdMd0hQ
//- створити функцію яка приймає масив та виводить кожен його елемент
let objectsArray = (array) => {
    for (const item of array){
        console.log(item);}
}
objectsArray([1, 2, 3, "hello", true]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let writeText = (text1, text2) => {
    document.write(`
<p>${text1} ${text2}</p>
`);
}
writeText(`Hello world1!`, `Hello Okten!`);

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let list = (text) => {
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
list('Hello kokos-abrikos! How are you?');

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
document.write(`<ul>`);
let listofArray = (elements) => {
    for (const element of elements) {
        document.write(
            `
            <li>${element}</li>
`
        )

    }
}
document.write(`</ul>`);

listofArray([5, 10, 20, true, 'apple']);

// #bovDJDTIjt
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let blockofObjects = (users) => {
    for (const user of users) {
        document.write(`
        <div> ${user.id} ${user.name} ${user.age} <hr> 
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
let arrayMinValue = (numbers) => {
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
let sum = (arr) => {
    let total = 0;
    for (let number of arr) {
        total = total + number; //( += ) добавляет значение правого операнда к переменной и присваивает переменной результат
    }
    return total;
}

console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, i1, i2) =>{
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;

    return arr;
}
console.log(swap([11,22,33,44],0,1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:42},{currency:'EUR',value:45}],'USD'));
