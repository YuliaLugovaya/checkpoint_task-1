//Задача 5
/*Преобразуйте первую букву каждого слова строки в верхний регистр.
ПРИМЕР
("привет! я хороший человек") -> Привет! Я Хороший Человек"*/

function upperEveryWord(str) {
    let array = str.split(" ");
    let arr = [];
    array.forEach((el) => {
        let start = el.slice(0, 1).toUpperCase();
        let end = el.slice(1, el.length);
        let newWord = `${start}${end}`;
        arr.push(newWord);
    })
    return arr.join(" ");
}
console.log(upperEveryWord('привет! я хороший человек'));