"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (percent <= 0 || typeof (percent) === "undefined") {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }
    if (contribution < 0 || typeof (contribution) === "undefined") {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    }
    if (amount <= 0 || typeof (amount) === "undefined") {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }

    let P = (percent / (12 * 100));
    let S = parseInt(amount, 10) - parseInt(contribution, 10);
    let times = new Date;
    let day = (date.getTime() - times.getTime()) / (1000 * 3600 * 24); // разница в днях
    if (day <= 0) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
    }
    let month = 30.4375; // среднее количество дней в месяце
    let n = Math.round(day / month); // считаем месяцы
    let payment = S * (P + P / (((1 + P) ** n) - 1));
    let totalAmount = parseFloat((payment * n).toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    return `Привет, мир! Меня зовут ${(name && name.trim()) || "Аноним"}.`
}
