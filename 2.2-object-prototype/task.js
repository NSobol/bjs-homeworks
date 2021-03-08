"use strict"

//Задача1.

String.prototype.isPalindrome = function isPalindrome() {
    let str = this.toLowerCase();
    let str1 = str.split(" ").join('');
    let str2 = str1.split("").reverse().join('');
    return str1 === str2;
}

function getAverageMark(marks) {
    let numberRatings = marks.length;
    let average = 0;
    if (numberRatings == 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        average += marks[i];
    }
    average /= marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = (new Date).getTime();
    let date = Date.parse(birthday);
    let diff = Math.round((now - date) / (1000 * 3600 * 24));
    let averageMonth = 30.44;
    let age = Math.floor(diff / (averageMonth * 12));
    // считаем количество лет
    if (age >= 18) {
        return age;
    }
}
