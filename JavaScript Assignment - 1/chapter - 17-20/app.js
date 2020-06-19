//Ans1
var md_array = [[],[]];

//Ans2
var md_array2 = [[0,1,2,3],[1, 0, 1, 2],[2, 1, 0, 1]];
document.write(md_array2[0].join(" "));
document.write("<br>");
document.write(md_array2[1].join(" "));
document.write("<br>");
document.write(md_array2[2].join(" "));
document.write("<br><br>");

//Ans3
for (var number = 1; number <= 10; number++  ) {
    document.write(number+"<br>");
   }
document.write("<br><br>");

//Ans4
var message1 = prompt("Please enter the number for printing table");
var message2 = prompt("Please enter the limit of table");
document.write("Multiplication Table of : " + message1);
document.write("<br>");
document.write("Length : " + message2);
document.write("<br><br>");
for ( var table = 1; table <= message2; table ++){
      document.write(message1 + " x " + table + " = "+message1*table + "<br>");
}
document.write("<br><br>");

//Ans5
var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for (var i = 0;i<fruits.length;i++){
        document.write(fruits [i]+ "<br>");
}
document.write("<br>");
for (var i = 0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits [i]+ "<br>");
}
document.write("<br><br>");

//Ans6
document.write("Counting :");
document.write("<br><br>");
for (var i = 1;i < 16;i++){
    document.write(i + ",");
}
document.write("<br><br>");
document.write("Reverse Counting :");
document.write("<br><br>");
for (var i = 10;i > 0;i--){
    document.write(i + ",");
}
document.write("<br><br>");
document.write("Even :");
document.write("<br><br>");
for (var i=1; i<21; i++) {
    if(i % 2 === 0) {
      document.write(i + ",");
    }
  }
document.write("<br><br>");
document.write("Odd :");
document.write("<br><br>");
for (var i=1; i<20; i++) {
    if(i % 2 === 1) {
      document.write(i + ",");
    }
  }
document.write("<br><br>");
document.write("Series :");
document.write("<br><br>");
for (var i=1; i<21; i++) {
      if(i % 2 === 0) {
        document.write(i + "K, ");
      }
    }
document.write("<br><br>");

//Ans7
var array_7 = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
var input_search = prompt("What Do you want to order");
if (input_search == array_7[0]){
       document.write(input_search+" is available at index 0 in our bakery");
}else if (input_search == array_7[1]){
    document.write(input_search+" is available at index 1 in our bakery");
}else if (input_search == array_7[2]){
    document.write(input_search+" is available at index 2 in our bakery");
} else if (input_search == array_7[3]){
    document.write(input_search+" is available at index 3 in our bakery");
}else if (input_search == array_7[4]){
    document.write(input_search+" is available at index 4 in our bakery");
}else {
    document.write("We are Sorry "+input_search+" is not available at the moment ");
}
document.write("<br><br>");

//Ans8
var numbers = [24, 53, 78, 91, 130];
document.write("Array Elements :  " +numbers);
document.write("<br>");
document.write("largest Number is : "+Math.max.apply(0, numbers));
document.write("<br><br>");

//Ans9
var numbers = [24, 53, 78, 91, 130];
document.write("Array Elements :  " +numbers);
document.write("<br>");
document.write("Smallest Number is : "+Math.min.apply(0, numbers));
document.write("<br><br>");

//Ans10
for (var i=1; i<101; i++) {
    if(i % 5 === 0) {
      document.write(i + ",");
    }
  }












