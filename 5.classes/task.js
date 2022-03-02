'use strict'
class PrintEditionItem {
  constructor(name, releaseDate, pageCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pageCount = pageCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pageCount) {
    super(...arguments);
    this.type = 'magazine';
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}
class NovelBook extends Book {
  constructor() {
    super(...arguments);
    this.type = 'novel';
  }
}
class FantasticBook extends Book {
  constructor() {
    super(...arguments);
    this.type = 'fantastic';
  }
}
class DetectiveBook extends Book {
  constructor() {
    super(...arguments);
    this.type = 'detective';
  }
}




class Library {
  constructor(name) {
    this.name = name;
    this.books = [];

  }

  addBook(books) {
    if (books.state > 30) {
      this.books.push(books);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find(element => element[type] === value);
    if (result === undefined) {
      return null;
    } else {
      return result;
    }
  }

  giveBookByName(bookName) {
    let result = this.books.find(element => element.name === bookName);
    if (result === undefined) {
      return null;
    } else {
      this.books = this.books.filter(element => element.name !== bookName);
      return result;
    }
  }

}




class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.list = [];
  }

  addMark(mark, subject) {
    if (isNaN(mark) === true || mark <= 0 || mark > 5) {
      return "Ошибка, оценка должна быть числом от 1 до 5";
    } else {
      if (this.list[subject] === undefined) {
        this.list[subject] = [mark];
      } else {
        this.list[subject].push(mark);
      }
    }
  }

  getAverageBySubject(subject) {
    if (this.list[subject] === undefined) {
      return "Несуществующий предмет";
    } else if (this.list[subject].length === 0) {
      return "Нет оценок";
    } else {
      const sum = this.list[subject].reduce((acc, number) => acc + number);
      return (sum / this.list[subject].length);
    }
  }

  getAverage() {
    let sum = 0;
    let lengthSum = 0;
    for (let subject in this.list) {
      sum += this.list[subject].reduce((acc, item) => acc + item);
      lengthSum += this.list[subject].length;
    }
    return sum / lengthSum;
  }
}
