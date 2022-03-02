'use strict'

function parseCount(value) {
    if (Number.isNaN(Number.parseInt(value)) === true) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseInt(value);
    }
}
function validateCount(checkValue) {
    try {
        return parseCount(checkValue);
    }
    catch (error) {
        return error;
    }
}



class Triangle {

    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        this.triangleCheck();
    }

    triangleCheck() {
        if ((this.sideA + this.sideB) < this.sideC || (this.sideB + this.sideC) < this.sideA || (this.sideA + this.sideC) < this.sideB) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        const p = 0.5 * (this.sideA + this.sideB + this.sideC);
        const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    let getArea = function () {
        return "Ошибка! Треугольник не существует";
    }
    let getPerimeter = function () {
        return "Ошибка! Треугольник не существует";
    }

    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    }

    catch (e) {
        return { getArea, getPerimeter };
    }
}