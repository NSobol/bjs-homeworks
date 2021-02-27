"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let P = (percent / (12 * 100));
    let S = parseInt(amount, 10) - parseInt(contribution, 10);
    let times = new Date;
    let day = (date.getTime() - times.getTime()) / (1000 * 3600 * 24); // разница в днях
    let month = 30.4375; // среднее количество дней в месяце
    let n = Math.round(day / month); // считаем месяцы
    let payment = S * (P + P / (((1 + P) ** n) - 1));
    let totalAmount = parseFloat((payment * n).toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (name == "" || typeof (name) == "undefined") {
        name = "Аноним";
    }
    return `Привет, мир! Меня зовут ${name}.`
}
