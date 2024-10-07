                          // CHAPTER NUMBER 03


//QUESTION NO 1  
var height = 170;
var newHeight = height + 10;
alert(newHeight);               

// QUESTION NO 2
var num1= 50;
var num2= 30;
var sum = num1+num2;
alert(sum);

// QUESTION NO 3
var numToBeAdded = 20;
var num = 3;
var total = num + numToBeAdded;
alert(total);

// QUESTION NO 4
var price = 120;
var tax = price * 0.10;
var totalPrice = price + tax;
alert(totalPrice);



                          // CHAPTER NUMBER 04



// QUESTION NO 1
let myAddress = "Karachi"; 
alert(myAddress);

// QUESTION NO 2
var userName = " Syeda Mania Faraz ";
var userEmail = " mania@email.com ";
var userPassword = " 12345 ";
alert("Name: " + userName + "\nEmail: " + userEmail + "\nPassword: " + userPassword);

// QUESTION NO 3 
var user address = Karahi; //error
var userAddress = Karachi; //correct

//QUESTION NO 4
var rose = "Floribundas";
alert(rose);  //correct
var rose = "Floribundas";
alert(Rose);  //error



                           //CHAPTER NUMBER 05


//QUESTION NO 1
var sum = 25 + 30 ;
alert(sum);

//QUESTION NO 2
var num1= 25;
var num2= 5;
var sum = num1 + num2;
alert(sum);

//QUESTION NO 3
var modulusResult = 27 % 4;
alert(modulusResult);



                           // CHAPTER NUMBER 06


//QUESTION NO 1
var num = 3;
var newNum = num++;
alert (num);
alert (num++);

//QUESTION NO 2
var counter= 10;
counter++;
counter++;
alert(counter);

//QUESTION NO 3
var points = 20;
points--;
points++;
alert(points);

//QUESTION NO 4
var number = 0;
++number;
++number;
++number;
alert(number);



                           // CHAPTER NUMBER 07

//QUESTION NO 1
var result = (20 % 6);
console.log(result);

//QUESTION NO 2
var expressionValue = (6 + 2) * (5 - 3);
console.log(expressionValue);


                          // CHAPTER NUMBER 08

//QUESTION NO 1
var userName = prompt("What is your name?");
alert( " Hello " + userName + "!");

//QUESTION NO 2
var age = prompt('How old are you?');
if(age === null || age ===""){
    alert("No age provided");
}else{
    alert("You are " + age + " year old");
}

//QUESTION NO 3
var pets = prompt("How many pets do you have?");
if (pets === "") {
    alert("You didn't enter anything.");
} else {
    alert("You have " + pets + " pets.");
}

//QUESTION NO 4
var userInput = prompt ("Enter a number between 1 and 10");
var number = Number(userInput);
var result = number * 2;
alert( "The result is" + result);

//QUESTION NO 5
var favNum = prompt("What is your favorite number?");
favNum = favNum ? favNum : 7;
alert("Your favorite number is: " + favNum);



                            // CHAPTER NUMBER 09

//QUESTION NO 1
var answer = prompt("What is the capital of France?");                                                      
if (answer.toLowerCase() === "paris") { 
        alert("Correct!");
} else {
     alert("Try again!"); 
}

//QUESTION NO 2
var answer = prompt("What is the capital of France?");
if (answer.toLowerCase() === "paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}

//QUSTION NO 3
var answer = prompt("What is the capital of the United Kingdom?");
if (answer.toLowerCase() === "london" || answer.toLowerCase() === "the united kingdom") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is London.");
}

//QUESTION NO 4
var score = 0;

var answer1 = prompt("What is the capital of France?");
if (answer1.toLowerCase() === "paris") {
    score++;
    alert("Correct! Your score is now: " + score);
} else {
    alert("Incorrect, the correct answer is Paris. Your score is: " + score);
}

var answer2 = prompt("What is the capital of the United Kingdom?");
if (answer2.toLowerCase() === "london" || answer2.toLowerCase() === "the united kingdom") {
    score++;
    alert("Correct! Your score is now: " + score);
} else {
    alert("Incorrect, the correct answer is London. Your score is: " + score);
}

//QUESTION NO 5
var answer1 = prompt("What is the capital of Germany?");
var answer2 = prompt("What is 10 + 10?");

if (answer1.toLowerCase() === "berlin" && parseInt(answer2) === 20) {
    alert("You got both right!");
} else if (answer1.toLowerCase() === "berlin" || parseInt(answer2) === 20) {
    alert("You got one correct!");
} else {
    alert("You got both wrong.");
}

