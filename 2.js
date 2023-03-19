//Задача 2
/*Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'*/

function replaceSymbols(str) {
    return str.replaceAll('@', '!');
}
console.log(replaceSymbols('aaa@bbb@ccc'));