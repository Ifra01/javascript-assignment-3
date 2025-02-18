// ASSIGNMENT 3
// Chapter 9-11 - USER INPUT & CONDITIONAL STATEMENT

// Question 1 Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// answer:
// let cityName = prompt("enter your city name");
// let city = "karachi";
// if (city == cityName){
//     alert("welcome to the city of lights")
// }
// else{
//     alert("You doesn't belong to city of lights")
// }

//Question 2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// answer:
// let userGender = prompt("enter your gender");
// let gender = "male";
// if(gender == userGender){
//     alert("Good morning sir");
// }
// else{
//     alert("Good morning ma'am")
// }

// Question 3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table
// answer:
// let trafficSignal = prompt("enter any signal color");
// let color1 = "red";
// let color2 = "green";
// if (trafficSignal != color2) {
//     if (color1 == trafficSignal) {
//         alert("must stop");
//     }
//     else {
//         alert("ready to move");
//     }
// }
// else {
//     alert("Move now")
// }

// Question 4 Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// answer:
// let userFuel = +prompt("enter the remaining fuel in your car in litres");
// if (userFuel < 0.25){
//     document.write("Please refill the fuel in your car");
// }

// Question 5 Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// answer: true (++a means 1+a = 5)

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// answer: false (b++ {here post increment is given means addition will take place
// but new value would not be written} means 82 != 83);

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
//     }
// if (++c < 14){
//     alert("condition 3 is true");
//     }
// if(c === 14){
//     alert("condition 4 is true");
//     }
// answer: false (c++ {here post increment is given means addition will take place
// but new value would not be written} means 12 != 13);
// true ({ due to post increment, value increases to 13} hence c === 13);
// false (++c{value increases to 14 is not less than 14} means 14 = 14);
// true (as value has already increased to 14 means 14 = 14);

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// answer: true (20000 + 2000 = totalCost = 22000);

// e. if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// answer: true (true is a truthy value gives true response);
// false (false is a falsy value gives false response);

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// answer: true (not in the means of size but in respect of ascii code,
// which is a unique numeric code behind every key on keyboard so, the value of t is
// greater than r automically gives the answer in true);

// Question 6 Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// answer: let marksObtainedEnglish = +prompt("enter your marks in english");
// let marksObtainedUrdu = +prompt("enter your marks in urdu");
// let marksObtainedMaths = +prompt("enter your marks in maths");
// let grade;
// let remarks;

// let totalMarksEach = 100;
// let totalMarks = totalMarksEach * 3;

// let percentage = (marksObtainedEnglish + marksObtainedUrdu + marksObtainedMaths) * 100 / totalMarks;

// document.write("<h1>Mark Sheet</h1>")
// document.write("Total Marks : " + totalMarks);
// document.write("<br />")
// document.write("Marks Obtained : " + (marksObtainedEnglish + marksObtainedMaths + marksObtainedUrdu));
// document.write("<br />")
// document.write("Percentage : " + percentage);
// document.write("<br />")

// if (percentage >= 80) {
//     grade = "A one"
//     remarks = "excellent"
// }

// else if (percentage >= 70) {
//     grade = "A"
//     remarks = "good"
// }

// else if (percentage >= 60) {
//     grade = "B"
//     remarks = "you need to improve"
// }

// else if (percentage > 60) {
//     grade = "Fail"
//     remarks = "Sorry"
// }

// document.write("Grade : " + grade);
// document.write("<br />")
// document.write("Remarks : " + remarks);

// Question 7 Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// answer:
// let guessNum = +prompt("guess a number from 1 to 10");
// let realNum = 7;
// if(guessNum === realNum){
//     document.write("Bingo! Correct answer")
// }
// else{
//     if(guessNum === ++realNum){
//         document.write("Close enough to the correct answer")
//     }
//     else{
//         document.write("wrong answer! try again")
//     }
// }

// Question 8 Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// answer:
// let num = +prompt("enter a number divisible by 3");
// if (num % 3 === 0){
//     document.write("correct! your number is divisible by 3")
// }
// else{
//     document.write("wrong answer! try again")
// }

// Question 9 Write a program that checks whether the given input is an
// even number or an odd number.
// answer:
// let num = +prompt("enter a number");
// if (num % 2 === 0){
//     document.write("the number you gave is even number")
// }
// else{
//     document.write("the number you gave is odd number")
// }

