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

console.log(showVariable(5));
console.log(showVariable());
