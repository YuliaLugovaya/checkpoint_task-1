//Задача 15
/*Напиши функцию, которая в массиве чисел находит и возвращает наименьшее число.
[94, 2, 71, 10, 22, 71] —>  2*/

function getMinNumber(arr) {
    let arraySort = arr.sort(function (a, b) {
        return a - b;
    })
    return arraySort[0];

    // второй способ
    // return Math.min(...arr);
}
console.log(getMinNumber([5, 65, 3, 150, 75]));