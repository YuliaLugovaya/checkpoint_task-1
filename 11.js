//Задача 11
/*Написать функцию, которая находит сумму всех чисел от 1 до num. num — положительное целое число больше 0
    (2) → 3 (1 + 2)
    (8) → 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/

function getSumAllNumbers(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, el) => {
        return acc + el;
    }, 0)
}
console.log(getSumAllNumbers(8));