//Задача 1
/* Реализуйте функцию, принимающую слово и возвращающую количество заглавных букв в нем.
ПРИМЕР ("проКрАСТИНация") -> 6*/

function findUpperCase(str) {
    let arr = [];

    let array = str.split('');
    array.forEach((el) => {
        if (el === el.toUpperCase()) {
            arr.push(el)
        }
    })
    return arr.length;
}
console.log(findUpperCase('проКрАСТИНация'));