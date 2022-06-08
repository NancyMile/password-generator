// WRITE YOUR CODE HERE
/** set the array students */
var students = ['Angy','karol','Cesar'];
/**  welcome  each student */
console.log("tota; students: "+students.length);
console.log("Welcome to the class: "+students[0]);
console.log("Welcome to the class: "+students[1]);
console.log("Welcome to the class: "+students[2]);
/** replace the name of the first student */
students[0]='Carlos';
/** verify  the name  has been replaced */
if(students[0]=='Carlos'){
    console.log(students[0]+" is in class");
}