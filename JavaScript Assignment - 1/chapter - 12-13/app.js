//Ans1
var v1 = prompt("Please give your input to check input type");
V1 = v1.charCodeAt(0);
if(V1 >= 65 && V1 <= 92){
     document.write("It is a capital letter");
}else if(V1 >= 97 && V1 <= 122){
    document.write("It is a small letter");
}else if (V1 >= 49 && V1 <=57){
        document.write("It is a Number");
}else{
    document.write("it is unknown input");
}
document.write("<br><br>");

//Ans2
var v2 = prompt("Please Enter the first number");
var v3 = prompt("Please Enter the second number"); 
if (v2 > v3){
   document.write("First Number is Greater");
} else if ( v3 > v2){
    document.write("Second Number is Greater");
}else if (v2 == v3){
   document.write("Both Numbers are Equal");
}
document.write("<br><br>");

//Ans3
var v4 = prompt("Please Enter the Number To check whether it is positive or negative"); 
if (v4 > 0){
   document.write("The Number is Positive");
} else if ( v4 < 0){
    document.write("The Number is Negative");
}else if (v2 == 0){
   document.write("The Number is equal to Zero");
}
document.write("<br><br>");

//Ans4
var v5 = prompt("Please Enter the variable To check whether it is Vowel or Not"); 
if (v5 == "a" && v5 == "e" && v5 == "i" && v5 == "o" && v5 == "u" ){
   document.write("The variable is vowel");
}else {
   document.write("The variable is not vowel");
}
document.write("<br><br>");

//Ans5
var v6 = "mypassword";
var v7 = prompt ("Enter Your Password");
if (v7 == v6 ) {
      document.write("Correct The password you entered matches the original password");
} else {
    document.write("Incorrect password");
}
document.write("<br><br>");

//Ans6
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}else {
    greeting = "Good evening"; 
}
document.write(greeting);
document.write("<br><br>");

//Ans7
var v8 = prompt("Enter the time in 24/7 format");
if (v8 == 1){
    document.write("Time is 1:00 AM");
}else if (v8 == 2){
    document.write("Time is 2:00 AM");
}else if (v8 == 3){
    document.write("Time is 3:00 AM");
}else if (v8 == 4){
    document.write("Time is 4:00 AM");
}else if (v8 == 5){
    document.write("Time is 5:00 AM");
}else if (v8 == 6){
    document.write("Time is 6:00 AM");
}else if (v8 == 7){
    document.write("Time is 7:00 AM");
}else if (v8 == 8){
    document.write("Time is 8:00 AM");
}else if (v8 == 9){
    document.write("Time is 9:00 AM");
}else if (v8 == 10){
    document.write("Time is 10:00 AM");
}else if (v8 == 11){
    document.write("Time is 11:00 AM");
}else if (v8 == 12){
    document.write("Time is 12:00 PM");
}else if (v8 == 12){
    document.write("Time is 12:00 PM");
}else if (v8 == 13){
    document.write("Time is 1:00 PM");
}else if (v8 == 14){
    document.write("Time is 2:00 PM");
}else if (v8 == 15){
    document.write("Time is 3:00 PM");
}else if (v8 == 16){
    document.write("Time is 4:00 PM");
}else if (v8 == 17){
    document.write("Time is 5:00 PM");
}else if (v8 == 18){
    document.write("Time is 6:00 PM");
}else if (v8 == 19){
    document.write("Time is 7:00 PM");
}else if (v8 == 20){
    document.write("Time is 8:00 PM");
}else if (v8 == 21){
    document.write("Time is 9:00 PM");
}else if (v8 == 22){
    document.write("Time is 10:00 PM");
}else if (v8 == 23){
    document.write("Time is 11:00 PM");
}else if (v8 == 24){
    document.write("Time is 12:00 AM");
}else{
    document.write("Invalid Time");
}




















