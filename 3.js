//Задача 3
/*Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'*/

function getLetters(str, letters) {
    let array = str.split(" ");

    return array.find((el) => {
        return el === letters;
    })
}
console.log(getLetters('aaa bbb ccc', 'bbb'));