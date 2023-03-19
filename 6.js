//Задача 6
/*Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'.*/

function findStrings(string) {
    let regular = /a.b/g;
    return string.match(regular);
}

console.log(findStrings('ahb acb aeb aeeb adcb axeb'))