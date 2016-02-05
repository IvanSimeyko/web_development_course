/*Створити функцію з назвою isEven, яка буде приймати число і повертати булевий результат (True/False).
True – число парне, False – число не парне. Результат повернути за допомогою ключового слова "return".
*/
function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/*
console.log(isEven(10));
console.log(isEven(21));
*/


/*Створити глобальну змінну senseOfLife = 42. Створити функцію, яка буде приймати параметр otherSenseOfLife.
Якщо параметр передати, то функція має повернути його. А якщо не передати, то фунція має повернути глобальну змінну
senseOfLife.
*/
var senseOfLife = 42;

function showVariable (otherSenseOfLife) {
    if (otherSenseOfLife) {
        return otherSenseOfLife;
    }
    return senseOfLife;
}

/*console.log(showVariable(5));
console.log(showVariable());*/

/*
зверніться до елемента <div id="test"></div> за id = "test" та присвойте вибраний елемент змінній id.
- зверніться до елемента <div class ="test"></div> за класом class = "test" та присвойте вибрані елементи змінній className
- зверніться до елемента <div></div> за тегом та присвойте вибрані елементи змінній tag
*/
var id = document.getElementById('test');
var className = document.getElementsByClassName('test');
var tag = document.getElementsByTagName('div');

/*
У елемент <ul id="test"></ul> потрібно додати три <li></li> елементи. Вибрати <ul> елемент за допомогою id = “test”.
Створити кожен новий <li></li> елемент за допомогою методу createElement() та додати до списоку за допомогою методу
appendChild().
 */

for(var i=0; i<3; i++){
    var ul = document.getElementById('test');
    var li = document.createElement('li');
    ul.appendChild(li)
}