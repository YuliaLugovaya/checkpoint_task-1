//Задача 9
/*Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.*/

function deleteRepeat(string) {
    let lastWord = '';
    return string.replace(/([^\s]+)(\s|$)/g, function (match, word, repeat) {
        if (lastWord === word) {
            return '';
        } else {
            return (lastWord = word) + repeat;
        }
    });
}
console.log(deleteRepeat('dsf xxx xxx xxx sd'));