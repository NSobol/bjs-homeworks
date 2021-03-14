"use scrict"

function parseCount(resume) {
    let typeNumber = Number.parseInt(resume);
    let valid;
    if (Number.isNaN(typeNumber) === true) {
        valid = "Ошибка";
        throw new Error("Невалидное значение");
    } else {
        valid = typeNumber;
    }
    return valid;
}

function validateCount(essence) {
    try {
        parseCount(essence);
        return parseCount(essence);
    } catch (e) {
        return e;
    }
}

//Задача 2.

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        let P = this.a + this.b + this.c;
        return P;
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    const myTriangle = new Triangle(a, b, c);
    try {
        return myTriangle;
    } catch (e) {
        return "Ошибка! Треугольник не существует!";
    }
}
