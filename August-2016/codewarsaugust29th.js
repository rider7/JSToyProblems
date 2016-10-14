// Point Reflection
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the points X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1.
//

function symmetricPoints(p, q){
var p1 = [];
p1.push(q[0] - p[0] + q[0]);
p1.push(q[1] - p[1] + q[1]);
return p1;
}
