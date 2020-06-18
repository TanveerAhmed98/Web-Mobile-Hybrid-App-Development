//Ans1
var myarray1 = [];

//Ans2
var fruits = new Array( );

//Ans3
var string_array = ["Tanveer","Jahangeer","Sameer"];

//Ans4
var numbers_array = [12,23,24,56,78];

//Ans5
var bool_array = [true,false];

//Ans6
var mixed_array = ["John", "Doe", 46, true, 47.6];

//Ans7
var qualifications = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"];
document.write("<b>Qualifications : </b>");
document.write("<br><br>");
document.write("1 ) "+qualifications[0]);
document.write("<br>");
document.write("2 ) "+qualifications[1]);
document.write("<br>");
document.write("3 ) "+qualifications[2]);
document.write("<br>");
document.write("4 ) "+qualifications[3]);
document.write("<br>");
document.write("5 ) "+qualifications[4]);
document.write("<br>");
document.write("6 ) "+qualifications[5]);
document.write("<br>");
document.write("7 ) "+qualifications[6]);
document.write("<br>");
document.write("8 ) "+qualifications[7]);
document.write("<br><br>");

//Ans8
var student_name = ["Tanveer" , "Sameer" , "Jaweriya"];
var student_score = [300 , 400 , 450];
var total_score = 500;
document.write("Score of "+student_name[0]+" is "+student_score[0] + " & Percentage is: "+student_score[0]/total_score*100)+" .";
document.write("<br>");
document.write("Score of "+student_name[1]+" is "+student_score[1] + " & Percentage is: "+student_score[1]/total_score*100)+" .";
document.write("<br>");
document.write("Score of "+student_name[2]+" is "+student_score[2] + " & Percentage is: "+student_score[2]/total_score*100)+" .";
document.write("<br><br>");

//Ans9
var colours = [" Blue" , " Green" , " Red" ," Yellow"];
document.write(colours);
var colour1 = prompt("Which colour you want to add in beginning of the array") ;
colours.unshift(" "+colour1);
document.write("<br>");
document.write(colours); 
var colour2 = prompt("Which colour you want to add in the end of the array") ;
colours.push(" "+colour2);
document.write("<br>");
document.write(colours); 
colours.unshift(" Violet" , " Purple");
document.write("<br>");
document.write(colours); 
document.write("<br>");
colours.shift();
document.write(colours);
document.write("<br>");
colours.pop();
document.write(colours);
document.write("<br>");
var message1 = prompt("Which colour do you want to add at a desired position");
var message2 = prompt("At wich position do you want to add colour");
colours.splice(message2, 0, message1);
document.write(colours);
document.write("<br>");
var message3 = prompt("At which point do you want to delete colours. ");
var message4 = prompt("How many colours do you want to delete");
colours.splice(message3, message4);
document.write(colours);
document.write("<br><br>");

//Ans10
var scores_of_students = [80,70,54,47,38];
document.write("Scores of Students : " + scores_of_students);
document.write("<br>");
scores_of_students.sort();
document.write("Ordered scores of students : "+ scores_of_students);
document.write("<br><br>");

//Ans11
var cities = ["Karachi" , " Islamabad", " Lahore"];
document.write("Cities List : ");
document.write("<br>");
document.write(cities);
document.write("<br><br>");
document.write("Selected Cities List : ");
document.write("<br>");
document.write(cities[1] +" , "+ cities[2]);
document.write("<br><br>");

//Ans12
var array_joint = ["This" , "is" , "my" , "cat"];
array_joint.join();
document.write( "Array : " + "<br>" + array_joint);
document.write("<br><br>");
document.write( "String : " + "<br>" + array_joint.join(" "));
document.write("<br><br>");

//Ans13
var devices = ["Keyboard" , " Mouse" , " Printer" , " Monitor"];
document.write(" Devices : " + "<br>" + devices);
document.write("<br><br>");
document.write(" Out : " + "<br>" + devices[0] + "<br>");
document.write(" Out : " + "<br>" + devices[1] + "<br>");
document.write(" Out : " + "<br>" + devices[2] + "<br>");
document.write(" Out : " + "<br>" + devices[3]);

//Ans14
document.write("<br><br>");
var devices = ["Keyboard" , " Mouse" , " Printer" , " Monitor"];
document.write(" Devices : " + "<br>" + devices);
document.write("<br><br>");
document.write(" Out : " + "<br>" + devices[3] + "<br>");
document.write(" Out : " + "<br>" + devices[2] + "<br>");
document.write(" Out : " + "<br>" + devices[1] + "<br>");
document.write(" Out : " + "<br>" + devices[0]);
document.write("<br><br>");

//Ans15
var mobile_brands = ["Apple", " Samsung", " Motorola", " Nokia", " Sony", " Haier"];
document.write("<select>")
for (var i = 0;i < mobile_brands.length;i++){
    document.write("<option>"+ mobile_brands[i]+"</option>")
}
document.write("</select>")



