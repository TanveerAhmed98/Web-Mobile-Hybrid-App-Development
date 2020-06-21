//Ans1
var first_name = prompt("Please enter your first name");
var last_name = prompt("Please enter your last name");
var full_name = first_name+" "+last_name;
document.write("Welcome "+full_name);
document.write("<br><br>");

//Ans2
var favourite_phone = prompt("Please enter your favourite mobile phone model");
document.write("My favourite phone is : "+favourite_phone);
document.write("<br>");
document.write("Length of string is : "+favourite_phone.length);
document.write("<br><br>");

//Ans3
var word = "Pakistani";
document.write("Index of 'n' is : " + word.indexOf("n"));
document.write("<br><br>");

//Ans4
var word2 = "Hello World";
document.write("String : " + word2);
document.write("<br>");
document.write("Last index of 'l' is : "+word2.lastIndexOf("l"));
document.write("<br><br>");

//Ans5
var word3 = "Pakistani";
document.write("String : " + word3);
document.write("<br>");
document.write("Character at index 3 is : "+word3[3]);
document.write("<br><br>");

//Ans6
var first_name = prompt("Please enter your first name");
var last_name = prompt("Please enter your last name");
var full_name = first_name.concat(last_name);
document.write("Welcome "+full_name);
document.write("<br><br>");

//Ans7
var city = "Hyderabad";
document.write("City : "+city);
var city2 = city.replace("Hyder","Islam");
document.write("<br>");
document.write("After replacement : " + city2);
document.write("<br><br>");

//Ans8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Message : "+message);
var message = message.replace(/and/g,"&");
document.write("<br>");
document.write("After replacement : " + message);
document.write("<br><br>");

//Ans9
var number = "472";
document.write("Value : " + number);
document.write("<br>");
document.write("Type : "+typeof number);
document.write("<br>");
document.write("Value : " + number);
document.write("<br>");
var updated_datatype = parseInt(number);
document.write("Type : "+typeof updated_datatype);
document.write("<br><br>");

//Ans10
var user_input = prompt("Please give your input");
document.write("User Input : " + user_input);
document.write("<br>");
document.write("Upper Case : " + user_input.toUpperCase());
document.write("<br><br>");

//Ans11
var user_input2 = prompt("Please give your input again");
document.write("User Input : " + user_input2);
document.write("<br>");
document.write("Title Case : " + user_input2.charAt(0).toUpperCase() + user_input2.slice(1));
document.write("<br><br>");

//Ans12
var number2 = 35.36;
document.write("Number : " + number2);
document.write("<br>");
var result = number2.toString().replace(".","");
document.write("Result : "+ result);
document.write("<br><br>");

//Ans13
var user_input3 = prompt("Please enter the your name");
if (user_input3.includes("@") || user_input3.includes(".") || user_input3.includes(",") || user_input3.includes("!")){
    document.write("Please enter the valid name");
}else{
    document.write("Thanks for your input");
}
document.write("<br><br>");

//Ans14
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var message2 = prompt("Welcome ABC bakery. What do you want to order");
var message3 = message2.toLowerCase();
if (message3 == "cake"){
       document.write(message3 + " is available at index 0 in our bakery");
}else if (message3 == "apple pie"){
    document.write(message3 + " is available at index 1 in our bakery");
}else if (message3 == "cookie"){
    document.write(message3 + " is available at index 2 in our bakery");
}else if (message3 == "chips"){
    document.write(message3 + " is available at index 3 in our bakery");
}else if (message3 == "patties"){
    document.write(message3 + " is available at index 4 in our bakery");
}else {
    document.write("Sorry "+message3+" is not available in our bakery");
}

//Ans15
var password = prompt("Please enter your password");
if (password.length >= 6){
     document.write("Password is valid");
}else {
    document.write("Password is not a valid one");
}









