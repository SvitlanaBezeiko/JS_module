// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let goods = [
    {id: 1, name: "Смартфон Samsung Galaxy S23", category: "Смартфони", price: 29999},
    {id: 2, name: "Ноутбук Apple MacBook Air M2", category: "Ноутбуки", price: 49999},
    {id: 3, name: "Навушники Sony WH-1000XM5", category: "Аудіо", price: 12999},
    {id: 4, name: "Смарт-годинник Apple Watch Series 9", category: "Годинники", price: 19999},
    {id: 5, name: "Планшет iPad Pro 11'' M2", category: "Планшети", price: 37999},
    {id: 6, name: "Ігрова приставка Sony PlayStation 5", category: "Геймінг", price: 23999},
    {id: 7, name: "Фітнес-браслет Xiaomi Mi Band 8", category: "Годинники", price: 1799},
    {id: 8, name: "Телевізор LG OLED C3 55''", category: "Телевізори", price: 59999},
    {id: 9, name: "Кавомашина De'Longhi Magnifica S", category: "Кухонна техніка", price: 16999},
    {id: 10, name: "Електросамокат Xiaomi Mi Scooter Pro 2", category: "Транспорт", price: 20999},
];

for (let i = 0; i < goods.length; i++) {
    const good = goods[i];
    document.write(`<div><h3>${good.name} - ${good.category} - ${good.price} UAH </h3></div>`)
}

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i < 11; i++) {
    document.write(`<div>Day of the month: ${i}</div>`)
}
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a = 0;
while (a < 20) {
    document.write(`<h1>Hello!</h1>`)
    a++;
}

// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let b = 0;
while (b < 20) {
    document.write(`<h1>Day: ${b}</h1>`)
    b++;
}

// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
 for (const item of listOfItems) {
    document.write(
        `<li>${item}</li>`)
}
document.write(`</ul>`)

// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
</div>`)
}

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let user of users){
    if (user.status){  //відразу значення саме по собі тру//
        console.log(user);
    }
}

for (let user of users){
    if (!user.status){ //не тру, !-заперечення//
        console.log(user);
    }
}
for (let user of users) {
    if (user.age > 30){
        console.log(user);
    }

}