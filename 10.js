//Задача 10
/*Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».*/

function changeRegister(str) {
    let arr = str.split('');
    let newArr = arr.map((el) => {
        return el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase();
    });
    return newArr.join('');
}
console.log(changeRegister('КаЖдЫй оХоТнИк'));