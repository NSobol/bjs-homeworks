"use strict"
// Задача 1.
function getSolutions(a, b, c) {
    let D = (b ** 2) - (4 * a * c);
    if (D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = (-b) / (2 * a);
        return {
            D,
            roots: [x1]
        };
    } else if (D > 0) {
        let x1 = (((-b) + Math.sqrt(D)) / (2 * a));
        let x2 = (((-b) - Math.sqrt(D)) / (2 * a));
        return {
            D,
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    if (result.D < 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значене дискриминанта: ${result.D}\n Уравнение не имеет вещестенных корней`);
    } else if (result.D === 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значене дискриминанта: ${result.D}\n Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} \n Значене дискриминанта: ${result.D}\n Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]} `);
    }
}

//Задача 2.
function getAverageScore(data) {
    let scoreAverage = {};
    let marksAverage = [];
    for (let prop in data) {
        scoreAverage[prop] = getAverageMark(data[prop]);
        marksAverage.push(getAverageMark(data[prop]));
    }
    scoreAverage.average = getAverageMark(marksAverage);
    return scoreAverage;
}

function getAverageMark(marks) {
    let numberRatings = marks.length;
    let averageSection = 0;
    if (numberRatings == 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        averageSection += marks[i];
    }
    averageSection /= marks.length;
    return averageSection;
}

//задача 3.
function getPersonData(secretData) {
    let person = {};
    person.firstName = getDecodedValue(secretData["aaa"]);
    person.lastName = getDecodedValue(secretData["bbb"]);
    return person;
}

function getDecodedValue(secret) {
    let names;
    if (secret == 0) {
        names = "Родриго";
    } else {
        names = "Эмильо";
    }
    return names;
}
