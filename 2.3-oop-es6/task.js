"use strict"
//Задача 1.
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
        return this.state;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}
// Задача 2.

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.book = book;
        for (let i = 0; i < this.books.length; i++) {
            if (this._state > 30) {
                this.books[i].push(this.book);
            }
        }
    }


    findBookBy(type, value) {
        this.type = type;
        this.value = value;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].type === value) {
                return book;
            } else {
                return null;
            }
        }
    }

    giveBookByName(bookName) {
        this.bookName = bookName;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookName === bookName) {
                this.books.splice(books[i], 1);
                return this.book;
            } else {
                return null;
            }
        }
    }
}

//задача 3.
class StudentLog {
    constructor(name) {
        this.name = name;
        this.journal = {};
        this.marks = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!(subject in this.journal)) {
            this.journal[subject] = [];
        }

        if (grade >= 1 && grade <= 5) {
            this.journal[subject].push(grade);
        } else {
            console.log(`Поставлена неверная оценка ${grade} по предмету ${subject}. Принимаются только оценки от 1 до 5.`);
        }

        return this.journal[subject].length;
    }

    getAverageBySubject(subject) { // средняя по предмету
        let marks;
        if (subject in this.journal) {
            marks = this.journal[subject];
        } else if (!(subject in this.journal)) {
            return 0;
        }
        let numberRatings = this.journal[subject].length;
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

    getTotalAverage() {
        let scoreAverage = {};
        let marksAverage = [];
        for (let prop in this.journal) {
            scoreAverage[prop] = this.getAverageBySubject(prop);
            marksAverage.push(this.getAverageBySubject(prop));
        }
        let result = 0;
        let grade = function () {
            for (let i = 0; i < marksAverage.length; i++) {
                result += marksAverage[i];
            }
            result /= marksAverage.length;
            return result;
        }
        scoreAverage.average = grade();
        return scoreAverage.average;
    }
}

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage());
