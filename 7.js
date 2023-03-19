//Задача 7(регулярка)
/*Определите, что переданная строка является емэйлом. Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru,my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru.*/

function checkEmail(string) {
    let regular = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
    if (string.match(regular)) {
        return 'Это e-mail'
    } else {
        return 'Это не e-mail'
    };
}
console.log(checkEmail('my_mail@mail.ru'))