"use strict"

function getResult(a, b, c) {
    // код для задачи №1 писать здесь

    let discriminant = (b ** 2) - (4 * a * c);
    let x = [];

    if (discriminant == 0) {
        x[0] = (((-b) + Math.sqrt(discriminant)) / (2 * a));
    } else if (discriminant > 0) {
        x[0] = (((-b) + Math.sqrt(discriminant)) / (2 * a));
        x[1] = (((-b) - Math.sqrt(discriminant)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let ratings = marks;
    let numberRatings = ratings.length;
    let average = 0;
    let arrayRatings = [];

    if (numberRatings == 0) {
        return 0;
    }

    arrayRatings = ratings.splice(5);
    for (let i = 0; i < ratings.length; i++) {
        average += ratings[i];
    }
    average /= ratings.length;
    return average;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let message;
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18) {
        message = `Не желаете ли олд-фэшн, ${name}?`
    } else {
        message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
    return message;
}
