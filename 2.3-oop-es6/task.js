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
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].type === value) {
                return book;
            }
        }
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].type === value) {
                this.books.splice(books[i], 1);
            }
        }
    }
}

//задача 3.
class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }



    addGrade(grade, subject) {
        let score = {};
        let marks = [];
        this.grade = grade;
        this.subject = subject;
        score.subject = this.subject;
        if (this.subject in score) {
            marks.push(this.grade);
        } else {
            score.subject;
        }

        getAverageBySubject(subject) {

        }

        getTotalAverage() {

        }
    }