// Question 10 Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// answer:
// let temp = +prompt("enter a temperature")
// let remarks;
// if(temp > 40){
//     remarks = "It is too hot outside."
// }
// else if(temp > 30){
//     remarks = "The Weather today is Normal."
// }
// else if(temp > 20){
//     remarks = "Today’s Weather is cool."
// }
// else if(temp > 10){
//     remarks = "OMG! Today’s weather is so Cool."
// }

// document.write(remarks);

// Question 11 Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// answer:
// let firstNumber = +prompt("enter a number");
// let secondNumber = +prompt("enter another number");
// let operation = prompt("enter an operation");
// let calculatedAnswer;

// if (operation == "+") {
//     calculatedAnswer = firstNumber + secondNumber
// }
// else {
//     if (operation == "-") {
//         calculatedAnswer = firstNumber - secondNumber;
//     }
//     if (operation == "*") {
//         calculatedAnswer = firstNumber * secondNumber;
//     }
//     if (operation == "/") {
//         calculatedAnswer = firstNumber / secondNumber;
//     }
//     if (operation == "%") {
//         calculatedAnswer = firstNumber % secondNumber;
//     }
// }
// document.write(calculatedAnswer);


// Chapter 12-13 - IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

// Question 1 Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// answer:
// let userInput = prompt("enter a character");
// let msg;
// if (userInput.charCodeAt() >= 65 && userInput.charCodeAt() <= 90) {
//     msg = "The input is an uppercase letter."
// }
// else if (userInput.charCodeAt() >= 97 && userInput.charCodeAt() <= 122) {
//     msg = "The input is an lowercase letter."
// }
// else if (userInput.charCodeAt() >= 48 && userInput.charCodeAt() <= 57) {
//     msg = "the input is a number."
// }
// else {
//     msg = "The input is neither a number nor a letter."
// }
// document.write(msg);

// Question 2 Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// answer:
// let integer1 = +prompt("enter first integer");
// let integer2 = +prompt("enter another integer");
// let result;
// if (integer1 > integer2) {
//     result = "the larger integer is " + integer1;
// }
// else {
//     if (integer1 < integer2){
//         result = "the larger integer is " + integer2;
//     }
//     else{
//         result = "both are equal"
//     }
// }
// document.write(result);

// Question 3 Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// answer:
// let num = +prompt("enter a number");
// let result;
// if (num !== 0) {
//     if (num > 0) {
//         result = "the number is positive"
//     }
//     if (num < 0) {
//         result = "the number is negative"
//     }
// }
// else {
//     result = "the result is also zero"
// }
// document.write(result);

// Question 4 Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
// answer:
// let userInput = prompt("enter a vowel");
// if (userInput == "A" || userInput == "a" || userInput == "E" || userInput == "e" || userInput == "I" || userInput == "i" || userInput == "O" || userInput == "o" || userInput == "U" || userInput == "u") {
//     document.write("true!")
// }
// else {
//     document.write("false!")
// }

// Question 5 Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
// answer:
// (a)
// let correctPassword = 1234;
// let reply;
// (b)
// let userPassword = +prompt("enter your password");
// (c)
// if (userPassword !== 0) {
//     if (userPassword === correctPassword) {
//         reply = "Correct! The password you entered matches the original password"
//     }
//     else {
//         reply = "Incorrect password"
//     }
// }
// else {
//     reply = "Please enter your password"
// }

// document.write(reply);

// Question 6 This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// answer:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// Question 7 Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// answer:
// let time = 1900;
// let greeting;
// if(time >= 0 && time <=1200){
//     greeting = "Good morning!"
// }
// else if(time >= 1200 && time <= 1700){
//     greeting = "Good afternoon!"
// }
// else if(time >= 1700 && time < 2100){
//     greeting = "Good evening!"
// }
// else if(time >= 2100 && time <= 2350){
//     greeting = "Good night!"
// }

// Chapter 14 - 16 - ARRAYS

// Question 1 Declare an empty array using JS literal notation to store
// student names in future.
// answer:
// let studentNames = [];

// Question 2 Declare an empty array using JS object notation to store
// student names in future.
// answer:
// studentNames: [];

// Question 3 Declare and initialize a strings array.
// answer:
// let cityNames = ["karachi", "lahore", "pindi", "quetta"];

// Question 4 Declare and initialize a numbers array.
// answer:
// let counting = [1, 2, 3, 4, 5];

