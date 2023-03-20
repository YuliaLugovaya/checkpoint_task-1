//Задача 8
/*Дана строка с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки.*/

function getSumFromString(str) {
    let array = str.split(" ");
    let arr = [];

    array.forEach((el) => {
        if (!isNaN(Number(el))) {
            arr.push(Number(el));
        } else {
            el++
        }
    })
    return arr.reduce((acc, el) => {
        return acc + el;
    }, 0)

    // второй способ
    // let regular = /\d/g;
    // let numbers = str.match(/\d/g);
    // return numbers.map((el) => Number(el)).reduce((acc, el) => acc + el, 0);
}
console.log(getSumFromString('слово 5 3 слово'));