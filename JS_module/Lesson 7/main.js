// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'sveta', 'kovalova', 'qwerty@gmail.com', '+11556368');
console.log(user);

let users = [
    new User(1, 'sveta', 'kovalova', 'qwerty@gmail.com', '+11556368'),
    new User(5, 'vasya', 'kokoschko', 'vasistdas@gmail.com', '+56311112'),
    new User(2, 'taisa', 'vlasenko', 'kola@ukr.net', '+354654545'),
    new User(17, 'itay', 'kerne', 'itaykor@gmail.com', '+555324455'),
    new User(11, 'vita', 'plys', 'plysv@gmail.com', '+3552555521'),
    new User(12, 'kolya', 'kokoschko', 'vasistdas@gmail.com', '+56311112'),
    new User(14, 'ira', 'kokoschko', 'vasistdas@gmail.com', '+56311112'),
    new User(3, 'kostya', 'kokoschko', 'vasistdas@gmail.com', '+56311112'),
    new User(4, 'pedro', 'kokoschko', 'vasistdas@gmail.com', '+56311112'),
    new User(100, 'kostas', 'ricko', 'vasistdas@gmail.com', '+56311112'),
]
console.log(users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(user => user.id % 2 === 0));

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((user1, user2) => user1.id - user2.id));

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(5, 'sara', 'sofer', 'sofi@gmail.com', '+2555521', [{title: 'phone', price: 42000}, {title: 'airpods', price: 3500}, {title: 'cover', price: 600}]),
    new Client(6, 'kolya', 'koval', 'kival@gmail.com', '+5566232', [{title: 'tv', price: 110000}, {title: 'stereosystem', price: 11500}]),
    new Client(1, 'ira', 'pryhodko', 'irpr@ukr.net', '+986325856', [{title: 'watch', price: 8900}]),
    new Client(9, 'styopa', 'veremeyev', 'sveremeyev@gmail.com', '+35566325', [{title: 'airpods', price: 5500}, {title: 'tv', price: 89000}, {title: 'stereosystem', price: 11500}, {title: 'cover', price: 300}]),
    new Client(11, 'sergey', 'stepanenko', 'stepanenko@gmail.com', '+3555652', [{title: 'tablet samsung', price: 15000}, {title: 'cover', price: 500}]),
    new Client(2, 'styopa', 'veremeyev', 'sveremeyev@gmail.com', '+35566325', [{title: 'phone charge', price: 900}, {title: 'cover', price: 600}]),
    new Client(333, 'petya', 'kovalenko', 'koval@gmail.com', '+65161032', [{title: 'tv', price: 75000}, {title: 'stereosystem', price: 11500}, {title: 'cover', price: 600}]),
    new Client(13, 'yana', 'schermer', 'schermer@gmail.com', '+3656262', [{title: 'airpods', price: 5500}]),
    new Client(55, 'kostya', 'verkuta', 'verkuta@gmail.com', '+662325465', [{title: 'phone charge', price: 900}, {title: 'cover', price: 600}]),
    new Client(7, 'alex', 'ker', 'ker@gmail.com', '+6558888', [{title: 'tv', price: 110000}, {title: 'stereosystem', price: 11500}])
    ]

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));
// console.log(clients.sort((a, b) => a.order.length - b.order.length));


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car1 (model, producer, year, maxSpeed, engineVolume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function(){
        `їдемо зі швидкістю ${this.maxSpeed} на годину`
    };

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function (){
        for (const item in this) {
            console.log(item, this[item]);
        }
    };

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (speedToAdd){
        this.maxSpeed = this.maxSpeed + speedToAdd;
    };

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue){
        this.year = newValue;
    };

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver){
        this.driver = driver;
    };
}

const car = new Car1("Model S", "Tesla", 2021, 250, 3.0);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(60);
car.changeYear(2025);
car.addDriver({ name: "Alex", age: 35, experience: 17 });
car.info();
console.log(car);

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
        drive(){
            `їдемо зі швидкістю ${this.maxSpeed} на годину`
        };
        info(){
            for (const item in this) {
                console.log(item, this[item]);
            }
        };
        increaseMaxSpeed(speedToAdd){
            this.maxSpeed = this.maxSpeed + speedToAdd;
        };
        changeYear(newValue){
            this.year = newValue;
        }
        addDriver(driver){
            this.driver = driver;
        };
    }
const car2 = new Car2("Model S", "Mercedes", 2019, 260, 3.0);
console.log(car2);

car2.drive();
car2.info();
car2.increaseMaxSpeed(60);
car2.changeYear(2025);
car2.addDriver({ name: "Alex", age: 35, experience: 17 });
car2.info();
console.log(car2);




// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince{

    constructor(name, age, foundShoesSize) {
        this.name = name;
        this.age = age;
        this.foundShoesSize = foundShoesSize;
    }
}

const cinderellas = [
    new Cinderella("Анна", 20, 35),
    new Cinderella("Олена", 21, 36),
    new Cinderella("Катерина", 22, 37),
    new Cinderella("Марія", 23, 38),
    new Cinderella("Ірина", 24, 35),
    new Cinderella("Юлія", 25, 36),
    new Cinderella("Оксана", 26, 37),
    new Cinderella("Наталія", 27, 38),
    new Cinderella("Дарина", 28, 39),
    new Cinderella("Софія", 29, 40)
];

const prince = new Prince("Олександр", 30, 37);


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter