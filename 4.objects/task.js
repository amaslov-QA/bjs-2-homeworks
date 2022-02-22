'use strict'


function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks)
  }
}

Student.prototype.addMarks = function (...marks) {
  this.marks = [];
  for (let mark of marks) {
    this.marks.push(mark)
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length
}

Student.prototype.exclude = function (reason) {
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}