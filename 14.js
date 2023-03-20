//Задача 14
/*сгенерировать num чисел до 100 и отсортировать их в порядке возрастания*/

function getRandom(num, min, max) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    let sortNumbers = arr.sort(function (a, b) {
        return a - b;
    });
    return sortNumbers;
}
console.log(getRandom(10, 1, 100));