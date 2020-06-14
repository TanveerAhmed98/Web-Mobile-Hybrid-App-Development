//Ans1
var city = prompt("PLEASE ENTER YOUR CITY NAME IN LOWERCASE");
if (city == "karachi"){
         alert("Welcome to the city of lights");
}else{
    alert("Welcome");
}

//Ans2
var gender = prompt("PLEASE ENTER YOUR GENDER IN LOWERCASE");
if (gender == "male"){
         alert("Welcome Sir");
}else{
    alert("Welcome Madam");
}

//Ans3
var traffic_light = prompt("PLEASE ENTER COLOR OF TRAFFIC LIGHT IN LOWERCASE");
if (traffic_light== "red"){
         alert("please stop");
}else if (traffic_light == "yellow"){
    alert("Please start");
}else {
    alert("You can go");
}

//Ans4
var fuel = prompt("PLEASE ENTER REMAINING QUANTITY OF FUEL IN LOWERCASE");
if (fuel < 0.25){
         alert("Please refuel the car");
}else{
    alert("Fuel is ok");
}

//Ans6
var total_marks = prompt("ENTER YOUR TOTAL MARKS");
var marks_obtained = prompt("ENTER THE OBTAINED MARKS");
var Percentage = marks_obtained/total_marks*100;
document.write("<b>Marksheet</b>");
document.write("<br><br>");
document.write("Total Numbers: " + total_marks);
document.write("<br>");
document.write("Marks Obtained: "+ marks_obtained);
document.write("<br>");
document.write("Percentage: " + Percentage + "%");
document.write("<br>");
if (Percentage <= 40 ){
   document.write("Grade: D");
}else if (Percentage >= 50){
   document.write("Grade: C");
}else if (Percentage >= 60){
    document.write("Grade: B");
 }else if (Percentage >= 70){
    document.write("Grade: A");
 }else if (Percentage >= 80){
    document.write("Grade: A+");
 }else if (Percentage >= 90){
    document.write("Grade: A+1");
 }else{
     document.write("Fail");
 }
document.write("<br>");
if (Percentage <= 40 ){
    document.write("Remarks: Poor");
 }else if (Percentage >= 50){
    document.write("Remarks: Need Improvement");
 }else if (Percentage >= 60){
     document.write("Remarks: Good");
  }else if (Percentage >= 70){
     document.write("Remarks: Excellent");
  }else if (Percentage >= 80){
     document.write("Remarks: Brilliant");
  }else if (Percentage >= 90){
     document.write("Remarks: Well Done");
  }else{
      document.write("Remarks: Dissapointed");
  }
  document.write("<br><br>");

//Ans7
var random_number = Math.floor(Math.random() * 10);
var user_input = prompt("Please Enter Your Guess");
if (user_input == random_number){
    document.write("You guess the write number");
}else{
    document.write("You miss the number");
}
document.write("<br><br>");

//Ans8
var check_number = prompt("Please enter the number for division");
if (check_number/3 == 0){
    document.write("Number is divisible by 3");
}else{
    document.write("Number is not divisible by 3");
}
document.write("<br><br>");

//Ans9
var check_number = prompt("Please enter the number for checking odd or even");
if (check_number/2 == 0){
    document.write("Number is even");
}else{
    document.write("Number is odd");
}
document.write("<br><br>");

//Ans10
var temperature = prompt("Please enter the temperature");
if (temperature > 40){
    document.write("It's too hot outside");
}else if (temperature > 30){
    document.write("Weather is normal today");
}else if (temperature > 20){
    document.write("Weather is cool");
}else if (temperature > 10){
    document.write("Weather is so cool");
}
document.write("<br><br>");

//Ans11
var operation_number1 = prompt("Please Enter the number for calculation");
var operation_numebr2 = prompt("Please Enter the second number for calculation");
var operation = prompt("Please Enter the symbol of  calculation required");
if (operation == "+"){
    document.write("Result is: "+(operation_number1+operation_numebr2));
}else if (operation == "-"){
    document.write("Result is: "+(operation_number1-operation_numebr2));
}else if (operation == "*"){
    document.write("Result is: "+(operation_number1*operation_numebr2));
}else if (operation == "/"){
    document.write("Result is: "+(operation_number1/operation_numebr2));
}else if (operation == "%"){
    document.write("Result is: "+(operation_number1%operation_numebr2));
}
