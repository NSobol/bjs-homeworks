function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    "use strict"
    let at = a;
    let bt = b;
    let ct = c;
    let discriminant = (bt ** 2) - (4 * at * ct);
    let x = [];

    //a * (x ** 2) + (b * x) - c = 0

    if (discriminant < 0) {
        x = [];
    } else if (discriminant == 0) {
        x[0] = (((-bt) + Math.sqrt(discriminant)) / (2 * at));
    } else {
        x[0] = (((-bt) + Math.sqrt(discriminant)) / (2 * at));
        x[1] = (((-bt) - Math.sqrt(discriminant)) / (2 * at));
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
        average = 0;
    } else if (numberRatings > 5) {
        arrayRatings = ratings.splice(5);
        getAverage();
    } else {
        getAverage();
    }

    function getAverage() {
        for (let i = 0; i < ratings.length; i++) {
            average += ratings[i];
        }
        average /= ratings.length;
        //console.log(average);
    }
    return average;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let nameUser = name;
    let yearBirth = dateOfBirthday.getFullYear();
    let today = new Date();
    let yearCurrent = today.getFullYear();
    let age = yearCurrent - yearBirth;
    let message;

    if (age > 18) {
        message = `Не желаете ли олд-фэшн, ${nameUser}?`
    } else {
        message = `Сожалею, ${nameUser}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
    return message;
}
