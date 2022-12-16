var courses = ["C++", "Java", "Javascript"];

function addCourse(cousrses, course){
    courses.push(course);
}

addCourse(courses, "Go");
console.log(courses);

function getFirstElement(courses){
    return courses[0];
}

var firstElement = getFirstElement(courses);
console.log(firstElement);

function joinArr(course, s){
    var ans = "";
    var n = courses.length;
    for (var i = 0; i < n; i++){
        ans += courses[i];
        if(i != n - 1) ans += s;
    }
    return ans;
}

var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ")

console.log(result1);
console.log(result2);

