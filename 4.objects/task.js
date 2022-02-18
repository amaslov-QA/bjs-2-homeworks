'use strict'


function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
if (this.marks === undefined) {
  this.marks = [];
  this.marks.push(mark)
}
 else {
  this.marks.push(mark)
}
}

Student.prototype.addMarks = function (...marks) {
this.marks = [];
 for (let mark of marks) {
    this.marks.push(mark)
 }
}

Student.prototype.getAverage = function (...marks) {
let counter = 0;
let sum = 0; 
for (let mark of marks) {
  sum += mark;
  counter++;
} 
return sum/counter
}

Student.prototype.exclude = function (reason) {
delete this.subjectName;
delete this.marks;
this.excluded = reason;
}