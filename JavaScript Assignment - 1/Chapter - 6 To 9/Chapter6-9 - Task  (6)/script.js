var subject1 = prompt("Enter Your First Subject Name");
var subject2 = prompt("Enter Your Second Subject Name");
var subject3 = prompt("Enter Your Third Subject Name");
var obtainedMarks1 = prompt("Enter Obtained Marks in" + subject1);
var obtainedMarks2 = prompt("Enter Obtained Marks in" + subject2);
var obtainedMarks3 = prompt("Enter Obtained Marks in" + subject3);
var totalMarks = 100;


document.write(" <b> Subjects "+"\xa0 "+" Total Marks " +"\xa0 "+" Obtained Marks" + "\xa0 " + " Percentage </b> <br> <br>");
document.write(" "+subject1+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+ totalMarks +" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+ obtainedMarks1 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " +  (obtainedMarks1/100)*100 +" &#37; <br>");
document.write(" "+subject2+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+ totalMarks +" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+ obtainedMarks2 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +  (obtainedMarks2/100)*100 +" &#37; <br>");
document.write(" "+subject3+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+ totalMarks +" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+ obtainedMarks3 + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " +  (obtainedMarks3/100)*100 +" &#37; <br>");