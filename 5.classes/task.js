'use strict'
class PrintEditionItem {
  constructor(name, releaseDate, pageCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pageCount = pageCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState < 0) {
      this.state = 0;
    } else if (newState > 100) {
      this.state = 100;
    } else {
      this.state = newState;
    }
  }
  get state() {
    return this.state
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
}
addBook(books) {
  if (books.state > 30) {
    this.books.push(books);
  }
}

findBookBy(type, value) {
  let result = this.books.find(Element => Element[type] === value);
  if (result === undefined) {
    return null;
  } else {
    return result;
  }
}

giveBookByName(bookName) {
  let result = this.books.find(Element => Element.name === bookName);
  if (result === undefined) {
    return null;
  } else {
    this.books = this.books.filter(Element => Element.name !== bookName);
    return result;
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
      this.subject = subject;
      this.list.push(mark);
      if (this.marks === undefined) {
        this.marks = [mark];
      } else {
        this.marks.push(mark);
      }
      return this.subject, this.marks;
    }
  }

  getAverageBySubject(subject) {
    if (this.marks === undefined || this.marks === []) {
      return "Нет оценок";
    } else if (subject !== this.subject) {
      return "Несуществующий предмет";
    } else {
      const sum = this.marks.reduce((acc, number) => acc + number);
      return (sum / this.marks.length);
    }
  }

  getAverage() {
    const sum = this.list.reduce((acc, number) => acc + number);
    return (sum / this.list.length);
  }
}
