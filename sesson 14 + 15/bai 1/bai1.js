"use strict";
class Student4 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
        console.log(`Sinh viên ${this.name} đã đăng kí vào khóa học ${course.title}.`);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(lesson) {
        this.lessons.push(lesson);
    }
    addAssessment(assessment) {
        this.assessments.push(assessment);
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
        this.title = title;
    }
}
let instructor = new Instructor(1, "minh thu");
let std = new Student4(1, "hoa");
let course = instructor.createCourse("Phát triển web");
let lesson1 = instructor.createLesson("Giới thiệu về HTML");
let lesson2 = instructor.createLesson("CSS Basics");
let assignment1 = instructor.createAssignment("Bài tập HTML 1");
let assignment2 = instructor.createAssignment("Bài tập CSS 1");
let assessment = instructor.createAssessment("HTML quiz");
course.addLesson(lesson1);
course.addLesson(lesson2);
lesson1.addAssignment(assignment1);
lesson2.addAssignment(assignment2);
course.addAssessment(assessment);
std.enroll(course);
console.log(std);
console.log(course);
