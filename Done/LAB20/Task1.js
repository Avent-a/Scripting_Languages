function sayHi() {
    var phrase = "Привет"; // использование двойных кавычек вместо &quot;
    alert(phrase);
}

sayHi();

// Ошибка: phrase не определена, так как это локальная переменная внутри функции
// alert(phrase);

if (true) {
    var test = true;
}
alert(test); // true, переменная test существует вне блока if

if (true) {
    let test = true;
}
// Error: test is not defined, так как let создает блочную область видимости
// alert(test);

for (var i = 0; i < 10; i++) {
    // ...
}
alert(i); // 10, переменная i доступна вне цикла, так как объявлена с использованием var

function sayHi() {
    if (true) {
        var phrase = "Привет";
    }
    alert(phrase);
}
sayHi();
// Ошибка: phrase не определена, так как это локальная переменная внутри функции
// alert(phrase);

let user1;
// SyntaxError: 'user' has already been declared, переменная user уже объявлена
// let user;

var user = "Pete";
// ничего не делает, переменная объявлена ранее
var user;
// ...нет ошибки
alert(user); // Pete

var user = "Pete";
var user = "John";
alert(user); // John, переменная может быть переопределена с использованием var

function sayHi() {
    var phrase;
    phrase = "Привет";
    alert(phrase);
}
sayHi();

function sayHi() {
    var phrase;
    phrase = "Привет";
    alert(phrase);
}
sayHi();

function sayHi() {
    var phrase; // объявление переменной срабатывает вначале...
    alert(phrase); // undefined
    phrase = "Привет"; // ...присвоение - в момент, когда исполнится данная строка кода.
}
sayHi();
