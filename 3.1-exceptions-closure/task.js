"use scrict"

function parseCount(resume) {
    let typeNumber = Number.parseInt(resume);
    if (Number.isNaN(typeNumber)) {
        throw new Error("Невалидное значение");
    }
    return typeNumber;
}

function validateCount(essence) {
    try {
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
        if ((a + b) < c || (a + c) < b || (c + b) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = (this.getPerimeter()) / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return myTriangle = new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }
}
