class Student4 {
    id:number;
    name:string;
    enrolledCourses: Course[];
    constructor (id:number,name:string){
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course: Course){
        this.enrolledCourses.push(course);
        console.log(`Sinh viên ${this.name} đã đăng kí vào khóa học ${course.title}.`);
    }
}
class Instructor {
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }
    createCourse(title:string){
        return new Course(title, this);
    }
    createLesson(title:string){
        return new Lesson(title);
    }
    createAssignment(title:string){
        return new Assignment(title);
    }
    createAssessment(title:string){
        return new Assessment(title);
    }
}
class Course{
    title:string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: Assessment[];
    constructor(title:string, instructor: Instructor){
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(lesson:Lesson){
        this.lessons.push(lesson);
    }
    addAssessment(assessment:Assessment){
        this.assessments.push(assessment);
    }
}
class Lesson {
    title:string;
    assignments: Assignment[];
    constructor(title:string){
        this.title = title;
        this.assignments = [];
    }
    addAssignment(assignment:Assignment){
        this.assignments.push(assignment);
    }
}
class Assignment{
    title:string;
    constructor(title:string){
        this.title = title;
    }
}
class Assessment {
    title:string;
    constructor(title:string){
        this.title = title;
    }
}
let instructor = new Instructor(1,"minh thu");
let std = new Student4(1,"hoa");

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