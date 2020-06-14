//Ans1
var v1 = 5;
var v2 = 5;
var v3 = v1+v2;
document.write("The sum of "+v1+ " & " + v2+ " is "+v3);
document.write("<br><br>");

//Ans2
var v1 = 5;
var v2 = 5;
var v3 = v1-v2;
document.write("The subtraction of "+v1+ " & " + v2+ " is "+v3);
document.write("<br>");
var v1 = 5;
var v2 = 5;
var v3 = v1*v2;
document.write("The product of "+v1+ " & " + v2+ " is "+v3);
document.write("<br>");
var v1 = 5;
var v2 = 5;
var v3 = v1/v2;
document.write("The division of "+v1+ " & " + v2+ " is "+v3);
document.write("<br>");
var v1 = 5;
var v2 = 5;
var v3 = v1%v2;
document.write("The modulus of "+v1+ " & " + v2+ " is "+v3);
document.write("<br><br>");

//Ans3
var v4;
document.write("The Value of a variable is undefined");
document.write("<br>");
v4 = 5;
document.write("Initial Value: "+v4);
document.write("<br>");
v4++;
document.write("Value after increment is: "+v4);
document.write("<br>");
v5 = v4 + 7;
document.write("Value after addition is: "+v5);
document.write("<br>");
v5--;
document.write("Value after decrement is: "+v5);
document.write("<br>");
v6 = 3 / v5;
document.write("The reminder is: "+v6);
document.write("<br><br>");

//Ans4
var ticket_price = 600;
var total_cost = ticket_price * 5;
document.write("Total cost for buying 5 tickets for a movie is: "+total_cost + " PKR");
document.write("<br><br>");

//Ans5
document.write("<b>Table of 4</b>");
document.write("<br><br>");
var table = 4;
document.write(table + "x 1 = " + table );
document.write("<br>");
document.write(table + "x 2 = " + table * 2 );
document.write("<br>");
document.write(table + "x 3 = " + table * 3);
document.write("<br>");
document.write(table + "x 4 = " + table * 4);
document.write("<br>");
document.write(table + "x 5 = " + table * 5);
document.write("<br>");
document.write(table + "x 6 = " + table * 6);
document.write("<br>");
document.write(table + "x 7 = " + table * 7);
document.write("<br>");
document.write(table + "x 8 = " + table * 8);
document.write("<br>");
document.write(table + "x 9 = " + table * 9);
document.write("<br>");
document.write(table + "x 10 = " + table * 10);
document.write("<br><br>");

//Ans6
var centigrate = 25;
var farenhite  =70;
document.write("25C is: " +(farenhite-32)*5/9 +"F");
document.write("<br>");
document.write("70F is: " +(farenhite * 5/9) +32+"F");
document.write("<br><br>");

//Ans7
var item1_price = 650;
var quantity_itmem1 = 3;
var item2_price = 100;
var quantity_item2 = 7;
var shipping_charges = "100";
var total_cost = (item1_price*quantity_itmem1 )+ (item2_price*quantity_item2) + shipping_charges;
document.write("<b>Shopping Cart</b>");
document.write("<br><br>");
document.write("Price of item 1 is: "+ item1_price);
document.write("<br>");
document.write("Quantity of item 1 is: " + quantity_itmem1);
document.write("<br>");
document.write("Price of item 2 is: "+ item2_price);
document.write("<br>");
document.write("Quantity of item 2 is: "+ quantity_item2);
document.write("<br>");
document.write("Shipping Charges: "+ shipping_charges);
document.write("<br><br>");
document.write("Total cost of your order is: "+ total_cost);
document.write("<br><br>");

//Ans8
var Total_Marks = 980;
var Obtained_Marks = 804;
var Percentage = Obtained_Marks/Total_Marks*100;
document.write("<b>MarkSheet</b>");
document.write("<br><br>");
document.write("Total Marks: "+ Total_Marks);
document.write("<br>");
document.write("Marks Obtained: " + Obtained_Marks);
document.write("<br>");
document.write("Percentage is: "+ Percentage + "%");
document.write("<br><br>");

//Ans9
var us_dollar = 10 * 104.80;
var saudi_riyals = 25 * 28;
document.write("<b>Currency in PKR</b>");
document.write("<br><br>");
document.write("Total currency in PKR is: " + us_dollar + saudi_riyals);
document.write("<br><br>");

//Ans10
var number = 10;
var calculations = number+5 + number*10 + number/10;
document.write("The result of calculation is: " + calculations);
document.write("<br><br>");

//Ans11
var current_year = 2020;
var birth_year = 1998;
document.write("<b>Age Calculator</b>");
document.write("<br><br>");
document.write("Your Age is: " + (current_year-birth_year));
document.write("<br><br>");


//Ans12
var radius_of_circle = 20;
var circumference_of_corcle = (2*3.142*radius_of_circle);
var area_of_a_circle = 3.142*radius_of_circle*2;
document.write("<b>The Geometrizer</b>");
document.write("<br><br>");
document.write("Radius of a circle is: " + radius_of_circle);
document.write("<br>");
document.write("Circumference of a circle is: " + circumference_of_corcle);
document.write("<br>");
document.write("Area of circle is: " + area_of_a_circle);
document.write("<br><br>");

//Ans13
var favourite_snack = "Chocolate Chip";
var Current_age = 22;
var Estimated_maximum_age = 65;
var amount_of_snacks_per_day = 3;
document.write("<b>The LifeTime Supply Calculator</b>");
document.write("<br><br>");
document.write("Favourite Snack is: " + favourite_snack);
document.write("<br>");
document.write("Current age is: " + Current_age);
document.write("<br>");
document.write("Estimated maximum age  is: " + Estimated_maximum_age);
document.write("<br>");
document.write("Amount of snacks per day  is: " + amount_of_snacks_per_day);
document.write("<br><br>");
document.write("You will need "+amount_of_snacks_per_day*(Estimated_maximum_age-Current_age)+" chocolate chips to last you untill the ripe old age of " + Estimated_maximum_age );