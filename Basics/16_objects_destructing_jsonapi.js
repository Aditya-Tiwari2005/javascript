const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
//to extract or access anything from the course we can do this

// course.courseInstructor
//better way to do this
// const {courseInstructor}=course // in this like name is very big so we can give a name to it also
// console.log(courseInstructor);
const {courseInstructor:Instructor}=course
console.log(Instructor);

// json api
// {
//     "name" : "Aditya"
// }
// [
//     {},
//     {}
// ]