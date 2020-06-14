//Ans1
var a = prompt("Please Enter the number");
document.write("Result: ");
document.write("<br><br>");
document.write("The value of a is:  " + a);
document.write("<br>");
document.write(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
document.write("<br><br>");
document.write("The value of a++ is: " + a);
document.write("<br>");
a++;
document.write("Now the value of a is: " + a);
document.write("<br><br>");
document.write("The value of a++ is: " + a);
document.write("<br>");
a++;
document.write("Now the value of a is: " + a);document.write("<br><br>");
document.write("The value of a-- is: " + a);
document.write("<br>");
a--;
document.write("Now the value of a is: " + a);document.write("<br><br>");
document.write("The value of a-- is: " + a);
document.write("<br>");
a--;
document.write("Now the value of a is: " + a);
document.write("<br><br>");

//Ans2
var v1 = 2, v2 = 1;
var result = 10;
document.write("a is: " + v1);
document.write("<br>");
document.write("b is: " + v2);
document.write("<br>");
--v1;
--v2;
++v2;
v2--;
document.write("Result is: " + (v1 - v2 + v2 + v2) );

//Ans3
prompt("Please give us your feedback");
alert("Thanks for your feedback");
document.write("<br><br>");

//Ans5
var v3 = prompt("Please enter the number");
if (v3 == ""){
document.write("<b>Table of 5" );
document.write("<br><br>");
document.write(5 + "x 1 = " + 5 );
document.write("<br>");
document.write(5 + "x 2 = " + 5 * 2 );
document.write("<br>");
document.write(5 + "x 3 = " + 5 * 3);
document.write("<br>");
document.write(5 + "x 4 = " + 5 * 4);
document.write("<br>");
document.write(5 + "x 5 = " + 5 * 5);
document.write("<br>");
document.write(5 + "x 6 = " + 5 * 6);
document.write("<br>");
document.write(5 + "x 7 = " + 5 * 7);
document.write("<br>");
document.write(5 + "x 8 = " + 5 * 8);
document.write("<br>");
document.write(5 + "x 9 = " + 5 * 9);
document.write("<br>");
document.write(5 + "x 10 = " + 5 * 10);
document.write("<br><br>");
}else {
document.write("<b>Table of </b>" + v3);
document.write("<br><br>");
document.write(v3 + "x 1 = " + v3 );
document.write("<br>");
document.write(v3 + "x 2 = " + v3 * 2 );
document.write("<br>");
document.write(v3 + "x 3 = " + v3 * 3);
document.write("<br>");
document.write(v3 + "x 4 = " + v3 * 4);
document.write("<br>");
document.write(v3 + "x 5 = " + v3 * 5);
document.write("<br>");
document.write(v3 + "x 6 = " + v3 * 6);
document.write("<br>");
document.write(v3 + "x 7 = " + v3 * 7);
document.write("<br>");
document.write(v3 + "x 8 = " + v3 * 8);
document.write("<br>");
document.write(v3 + "x 9 = " + v3 * 9);
document.write("<br>");
document.write(v3 + "x 10 = " + v3 * 10);
document.write("<br><br>");
}

//Ans6
var subject1 = prompt("Please enter your first subject");
var subject2 = prompt("Please enter your second subject");
var subject3 = prompt("Please enter your third subject");
var total_numbers  = 100 ;
var marks_obtained_subject1 = prompt("Please enter your marks in: " + subject1);
var marks_obtained_subject2 = prompt("Please enter your marks in: " + subject2);
var marks_obtained_subject3 = prompt("Please enter your marks in: " + subject3);
