// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr = [10, -22, 'apple', true, 'yellow', 55, 78, 1000, 'blue', 'end'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Robinson Crusoe', pageCount: 335, genre: 'novel'};
let book2 = {title: 'Harry Potter', pageCount: 3075, genre: 'novel'};
let book3 = {title: 'Babel', pageCount: 400, genre: 'fantasy'};

console.log(book1, book2, book3);

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books = [
    {
        title: "To Kill a Mockingbird", pageCount: 281, genre: "Fiction", authors: [
            {name: "Harper Lee", age: 89}
        ]
    },
    {
        title: "1984", pageCount: 328, genre: "Dystopian", authors: [
            {name: "George Orwell", age: 46}
        ]
    },
    {
        title: "Good Omens", pageCount: 432, genre: "Fantasy", authors: [
            {name: "Terry Pratchett", age: 66}, {name: "Neil Gaiman", age: 63}
        ]
    }
];

console.log(books);

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: "Alice", username: "alice01", password: "pass123"},
    {name: "Bob", username: "bob02", password: "secure456"},
    {name: "Charlie", username: "charlie03", password: "qwerty789"},
    {name: "David", username: "david04", password: "letmein321"},
    {name: "Eve", username: "eve05", password: "hello987"},
    {name: "Frank", username: "frank06", password: "welcome654"},
    {name: "Grace", username: "grace07", password: "abc123xyz"},
    {name: "Hank", username: "hank08", password: "mypassword"},
    {name: "Ivy", username: "ivy09", password: "password111"},
    {name: "Jack", username: "jack10", password: "pass999"}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatures = [
    { day: "Monday", morning: 10, afternoon: 15, evening: 12 },
    { day: "Tuesday", morning: 11, afternoon: 16, evening: 13 },
    { day: "Wednesday", morning: 9, afternoon: 14, evening: 11 },
    { day: "Thursday", morning: 10, afternoon: 17, evening: 14 },
    { day: "Friday", morning: 12, afternoon: 18, evening: 15 },
    { day: "Saturday", morning: 14, afternoon: 20, evening: 16 },
    { day: "Sunday", morning: 13, afternoon: 19, evening: 15 }
];

console.log(temperatures);

// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

x = -3;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 30;
if (time >= 0 && time <= 15){
    console.log('Перша чверть');
}else if (time >= 16 && time <= 30){
    console.log('Друга чверть');
}else if (time >= 30 && time <= 45){
    console.log('Третя чверть');
}else if (time >= 16 && time <= 30){
    console.log('Четверта чверть');
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 18; // Довільне значення від 1 до 31
let decade;
if (day >= 1 && day <= 10) {
    decade = "перша декада";
} else if (day >= 11 && day <= 20) {
    decade = "друга декада";
} else {
    decade = "третя декада";
}

console.log(`Число ${day} належить до ${decade} місяця.`);

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt('Введіть номер дня тижня (1-7):');
let schedule;
switch (dayNumber) {
    case 1:
        schedule = 'Monday - Work and Gym';
        break;
    case 2:
        schedule = 'Tuesday - Study and Meeting';
        break;
    case 3:
        schedule = 'Wednesday - Shopping and Yoga';
        break;
    case 4:
        schedule = 'Thursday - Work and Dinner with Friends';
        break;
    case 5:
        schedule = 'Friday - Movie Night';
        break;
    case 6:
        schedule = 'Saturday - Outdoor Activities';
        break;
    case 7:
        schedule = 'Sunday - Rest and Family Time';
        break;
    default:
        schedule = 'Invalid day number. Please enter a number between 1 and 7.';
}
console.log(schedule);


