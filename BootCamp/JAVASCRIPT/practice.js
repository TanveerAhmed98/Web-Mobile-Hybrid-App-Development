// First JavaScript Code
// console.log("Hello World");

// Alert
// alert("Welcome Bro");

// Console.Log
// console.log("Tanveer Ahmed");

// Document.Write
// document.write("Answer is: "+(2+8));

// Variables
// var name = "Tanveer Ahmed";
// console.log("My name is: "+name);

// data types
// var a = "Pakistan";
// var b = 22;
// var c = true;
// var d;
// var e = null;
// console.log(a,b,c,d,e);

// Typeof
// var a = "Tanveer";
// console.log(typeof(a));

// Comment
// This is the way to write comment

// Arithmetic Operators
// var a = 5;
// var b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// Assignment Operators
// var a = 5;
// console.log(a +=5);
// console.log(a -=5);
// console.log(a *=5);
// console.log(a /=5);
// console.log(a %=5);
// console.log(a **=5);

// Increment & Decrement
// var a = 5;
// a++;
// console.log(a);
// a--;
// console.log(a);

// String Concatenation
// var a = "Tanveer";
// var b = "Ahmed";
// var c = a+" "+b;
// console.log("My name is: "+c);

// Prompt
// var question = "What is your name";
// var name = prompt(question);
// console.log("Your name is: "+name);

// String to Number
// var gas_bill = prompt("Enter Your Gas Bill");
// var electricity_bill = prompt("Enter Your Electricity Bill");
// var total_bill = Number(gas_bill)+Number(electricity_bill);
// console.log("Your Percentage is: "+total_bill);

// Comparison Operators
// var a=3;
// console.log(a==6);
// console.log(a===6);
// console.log(a!=6);
// console.log(a!==6);
// console.log(a>6);
// console.log(a<6);
// console.log(a>=6);
// console.log(a<=6);

// Logical Operators
// var a = 50;
// var b = a>40 && a<60;
// console.log(b);
// var b = a>40 || a<45;
// console.log(b);
// var b = a>40;
// console.log(!b);
// console.log(!!b);

// If-Else
// var score = prompt("What is your score");
// Number(score);
// if (score > 70){
//      console.log("Your grade is A");
// }else if(score <70 && score >34){
//      console.log("Your grade is not A");
// }else if(score<33){
//     console.log(" You are fail");
// }else{
//     console.log("your grade is unknown");
// }

// For Loop
// var num = prompt("Please enter the number to print table");
// for (var i=1;i<=10;i++){
//    console.log(num*i);
// }

// Break & Continue
// for (var i=1;i<6;i++){
//    if(i == 4){
//     continue;
// }
// console.log(i);
// }
// for (var i=1;i<6;i++){
//     if(i == 4){
//      break;
//  }
//  console.log(i);
//  }

// Arrays
// var array_data = ["Tanveer", 45, 44.4];
// console.log(array_data);
// console.log(array_data[1]);
// array_data[3]="Sameer";
// console.log(array_data);
// array_data[2]="Jahangeer";
// console.log(array_data);

// Length Property
// var array_data = ["Sameer", "Jahangeer", "Jaweriya", "Tuqeer"];
// console.log(array_data.length);

// Push & Pop Function
// var array_data = ["Tanveer", "Sameer", "Jahangeer"];
// console.log(array_data);
// array_data.push("Tuqeer");
// console.log(array_data);
// array_data.pop();
// console.log(array_data);

// Shift & Unshift Function
// var array_data=["Tanveer", "Sameer", "Jahangeer"];
// console.log(array_data);
// array_data.shift();
// console.log(array_data);
// array_data.unshift("Tanveer");
// console.log(array_data);

// Splice Function
// var arr_data = ["Tanveer", "Jahangeer", "Sameer"];
// console.log(arr_data);
// arr_data.splice(1,0,"Tuqeer");
// console.log(arr_data);

// Slice Function
// var arr_data = ["Sameer","Jahangeer","Jaweriya","Tuqeer"];
// console.log(arr_data);
// var partial_arr_data = arr_data.slice(1,3);
// console.log(partial_arr_data);

// Tolowercase & Touppercase Function

// var user_input = prompt("What is your name ?");
// if (user_input.toLowerCase() == "sameer"){
//     console.log("Oye Tidde")
// }else{
//     console.log("User is unknown");
// }
// var user_input = prompt("What is your name ?");
// if (user_input.toUpperCase() == "SAMEER"){
//     console.log("Oye Tidde")
// }else{
//     console.log("User is unknown");
// }

// Index.of & Lastindexof
// var data = "to be or not to be"
// console.log(data.lastIndexOf("be"));
// console.log(data.indexOf("be"));

// Charat & Replace
// var data = "to be or not to be";
// console.log(data.charAt(4));
// console.log(data.replace("be", "Be"));

// Split
// var data = "to be or not to be";
// console.log(data.split(" "));

// Math's Round, Ceil & Floor Functions
// var score = 24.6;
// console.log(Math.round(score)); 
// console.log(Math.ceil(score));
// console.log(Math.floor(score));

// Math's Random Number
// var random_number = Math.random();
// var final_number = (random_number*6)+1;
// console.log(Math.floor(final_number));

// Tofixed Function
// var calculation = 5/3;
// console.log(calculation);
// console.log(calculation.toFixed(3));

// Date Object
// var current_date = new Date();
// console.log(current_date);

// Functions
// function add(a,b){
//     return a+b;
// }

// var a = prompt("PLease enter the first number");
// var b = prompt("Please enter the second number");
// console.log("Sum of a & b is: "+add(Number(a),Number(b)));
// var c = prompt("PLease enter the amount of electricity bill");
// var d = prompt("Please enter the amount of gas bill");
// console.log("Total bill to be paid is: "+add(Number(c),Number(d)));

// Switch Statements
// var day = Number(prompt("Please enter the number"));
// switch (day){
//     case 6:
//         console.log("Today is a saturday");
//         break;
//     case 7:
//         console.log("Today is a sunday");
//         break;
//     default:
//         console.log("Looking forward to the weekend");
// }

// While Loop
// var i=1;
// while(i<10){
// console.log(i);
// i++;
// }

// Do While Loop
// var i=1;
//  do{
//  console.log(i);
//  i++;
//  }
//  while(i<10);