// Question 5 Declare and initialize a boolean array.
// answer:
// let checking = [true, false];

// Question 6 Declare and initialize a mixed array.
// answer:
// let mixedArray = [true, 74648, "jfkgdybxcgsmj"];

// Question 7 Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:
// answer:
// let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write("<h1>Qualifications: </h1>");
// document.write(qualification.join("<br />"));

// Question 8 Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// answer:
// let studentNames = ["ifra", "insha", "sahar"];
// let marksObtained = [367, 411, 389];
// let result1 = "Score of " + studentNames[0] + " is " + marksObtained[0];
// let result2 = "Score of " + studentNames[1] + " is " + marksObtained[1];
// let result3 = "Score of " + studentNames[2] + " is " + marksObtained[2];
// let percentage1 = " Percentage: " + (marksObtained[0] * 100) / 500;
// let percentage2 = " Percentage: " + (marksObtained[1] * 100) / 500;
// let percentage3 = " Percentage: " + (marksObtained[2] * 100) / 500;

// document.write(result1 + percentage1 + "<br />");
// document.write(result2 + percentage2 + "<br />");
// document.write(result3 + percentage3 + "<br />");

// Question 9 Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// answer:
// let colors = [];
// (a)
// let initialColor = prompt("enter any color you wanna add at the beginning");
// colors.unshift(initialColor);
// document.write("ubdated array: " + colors + "<br />");
// (b)
// let lastColor = prompt("enter any color you wanna add at the last");
// colors.push(lastColor);
// document.write("ubdated array: " + colors + "<br />");
// (c)
// let firstColor = prompt("enter any color you wanna add at the beginning");
// let secondColor = prompt("enter one more color you wanna add at the beginning");
// colors.unshift(firstColor, secondColor);
// document.write("ubdated array: " + colors + "<br />");
// // (d)
// colors.shift();
// document.write("ubdated array: " + colors + "<br />");
// (e)
// colors.pop();
// document.write("ubdated array: " + colors + "<br />");
// (f)
// let indexNum = +prompt("at which index do you want to add a color");
// let color = prompt("which color do you want to add at this index");
// colors.splice(indexNum, 0, color);
// document.write("ubdated array: " + colors + "<br />");
// (g)
// indexNum = +prompt("at which index do you want to delete a color");
// let noOfColors = +prompt("how many colors you want to delete");
// colors.splice(indexNum, noOfColors);
// document.write("ubdated array: " + colors + "<br />");

// Question 10 Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// answer:
// let studentsScores = [321, 423, 344, 121, 876];
// document.write("student scores: " + studentsScores + "<br />")
// document.write(studentsScores.sort());

// Question 11 Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// answer:
// let cities = ["karachi", "lahore", "quetta", "peshawar", "pindi"];
// let selectedCities = cities.slice(1,3);
// document.write("city list: " + cities + "<br />");
// document.write("selected cities: " + selectedCities);

// Question 12 Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// answer: 
// var arr = ["this", "is", "my", "cat"];
// document.write(arr.join(" "));

// Question 13 Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// answer:
// let devices = ["mouse", "CPU", "keyboard", "monitor"];
// document.write(devices + "<br />");
// FIFO - first in first out
// document.write(devices.unshift("wires") + "<br />");
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />");
// document.write(devices + "<br />");

// Question 14 Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
//     First Out)
// answer:
// let devices = ["mouse", "CPU", "keyboard", "monitor"];
// document.write(devices + "<br />");
// LIFO - last in first out
// document.write(devices.push("wires") + "<br />");
// document.write(devices + "<br />");
// document.write(devices.shift() + "<br />");
// document.write(devices + "<br />");

// Question 15 Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
// answer:
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>")
// document.write("<option></option>")
// document.write("<option>" + phoneManufacturers[0] + "</option>" + "<br />")
// document.write("<option>" + phoneManufacturers[1] + "</option>" + "<br />")
// document.write("<option>" + phoneManufacturers[2] + "</option>" + "<br />")
// document.write("<option>" + phoneManufacturers[3] + "</option>" + "<br />")
// document.write("<option>" + phoneManufacturers[4] + "</option>" + "<br />")
// document.write("<option>" + phoneManufacturers[5] + "</option>" + "<br />")
// document.write("</select>")

// X -------------------- X ---------------------- X